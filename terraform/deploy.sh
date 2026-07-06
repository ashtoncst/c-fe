#!/bin/bash

# This script simplifies Terraform deployment with proper error handling and validation
# Usage: ./deploy.sh [environment] [action]
# Example: ./deploy.sh dev apply
# Example: ./deploy.sh production plan

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
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

# Default values
ENVIRONMENT=${1:-dev}
ACTION=${2:-plan}

# Validate environment
if [[ ! "$ENVIRONMENT" =~ ^(dev|staging|production)$ ]]; then
    print_error "Invalid environment: $ENVIRONMENT"
    print_info "Valid environments: dev, staging, production"
    exit 1
fi

# Validate action
if [[ ! "$ACTION" =~ ^(init|plan|apply|destroy|output|validate|fmt)$ ]]; then
    print_error "Invalid action: $ACTION"
    print_info "Valid actions: init, plan, apply, destroy, output, validate, fmt"
    exit 1
fi

print_info "Starting Terraform $ACTION for $ENVIRONMENT environment"

# Check if terraform is installed
if ! command -v terraform &> /dev/null; then
    print_error "Terraform is not installed. Please install Terraform first."
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    print_error "AWS credentials are not configured. Please set up AWS credentials."
    print_info "Options:"
    print_info "1. Set environment variables: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY"
    print_info "2. Configure AWS CLI: aws configure"
    print_info "3. Use AWS profile: export AWS_PROFILE=your-profile"
    exit 1
fi

# Get AWS account info
AWS_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
AWS_REGION=$(aws configure get region || echo "us-east-1")
print_info "Deploying to AWS Account: $AWS_ACCOUNT in region: $AWS_REGION"

# Environment-specific variables file
VAR_FILE="environments/${ENVIRONMENT}.tfvars"

# Check if environment-specific tfvars file exists
if [[ ! -f "$VAR_FILE" ]]; then
    print_error "Environment file not found: $VAR_FILE"
    print_info "Available environment files:"
    ls -la environments/*.tfvars 2>/dev/null || print_warning "No environment files found"
    exit 1
fi

# Initialize Terraform if .terraform directory doesn't exist or if init action
if [[ ! -d ".terraform" ]] || [[ "$ACTION" == "init" ]]; then
    print_info "Initializing Terraform with backend config for $ENVIRONMENT environment..."
    terraform init -backend-config="key=converge-global-fe/${ENVIRONMENT}.tfstate"
    print_success "Terraform initialized successfully"
fi

# Execute the requested action
case $ACTION in
    "plan")
        print_info "Planning Terraform changes for $ENVIRONMENT..."
        terraform plan -var-file="$VAR_FILE" -out="terraform-${ENVIRONMENT}.tfplan"
        print_success "Plan completed. Review the changes above."
        print_info "To apply these changes, run: ./deploy.sh $ENVIRONMENT apply"
        ;;
    
    "apply")
        # Check if plan file exists
        PLAN_FILE="terraform-${ENVIRONMENT}.tfplan"
        if [[ -f "$PLAN_FILE" ]]; then
            print_info "Applying Terraform plan for $ENVIRONMENT..."
            terraform apply "$PLAN_FILE"
            rm -f "$PLAN_FILE"  # Clean up plan file
        else
            print_warning "No plan file found. Creating new plan and applying..."
            terraform apply -var-file="$VAR_FILE"
        fi
        
        print_success "Deployment completed successfully!"
        print_info "Getting deployment outputs..."
        terraform output
        ;;
    
    "destroy")
        print_warning "This will destroy all resources in the $ENVIRONMENT environment!"
        read -p "Are you sure you want to continue? (yes/no): " -r
        if [[ $REPLY =~ ^yes$ ]]; then
            print_info "Destroying Terraform resources for $ENVIRONMENT..."
            terraform destroy -var-file="$VAR_FILE"
            print_success "Resources destroyed successfully"
        else
            print_info "Destroy cancelled"
        fi
        ;;
    
    "output")
        print_info "Showing Terraform outputs for $ENVIRONMENT..."
        terraform output
        ;;
    
    "validate")
        print_info "Validating Terraform configuration..."
        terraform validate
        print_success "Terraform configuration is valid"
        ;;
    
    "fmt")
        print_info "Formatting Terraform files..."
        terraform fmt -recursive
        print_success "Terraform files formatted"
        ;;
esac

print_success "Script completed successfully!"
