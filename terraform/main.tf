# This is the main Terraform configuration file that defines the AWS infrastructure
# It creates an AWS App Runner service to host the Next.js application
# App Runner automatically builds and deploys from a container or source repository
# It also includes supporting resources like IAM roles, CloudWatch logs, and optional custom domain

# Local values for computed configurations
locals {
  app_name_full = "${var.project_name}-${var.environment}"
  
  common_tags = merge(var.tags, {
    Project     = var.project_name
    Environment = var.environment
    Application = var.app_name
  })
}

# Data source to get current AWS account ID and region
data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

# ECR Repository for container images
resource "aws_ecr_repository" "main" {
  name                 = var.ecr_repository_name
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = local.common_tags
}

# ECR Repository Policy
resource "aws_ecr_repository_policy" "main" {
  repository = aws_ecr_repository.main.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowPull"
        Effect = "Allow"
        Principal = {
          Service = ["tasks.apprunner.amazonaws.com", "codebuild.amazonaws.com"]
        }
        Action = [
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:BatchCheckLayerAvailability"
        ]
      }
    ]
  })
}

# IAM Role for CodeBuild
resource "aws_iam_role" "codebuild_role" {
  name = "${local.app_name_full}-codebuild-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "codebuild.amazonaws.com"
        }
      }
    ]
  })

  tags = local.common_tags
}

# IAM Policy for CodeBuild
resource "aws_iam_role_policy" "codebuild_policy" {
  name = "${local.app_name_full}-codebuild-policy"
  role = aws_iam_role.codebuild_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:log-group:/aws/codebuild/*"
      },
      {
        Effect = "Allow"
        Action = [
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:GetAuthorizationToken",
          "ecr:PutImage",
          "ecr:InitiateLayerUpload",
          "ecr:UploadLayerPart",
          "ecr:CompleteLayerUpload"
        ]
        Resource = "*"
      },
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:GetObjectVersion"
        ]
        Resource = "arn:aws:s3:::codebuild-source-*/*"
      }
    ]
  })
}

# CodeBuild Project
resource "aws_codebuild_project" "main" {
  name          = "${local.app_name_full}-build"
  description   = "Build Docker images for ${var.project_name}"
  service_role  = aws_iam_role.codebuild_role.arn

  artifacts {
    type = "NO_ARTIFACTS"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                      = "aws/codebuild/amazonlinux2-x86_64-standard:5.0"
    type                       = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"
    privileged_mode            = true

    environment_variable {
      name  = "AWS_DEFAULT_REGION"
      value = data.aws_region.current.name
    }

    environment_variable {
      name  = "AWS_ACCOUNT_ID"
      value = data.aws_caller_identity.current.account_id
    }

    environment_variable {
      name  = "IMAGE_REPO_NAME"
      value = aws_ecr_repository.main.name
    }

    environment_variable {
      name  = "IMAGE_TAG"
      value = "latest"
    }

    environment_variable {
      name  = "NEXT_PUBLIC_API_URL"
      value = var.api_url
    }

    environment_variable {
      name  = "NEXT_PUBLIC_SOCKET_URL"
      value = var.socket_url
    }
  }

  source {
    type = "NO_SOURCE"
    buildspec = file("${path.module}/../buildspec.yml")
  }

  tags = local.common_tags
}

# IAM role for App Runner service
resource "aws_iam_role" "app_runner_instance_role" {
  name = "${local.app_name_full}-app-runner-instance-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "tasks.apprunner.amazonaws.com"
        }
      }
    ]
  })

  tags = local.common_tags
}

# IAM access role for App Runner to access ECR
resource "aws_iam_role" "app_runner_access_role" {
  name = "${local.app_name_full}-app-runner-access-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "build.apprunner.amazonaws.com"
        }
      }
    ]
  })

  tags = local.common_tags
}

# Attach ECR access policy to access role
resource "aws_iam_role_policy_attachment" "app_runner_access_ecr" {
  role       = aws_iam_role.app_runner_access_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess"
}

# IAM policy for App Runner to access ECR
resource "aws_iam_role_policy" "app_runner_ecr_access" {
  name = "${local.app_name_full}-ecr-access"
  role = aws_iam_role.app_runner_instance_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetAuthorizationToken"
        ]
        Resource = "*"
      }
    ]
  })
}


# CloudWatch Log Group for App Runner
resource "aws_cloudwatch_log_group" "app_runner_logs" {
  name              = "/aws/apprunner/${local.app_name_full}"
  retention_in_days = 7

  tags = local.common_tags
}

# App Runner Service Configuration
resource "aws_apprunner_service" "main" {
  service_name = local.app_name_full

  # Source configuration - can be from ECR or GitHub
  source_configuration {
    # Enable auto-deployments for both GitHub and ECR sources
    # When using ECR with :latest tag, this allows App Runner to automatically deploy when new images are pushed
    auto_deployments_enabled = true
    
    # Authentication configuration for ECR
    authentication_configuration {
      access_role_arn = var.container_image_uri != "" ? aws_iam_role.app_runner_access_role.arn : null
    }

    # Choose between GitHub source or Docker source
    dynamic "code_repository" {
      for_each = var.github_repository_url != "" ? [1] : []
      content {
        repository_url = var.github_repository_url
        
        source_code_version {
          type  = "BRANCH"
          value = var.github_branch
        }
        
        code_configuration {
          configuration_source = "API"
          
          code_configuration_values {
            runtime                 = "NODEJS_18"
            build_command          = "npm ci && npm run build"
            start_command          = "npm start"
            runtime_environment_variables = merge(
              {
                NODE_ENV = var.environment == "production" ? "production" : "development"
                PORT     = "3000"
              },
              var.api_url != "" ? {
                NEXT_PUBLIC_API_URL = var.api_url
              } : {},
              var.socket_url != "" ? {
                NEXT_PUBLIC_SOCKET_URL = var.socket_url
              } : {}
            )
          }
        }
      }
    }

    # Use custom ECR image if provided, otherwise fallback to demo image
    dynamic "image_repository" {
      for_each = var.github_repository_url == "" ? [1] : []
      content {
        image_identifier = var.container_image_uri != "" ? var.container_image_uri : "public.ecr.aws/aws-containers/hello-app-runner:latest"
        image_repository_type = var.container_image_uri != "" ? "ECR" : "ECR_PUBLIC"
        
        image_configuration {
          port = "3000"
          runtime_environment_variables = merge(
            {
              NODE_ENV = var.environment == "production" ? "production" : "development"
              PORT     = "3000"
            },
            var.api_url != "" ? {
              NEXT_PUBLIC_API_URL = var.api_url
            } : {},
            var.socket_url != "" ? {
              NEXT_PUBLIC_SOCKET_URL = var.socket_url
            } : {}
          )
        }
      }
    }

  }

  # Instance configuration with ECR access role
  instance_configuration {
    cpu    = "${var.app_runner_cpu} vCPU"
    memory = "${var.app_runner_memory} GB"
    instance_role_arn = aws_iam_role.app_runner_instance_role.arn
  }

  # Health check configuration
  health_check_configuration {
    healthy_threshold   = 2
    interval            = 10
    path                = "/"
    protocol            = "HTTP"
    timeout             = 5
    unhealthy_threshold = 3
  }

  tags = local.common_tags
}

# Custom domain association (optional)
resource "aws_apprunner_custom_domain_association" "main" {
  count       = var.enable_custom_domain ? 1 : 0
  domain_name = var.domain_name
  service_arn = aws_apprunner_service.main.arn
}

# CloudWatch Alarms for monitoring (optional)
resource "aws_cloudwatch_metric_alarm" "app_runner_cpu_utilization" {
  count               = var.enable_monitoring ? 1 : 0
  alarm_name          = "${local.app_name_full}-cpu-utilization"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/AppRunner"
  period              = "300"
  statistic           = "Average"
  threshold           = "80"
  alarm_description   = "This metric monitors App Runner CPU utilization"
  alarm_actions       = [] # Add SNS topic ARN here if you want notifications

  dimensions = {
    ServiceName = aws_apprunner_service.main.service_name
  }

  tags = local.common_tags
}

resource "aws_cloudwatch_metric_alarm" "app_runner_memory_utilization" {
  count               = var.enable_monitoring ? 1 : 0
  alarm_name          = "${local.app_name_full}-memory-utilization"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "MemoryUtilization"
  namespace           = "AWS/AppRunner"
  period              = "300"
  statistic           = "Average"
  threshold           = "80"
  alarm_description   = "This metric monitors App Runner memory utilization"
  alarm_actions       = [] # Add SNS topic ARN here if you want notifications

  dimensions = {
    ServiceName = aws_apprunner_service.main.service_name
  }

  tags = local.common_tags
}
