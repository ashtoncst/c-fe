# This file configures the AWS provider and Terraform backend
# It sets up the required Terraform version and AWS provider configuration
# The provider can use credentials from various sources (environment variables, AWS profiles, etc.)

terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # S3 remote state backend for shared state across CI/CD runs
  # Run setup-remote-state.sh first to create the S3 bucket and DynamoDB table
  # The 'key' will be set per environment in the workflow via: terraform init -backend-config="key=converge-global-fe/${ENV}.tfstate"
  backend "s3" {
    bucket         = "terraform-state-116981782315-ap-southeast-1"
    key            = "converge-global-fe/default.tfstate"
    region         = "ap-southeast-1"
    dynamodb_table = "terraform-state-lock"
    encrypt        = true
  }
}

# AWS Provider configuration
# This will use credentials from:
# 1. Environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
# 2. AWS credentials file (~/.aws/credentials)
# 3. AWS profile specified in AWS_PROFILE environment variable
# 4. IAM roles if running on EC2/ECS/Lambda
provider "aws" {
  region = var.aws_region
  
  # Optional: Use a specific profile for personal vs work AWS accounts
  # Uncomment and set this if you want to use a specific AWS profile
  # profile = var.aws_profile
  
  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}
