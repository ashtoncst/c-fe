# Staging Environment Configuration (uses dev branch)
# This file contains variable values for staging environment
# Staging uses the same resources as dev but with "staging" environment tag

project_name = "converge-global-fe"
environment  = "staging"
aws_region   = "ap-southeast-1"

# Container image URI (will be overridden by GitHub Actions)
container_image_uri = "116981782315.dkr.ecr.ap-southeast-1.amazonaws.com/converge-global-fe:latest"

# Backend API URL for sessionId generation and API calls (via CloudFront)
api_url = "https://daslokmp9y7qh.cloudfront.net/api"

# Backend WebSocket URL for real-time communication (via CloudFront)
socket_url = "wss://daslokmp9y7qh.cloudfront.net"

# Staging App Runner settings (same as dev for cost efficiency)
app_runner_cpu    = "0.25"
app_runner_memory = "0.5"

# Staging auto-scaling limits
app_runner_auto_scaling_min_size         = 1
app_runner_auto_scaling_max_size         = 5
app_runner_auto_scaling_max_concurrency  = 75

# No custom domain for staging
enable_custom_domain = false

# Enable monitoring for staging
enable_monitoring = true

# Staging-specific tags
tags = {
  Environment = "staging"
  Purpose     = "pre-production"
  Branch      = "dev"
  Owner       = "Wayne"
  CostCenter  = "Tech"
  Project     = "ConvergeGlobal"
}
