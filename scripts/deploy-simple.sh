#!/bin/bash

# Simple deployment script that builds locally but pushes to ECR quickly
# Avoids Docker hanging issues by using lightweight build process

set -e

print_info() {
    echo -e "\033[0;34m[INFO]\033[0m $1"
}

print_success() {
    echo -e "\033[0;32m[SUCCESS]\033[0m $1"
}

print_error() {
    echo -e "\033[0;31m[ERROR]\033[0m $1"
}

ENVIRONMENT=${1:-staging}
AWS_REGION="ap-southeast-1"
ECR_REPOSITORY="converge-global-fe"

print_info "Starting simple deployment for $ENVIRONMENT"

# Get ECR login
print_info "Logging into ECR..."
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# Build with minimal context
print_info "Building minimal Docker image..."
docker build --no-cache -t $ECR_REPOSITORY:latest . || {
    print_error "Docker build failed"
    exit 1
}

# Tag and push
ECR_URI="$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY"
print_info "Pushing to ECR: $ECR_URI"

docker tag $ECR_REPOSITORY:latest $ECR_URI:latest
docker push $ECR_URI:latest

print_success "Image pushed successfully!"

# Update App Runner
print_info "Updating App Runner service..."
cd terraform

export TF_VAR_container_image_uri="$ECR_URI:latest"
terraform apply -auto-approve -var-file="environments/$ENVIRONMENT.tfvars"

APP_URL=$(terraform output -raw app_runner_service_url)
print_success "Deployment complete!"
print_info "🚀 Application URL: $APP_URL"

# Clean up
docker rmi $ECR_REPOSITORY:latest $ECR_URI:latest || true
print_success "Cleanup complete!"
