#!/bin/bash

# This script allows you to deploy from your local machine using the same Docker workflow as CI/CD
# Useful for testing deployment process or emergency deployments
# Usage: ./scripts/deploy-local.sh [environment]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Configuration
ENVIRONMENT=${1:-staging}
AWS_REGION="ap-southeast-1"
ECR_REPOSITORY="converge-global-fe"
IMAGE_TAG=$(git rev-parse HEAD)

# Validate environment
if [[ ! "$ENVIRONMENT" =~ ^(staging|production)$ ]]; then
    print_error "Invalid environment: $ENVIRONMENT"
    print_info "Valid environments: staging, production"
    exit 1
fi

print_info "Starting local deployment for $ENVIRONMENT environment"

# Check prerequisites
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v aws &> /dev/null; then
    print_error "AWS CLI is not installed. Please install AWS CLI first."
    exit 1
fi

if ! command -v terraform &> /dev/null; then
    print_error "Terraform is not installed. Please install Terraform first."
    exit 1
fi

# Check AWS credentials
if ! aws sts get-caller-identity &> /dev/null; then
    print_error "AWS credentials are not configured. Please set up AWS credentials."
    exit 1
fi

# Get AWS account info
AWS_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
print_info "Deploying to AWS Account: $AWS_ACCOUNT in region: $AWS_REGION"

# Step 1: Build Docker image
print_info "Building Docker image..."
docker build -t $ECR_REPOSITORY:$IMAGE_TAG .
docker build -t $ECR_REPOSITORY:latest .
print_success "Docker image built successfully"

# Step 2: Login to ECR and get registry URL
print_info "Logging into ECR..."
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com
ECR_REGISTRY="$AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com"

# Step 3: Create ECR repository if it doesn't exist
print_info "Ensuring ECR repository exists..."
aws ecr describe-repositories --repository-names $ECR_REPOSITORY --region $AWS_REGION &> /dev/null || {
    print_info "Creating ECR repository..."
    aws ecr create-repository --repository-name $ECR_REPOSITORY --region $AWS_REGION
    print_success "ECR repository created"
}

# Step 4: Tag and push images
print_info "Pushing images to ECR..."
docker tag $ECR_REPOSITORY:$IMAGE_TAG $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
docker tag $ECR_REPOSITORY:latest $ECR_REGISTRY/$ECR_REPOSITORY:latest

docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
docker push $ECR_REGISTRY/$ECR_REPOSITORY:latest
print_success "Images pushed to ECR successfully"

# Step 5: Deploy with Terraform
print_info "Deploying with Terraform..."
cd terraform

# Initialize if needed
if [[ ! -d ".terraform" ]]; then
    terraform init
fi

# Apply with container image
export TF_VAR_container_image_uri="$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG"
terraform apply -auto-approve -var-file="environments/$ENVIRONMENT.tfvars"

# Get deployment URL
APP_URL=$(terraform output -raw app_runner_service_url)
print_success "Deployment completed successfully!"
print_info "🚀 Application URL: $APP_URL"
print_info "📊 CloudWatch Logs: aws logs tail /aws/apprunner/converge-global-fe-$ENVIRONMENT --follow"

# Clean up local images
print_info "Cleaning up local Docker images..."
docker rmi $ECR_REPOSITORY:$IMAGE_TAG $ECR_REPOSITORY:latest || true

print_success "Local deployment script completed!"
