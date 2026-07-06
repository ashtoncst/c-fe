# Production Environment Configuration
# This file contains variable values specific to the production environment
# Use this file with: terraform apply -var-file="environments/production.tfvars"

project_name = "converge-global-fe"
environment  = "production"
aws_region   = "ap-southeast-1"

# Container image URI (will be overridden by GitHub Actions)
container_image_uri = "116981782315.dkr.ecr.ap-southeast-1.amazonaws.com/converge-global-fe:latest"

# Backend API URL for sessionId generation and API calls (via CloudFront)
api_url = "https://daslokmp9y7qh.cloudfront.net/api"

# Backend WebSocket URL for real-time communication (via CloudFront)
socket_url = "wss://daslokmp9y7qh.cloudfront.net"

# Production App Runner settings (higher resources for performance)
app_runner_cpu    = "1"
app_runner_memory = "2"

# Higher auto-scaling limits for production traffic
app_runner_auto_scaling_min_size         = 2
app_runner_auto_scaling_max_size         = 10
app_runner_auto_scaling_max_concurrency  = 100

# Production GitHub settings
# github_repository_url = "https://github.com/your-username/converge-global-fe"
# github_branch         = "main"

# Custom domain for production (configure as needed)
# enable_custom_domain = true
# domain_name         = "your-production-domain.com"

# Enable comprehensive monitoring for production
enable_monitoring = true

# Production-specific tags
tags = {
  Environment   = "production"
  BusinessUnit  = "Frontend"
  Compliance    = "required"
  Backup        = "required"
  Owner         = "Wayne"
  CostCenter    = "Tech"
  Project       = "ConvergeGlobal"
}
