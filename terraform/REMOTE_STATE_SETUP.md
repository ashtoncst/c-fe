# Terraform Remote State Setup

## Overview

This document explains the remote state backend setup for the Converge Global FE Terraform infrastructure.

## What Was Done

### 1. Root Cause Analysis

The CD pipeline was failing with two main issues:

- **Issue 1**: Environment-specific `.tfvars` files were not committed to git (blocked by `.gitignore`)
- **Issue 2**: Terraform state was not persisted between GitHub Actions runs, causing resources to appear as "already exists" errors

### 2. Solutions Implemented

#### Issue 1: Environment Files

- Updated `terraform/.gitignore` to allow `environments/*.tfvars` files while still protecting root-level sensitive tfvars
- Committed `dev.tfvars`, `staging.tfvars`, and `production.tfvars` to git

#### Issue 2: Remote State Backend

- Created S3 bucket: `terraform-state-116981782315-ap-southeast-1` for state storage
- Created DynamoDB table: `terraform-state-lock` for state locking
- Enabled S3 backend in `terraform/providers.tf`
- Configured environment-specific state keys: `converge-global-fe/${ENV}.tfstate`
- Updated GitHub Actions workflow to use backend-config flag during `terraform init`

## Infrastructure Created

### S3 Bucket

- **Name**: `terraform-state-116981782315-ap-southeast-1`
- **Features**:
  - Versioning enabled (state history)
  - Encryption enabled (AES256)
  - Public access blocked
  - Regional bucket in `ap-southeast-1`

### DynamoDB Table

- **Name**: `terraform-state-lock`
- **Purpose**: Prevents concurrent Terraform operations
- **Billing**: Pay-per-request (no fixed costs)
- **Key**: `LockID` (String)

## State Files Structure

Each environment has its own state file in S3:

```
s3://terraform-state-116981782315-ap-southeast-1/
└── converge-global-fe/
    ├── dev.tfstate
    ├── staging.tfstate
    └── production.tfstate
```

## How It Works

1. **GitHub Actions runs** with environment (e.g., `staging`)
2. **Terraform init** runs with `-backend-config="key=converge-global-fe/staging.tfstate"`
3. **State is loaded** from S3 for that specific environment
4. **Terraform apply** updates infrastructure
5. **State is saved** back to S3 automatically
6. **Lock is released** from DynamoDB

## Files Modified

1. `.github/workflows/deploy.yml` - Added backend-config to terraform init
2. `terraform/providers.tf` - Enabled S3 backend configuration
3. `terraform/.gitignore` - Allowed environment tfvars files (already done)
4. `terraform/setup-remote-state.sh` - Helper script to create backend resources (NEW)

## Verification

Staging state was successfully migrated:

```bash
cd terraform
terraform init -backend-config="key=converge-global-fe/staging.tfstate" -migrate-state
terraform plan -var-file="environments/staging.tfvars"
# Output: No changes. Your infrastructure matches the configuration.
```

## Manual Operations

To work with a specific environment locally:

```bash
cd terraform
terraform init -backend-config="key=converge-global-fe/dev.tfstate"
terraform plan -var-file="environments/dev.tfvars"
```

## Cost Implications

- **S3 Storage**: ~$0.023/GB/month (state files are typically < 100KB)
- **S3 Requests**: Minimal (only during deployments)
- **DynamoDB**: Pay-per-request, minimal cost (< $1/month typically)
- **Total estimated cost**: < $1/month

## Security

- State files contain sensitive data (resource IDs, ARNs)
- S3 bucket has encryption enabled
- Public access is blocked
- Access controlled via AWS IAM (GitHub Actions use IAM credentials)
- State versioning allows rollback if needed

## Troubleshooting

### If state is corrupted

```bash
# List state versions in S3
aws s3api list-object-versions --bucket terraform-state-116981782315-ap-southeast-1 --prefix converge-global-fe/staging.tfstate

# Restore specific version if needed
aws s3api get-object --bucket terraform-state-116981782315-ap-southeast-1 \
  --key converge-global-fe/staging.tfstate \
  --version-id <VERSION_ID> \
  terraform.tfstate.backup
```

### If state lock is stuck

```bash
# Force unlock (use with caution!)
terraform force-unlock <LOCK_ID>
```

## Next Steps

1. ✅ Commit changes to git
2. ✅ Push to dev branch
3. ✅ CD pipeline will now work correctly
4. Monitor first deployment to verify

## References

- [Terraform S3 Backend Docs](https://developer.hashicorp.com/terraform/language/settings/backends/s3)
- [Terraform State Docs](https://developer.hashicorp.com/terraform/language/state)
