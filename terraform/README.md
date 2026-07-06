# Terraform AWS Deployment for Converge Global Frontend

This directory contains Terraform configurations to deploy the Converge Global Frontend Next.js application to AWS using App Runner.

## 🏗️ Architecture

The infrastructure includes:

- **AWS App Runner**: Hosts the Next.js application with automatic scaling
- **CloudWatch**: Logging and monitoring
- **IAM Roles**: Secure access permissions
- **Custom Domain**: Optional custom domain support
- **Auto Scaling**: Automatic scaling based on traffic

## 📁 File Structure

```
terraform/
├── main.tf                    # Main infrastructure resources (App Runner, IAM, CloudWatch)
├── variables.tf               # Input variable definitions
├── outputs.tf                 # Output values (URLs, ARNs, etc.)
├── providers.tf               # AWS provider and Terraform configuration
├── terraform.tfvars.example   # Example variable values
├── .gitignore                 # Git ignore rules for Terraform files
├── environments/              # Environment-specific configurations
│   ├── dev.tfvars            # Development environment settings
│   └── production.tfvars     # Production environment settings
└── README.md                 # This file
```

## 🚀 Quick Start

### 1. Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= 1.0
- AWS CLI configured or AWS credentials set up
- Node.js application ready for deployment

### 2. AWS Credentials Setup

You have several options to configure AWS credentials:

#### Option A: Environment Variables (Recommended for CI/CD)

```bash
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
export AWS_DEFAULT_REGION="us-east-1"
```

#### Option B: AWS CLI Profile (Recommended for personal use)

```bash
# Configure AWS CLI
aws configure --profile personal
aws configure --profile work

# Use specific profile
export AWS_PROFILE=personal
# OR uncomment and set aws_profile in terraform.tfvars
```

#### Option C: AWS Credentials File

```bash
# Edit ~/.aws/credentials
[personal]
aws_access_key_id = your-personal-access-key
aws_secret_access_key = your-personal-secret-key

[work]
aws_access_key_id = your-work-access-key
aws_secret_access_key = your-work-secret-key
```

### 3. Configuration

1. Copy the example variables file:

   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. Edit `terraform.tfvars` with your values:

   ```hcl
   project_name = "converge-global-fe"
   environment  = "dev"
   aws_region   = "us-east-1"

   # For personal AWS account
   aws_profile = "personal"

   # Optional: GitHub integration
   github_repository_url = "https://github.com/your-username/converge-global-fe"
   github_branch         = "main"
   ```

### 4. Deploy

```bash
# Navigate to terraform directory
cd terraform

# Initialize Terraform
terraform init

# Plan the deployment
terraform plan

# Apply the configuration
terraform apply
```

## 🌍 Environment-Specific Deployments

### Development Environment

```bash
terraform apply -var-file="environments/dev.tfvars"
```

### Production Environment

```bash
terraform apply -var-file="environments/production.tfvars"
```

## 📊 Monitoring and Logs

### View Application Logs

```bash
# Using AWS CLI
aws logs tail /aws/apprunner/converge-global-fe-dev --follow

# Or view in AWS Console
# CloudWatch > Log Groups > /aws/apprunner/converge-global-fe-dev
```

### CloudWatch Alarms

The configuration includes automatic alarms for:

- CPU utilization > 80%
- Memory utilization > 80%

## 🔧 Configuration Options

### App Runner Sizing

```hcl
app_runner_cpu    = "0.25"  # 0.25, 0.5, 1, 2, 4 vCPU
app_runner_memory = "0.5"   # 0.5, 1, 2, 3, 4, 6, 8, 10, 12 GB
```

### Auto Scaling

```hcl
app_runner_auto_scaling_min_size         = 1
app_runner_auto_scaling_max_size         = 10
app_runner_auto_scaling_max_concurrency  = 100
```

### Custom Domain

```hcl
enable_custom_domain = true
domain_name         = "your-domain.com"
```

## 🔄 GitHub Integration

To enable automatic deployments from GitHub:

1. Set GitHub variables in `terraform.tfvars`:

   ```hcl
   github_repository_url = "https://github.com/your-username/converge-global-fe"
   github_branch         = "main"
   ```

2. App Runner will automatically build and deploy when you push to the specified branch.

## 🏷️ Resource Naming

Resources are named using the pattern: `{project_name}-{environment}`

Example: `converge-global-fe-dev`

## 💰 Cost Optimization

### Development

- Use smaller instance sizes (`0.25` vCPU, `0.5` GB memory)
- Lower auto-scaling limits
- Consider auto-shutdown for non-production environments

### Production

- Use appropriate instance sizes based on traffic
- Monitor CloudWatch metrics to optimize sizing
- Use reserved capacity if usage is predictable

## 🔐 Security Considerations

1. **Secrets Management**: Store sensitive data in AWS Secrets Manager or Parameter Store
2. **Network Security**: App Runner provides automatic HTTPS and DDoS protection
3. **IAM Roles**: Least privilege access is configured
4. **Monitoring**: CloudWatch alarms for unusual activity

## 🧹 Cleanup

To destroy all resources:

```bash
terraform destroy
```

## 📚 Useful Commands

```bash
# Format Terraform files
terraform fmt

# Validate configuration
terraform validate

# Show current state
terraform show

# List resources
terraform state list

# Get specific output
terraform output app_runner_service_url
```

## 🆘 Troubleshooting

### Common Issues

1. **Authentication Error**: Verify AWS credentials are configured correctly
2. **Region Issues**: Ensure the region supports App Runner
3. **GitHub Integration**: Verify repository URL and branch name
4. **Domain Validation**: Check DNS records for custom domains

### Getting Help

1. Check AWS App Runner documentation
2. Review CloudWatch logs
3. Use `terraform plan` to preview changes
4. Check AWS Console for resource status

## 🔗 Additional Resources

- [AWS App Runner Documentation](https://docs.aws.amazon.com/apprunner/)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
