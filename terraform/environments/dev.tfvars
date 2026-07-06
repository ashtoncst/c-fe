# Development Environment Configuration
# This file contains variable values specific to the development environment
# Use this file with: terraform apply -var-file="environments/dev.tfvars"

project_name = "converge-global-fe"
environment  = "dev"
aws_region   = "ap-southeast-1"

# Container image URI (will be overridden by GitHub Actions)
container_image_uri = "116981782315.dkr.ecr.ap-southeast-1.amazonaws.com/converge-global-fe:latest"

# Backend API URL for sessionId generation and API calls (via CloudFront)
api_url = "https://daslokmp9y7qh.cloudfront.net/api"

# Backend WebSocket URL for real-time communication (via CloudFront)
socket_url = "wss://daslokmp9y7qh.cloudfront.net"

# Development-specific App Runner settings (smaller resources to save costs)
app_runner_cpu    = "0.25"
app_runner_memory = "0.5"

# Lower auto-scaling limits for development
app_runner_auto_scaling_min_size         = 1
app_runner_auto_scaling_max_size         = 3
app_runner_auto_scaling_max_concurrency  = 50

# Development GitHub settings (optional)
# github_repository_url = "https://github.com/your-username/converge-global-fe"
# github_branch         = "dev"

# No custom domain for development
enable_custom_domain = false

# Enable monitoring for development
enable_monitoring = true

# Development-specific tags
tags = {
  Environment   = "development"
  Purpose       = "testing"
  AutoShutdown  = "true"
  Owner         = "Wayne"
  CostCenter    = "Tech"
  Project       = "ConvergeGlobal"
}
