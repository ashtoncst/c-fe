# This file defines output values that will be displayed after Terraform applies changes
# Outputs are useful for getting important information like URLs, ARNs, and IDs
# These values can also be used by other Terraform configurations or CI/CD pipelines

output "app_runner_service_url" {
  description = "The URL of the App Runner service where your application is hosted"
  value       = "https://${aws_apprunner_service.main.service_url}"
}

output "app_runner_service_arn" {
  description = "The ARN of the App Runner service"
  value       = aws_apprunner_service.main.arn
}

output "app_runner_service_id" {
  description = "The ID of the App Runner service"
  value       = aws_apprunner_service.main.service_id
}

output "app_runner_service_status" {
  description = "The current status of the App Runner service"
  value       = aws_apprunner_service.main.status
}

output "custom_domain_url" {
  description = "The custom domain URL (if custom domain is enabled)"
  value       = var.enable_custom_domain ? "https://${var.domain_name}" : null
}

output "custom_domain_status" {
  description = "The status of the custom domain association"
  value       = var.enable_custom_domain ? aws_apprunner_custom_domain_association.main[0].status : null
}

output "custom_domain_certificate_validation_records" {
  description = "DNS records needed for domain validation (if custom domain is enabled)"
  value       = var.enable_custom_domain ? aws_apprunner_custom_domain_association.main[0].certificate_validation_records : null
}

output "cloudwatch_log_group_name" {
  description = "Name of the CloudWatch log group for App Runner logs"
  value       = aws_cloudwatch_log_group.app_runner_logs.name
}

output "iam_instance_role_arn" {
  description = "ARN of the IAM role used by App Runner instances"
  value       = aws_iam_role.app_runner_instance_role.arn
}

output "aws_region" {
  description = "AWS region where resources are deployed"
  value       = data.aws_region.current.name
}

output "aws_account_id" {
  description = "AWS account ID where resources are deployed"
  value       = data.aws_caller_identity.current.account_id
}

output "environment" {
  description = "Environment name"
  value       = var.environment
}

output "project_name" {
  description = "Project name"
  value       = var.project_name
}

output "ecr_repository_url" {
  description = "URL of the ECR repository for container images"
  value       = aws_ecr_repository.main.repository_url
}

output "ecr_repository_arn" {
  description = "ARN of the ECR repository"
  value       = aws_ecr_repository.main.arn
}
