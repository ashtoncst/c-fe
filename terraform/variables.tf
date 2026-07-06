# This file defines all input variables for the Terraform configuration
# Variables allow you to customize the deployment without modifying the main configuration
# You can set these values via terraform.tfvars files, environment variables, or command line

variable "project_name" {
  description = "Name of the project - used for resource naming and tagging"
  type        = string
  default     = "converge-global-fe"
}

variable "environment" {
  description = "Environment name (dev, staging, production)"
  type        = string
  default     = "dev"
  
  validation {
    condition     = contains(["dev", "staging", "production"], var.environment)
    error_message = "Environment must be one of: dev, staging, production."
  }
}

variable "aws_region" {
  description = "AWS region where resources will be created"
  type        = string
  default     = "us-east-1"
}

variable "aws_profile" {
  description = "AWS profile to use for authentication (optional)"
  type        = string
  default     = null
}

variable "app_name" {
  description = "Name of the application"
  type        = string
  default     = "converge-global-frontend"
}

variable "app_runner_cpu" {
  description = "CPU units for App Runner service (0.25, 0.5, 1, 2, 4 vCPU)"
  type        = string
  default     = "0.25"
  
  validation {
    condition     = contains(["0.25", "0.5", "1", "2", "4"], var.app_runner_cpu)
    error_message = "CPU must be one of: 0.25, 0.5, 1, 2, 4."
  }
}

variable "app_runner_memory" {
  description = "Memory for App Runner service (0.5, 1, 2, 3, 4, 6, 8, 10, 12 GB)"
  type        = string
  default     = "0.5"
  
  validation {
    condition     = contains(["0.5", "1", "2", "3", "4", "6", "8", "10", "12"], var.app_runner_memory)
    error_message = "Memory must be one of: 0.5, 1, 2, 3, 4, 6, 8, 10, 12."
  }
}

variable "app_runner_auto_scaling_max_concurrency" {
  description = "Maximum number of concurrent requests per App Runner instance"
  type        = number
  default     = 100
}

variable "app_runner_auto_scaling_max_size" {
  description = "Maximum number of App Runner instances"
  type        = number
  default     = 10
}

variable "app_runner_auto_scaling_min_size" {
  description = "Minimum number of App Runner instances"
  type        = number
  default     = 1
}

variable "github_repository_url" {
  description = "GitHub repository URL for automatic deployments"
  type        = string
  default     = ""
}

variable "github_branch" {
  description = "GitHub branch to deploy from"
  type        = string
  default     = "main"
}

variable "container_image_uri" {
  description = "URI of the container image to deploy (optional - uses default if not specified)"
  type        = string
  default     = ""
}

variable "ecr_repository_name" {
  description = "Name of the ECR repository for container images"
  type        = string
  default     = "converge-global-fe"
}

variable "enable_custom_domain" {
  description = "Whether to enable custom domain for the application"
  type        = bool
  default     = false
}

variable "domain_name" {
  description = "Custom domain name for the application (if enable_custom_domain is true)"
  type        = string
  default     = ""
}

variable "enable_monitoring" {
  description = "Whether to enable CloudWatch monitoring and alarms"
  type        = bool
  default     = true
}

variable "tags" {
  description = "Additional tags to apply to all resources"
  type        = map(string)
  default     = {}
}

variable "api_url" {
  description = "Backend API URL for the application"
  type        = string
  default     = ""
}

variable "socket_url" {
  description = "Backend WebSocket URL for real-time communication"
  type        = string
  default     = ""
}
