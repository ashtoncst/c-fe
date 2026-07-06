#!/bin/bash

# This script sets up remote state backend for Terraform
# It creates an S3 bucket and DynamoDB table for state locking
# Run this ONCE before enabling the remote backend

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

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

# Get AWS account ID and region
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
AWS_REGION=${AWS_REGION:-ap-southeast-1}

# Define resource names
STATE_BUCKET="terraform-state-${AWS_ACCOUNT_ID}-${AWS_REGION}"
DYNAMODB_TABLE="terraform-state-lock"

print_info "Setting up Terraform remote state backend..."
print_info "AWS Account: $AWS_ACCOUNT_ID"
print_info "Region: $AWS_REGION"
print_info "S3 Bucket: $STATE_BUCKET"
print_info "DynamoDB Table: $DYNAMODB_TABLE"

# Create S3 bucket for state storage
print_info "Creating S3 bucket for Terraform state..."
if aws s3 ls "s3://$STATE_BUCKET" 2>/dev/null; then
    print_warning "S3 bucket already exists: $STATE_BUCKET"
else
    aws s3api create-bucket \
        --bucket "$STATE_BUCKET" \
        --region "$AWS_REGION" \
        --create-bucket-configuration LocationConstraint="$AWS_REGION" \
        --acl private

    # Enable versioning
    aws s3api put-bucket-versioning \
        --bucket "$STATE_BUCKET" \
        --versioning-configuration Status=Enabled

    # Enable encryption
    aws s3api put-bucket-encryption \
        --bucket "$STATE_BUCKET" \
        --server-side-encryption-configuration '{
            "Rules": [{
                "ApplyServerSideEncryptionByDefault": {
                    "SSEAlgorithm": "AES256"
                }
            }]
        }'

    # Block public access
    aws s3api put-public-access-block \
        --bucket "$STATE_BUCKET" \
        --public-access-block-configuration \
            BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true

    print_success "S3 bucket created: $STATE_BUCKET"
fi

# Create DynamoDB table for state locking
print_info "Creating DynamoDB table for state locking..."
if aws dynamodb describe-table --table-name "$DYNAMODB_TABLE" --region "$AWS_REGION" 2>/dev/null; then
    print_warning "DynamoDB table already exists: $DYNAMODB_TABLE"
else
    aws dynamodb create-table \
        --table-name "$DYNAMODB_TABLE" \
        --attribute-definitions AttributeName=LockID,AttributeType=S \
        --key-schema AttributeName=LockID,KeyType=HASH \
        --billing-mode PAY_PER_REQUEST \
        --region "$AWS_REGION" \
        --tags Key=Purpose,Value=TerraformStateLocking \
              Key=ManagedBy,Value=TerraformSetup

    print_success "DynamoDB table created: $DYNAMODB_TABLE"
fi

# Update providers.tf with backend configuration
print_info "Backend resources are ready!"
print_success "✅ Setup complete!"
echo ""
print_info "Next steps:"
echo "1. Uncomment the backend block in providers.tf"
echo "2. Update the bucket and region values:"
echo "   bucket = \"$STATE_BUCKET\""
echo "   region = \"$AWS_REGION\""
echo "   dynamodb_table = \"$DYNAMODB_TABLE\""
echo "3. Run: terraform init -migrate-state"
echo "4. Commit and push the updated providers.tf"

