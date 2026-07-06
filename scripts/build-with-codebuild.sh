#!/bin/bash

# This script triggers AWS CodeBuild to build your Docker image remotely
# It uploads the source code to CodeBuild instead of using GitHub authentication
# Much faster than local Docker builds

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

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Configuration
ENVIRONMENT=${1:-staging}
AWS_REGION="ap-southeast-1"
PROJECT_NAME="converge-global-fe-staging-build"

print_info "Starting CodeBuild for $ENVIRONMENT environment"

# Check if AWS CLI is configured
if ! aws sts get-caller-identity &> /dev/null; then
    print_error "AWS credentials not configured"
    exit 1
fi

# Create a zip file of the source code (excluding node_modules)
print_info "Creating source code package..."
zip -r source.zip . -x "node_modules/*" ".git/*" ".terraform/*" "*.log" || {
    print_error "Failed to create source package"
    exit 1
}

# Upload to S3 (create bucket if needed)
BUCKET_NAME="codebuild-source-$(aws sts get-caller-identity --query Account --output text)"
print_info "Uploading source to S3..."

aws s3 mb s3://$BUCKET_NAME --region $AWS_REGION 2>/dev/null || true
aws s3 cp source.zip s3://$BUCKET_NAME/converge-global-fe-source.zip

# Start build with S3 source
print_info "Starting CodeBuild with S3 source..."
BUILD_ID=$(aws codebuild start-build \
    --project-name $PROJECT_NAME \
    --source-type-override S3 \
    --source-location-override "$BUCKET_NAME/converge-global-fe-source.zip" \
    --query 'build.id' \
    --output text)

print_success "CodeBuild started: $BUILD_ID"

# Monitor build progress
print_info "Monitoring build progress..."
while true; do
    STATUS=$(aws codebuild batch-get-builds --ids $BUILD_ID --query 'builds[0].buildStatus' --output text)
    PHASE=$(aws codebuild batch-get-builds --ids $BUILD_ID --query 'builds[0].currentPhase' --output text)
    
    echo "Status: $STATUS | Phase: $PHASE"
    
    if [ "$STATUS" = "SUCCEEDED" ]; then
        print_success "Build completed successfully!"
        
        # Get the image URI
        ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
        IMAGE_URI="$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/converge-global-fe:latest"
        print_success "Built image: $IMAGE_URI"
        
        # Clean up
        rm -f source.zip
        aws s3 rm s3://$BUCKET_NAME/converge-global-fe-source.zip
        
        echo "IMAGE_URI=$IMAGE_URI"
        break
        
    elif [ "$STATUS" = "FAILED" ] || [ "$STATUS" = "FAULT" ] || [ "$STATUS" = "STOPPED" ] || [ "$STATUS" = "TIMED_OUT" ]; then
        print_error "Build failed with status: $STATUS"
        print_info "Check logs at: https://console.aws.amazon.com/codesuite/codebuild/projects/$PROJECT_NAME/build/$BUILD_ID"
        
        # Clean up
        rm -f source.zip
        exit 1
    fi
    
    sleep 15
done
