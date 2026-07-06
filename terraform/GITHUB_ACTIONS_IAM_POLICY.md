# GitHub Actions IAM User Permissions

## Required IAM Policy for GitHub Actions

The IAM user whose credentials are stored in GitHub Actions secrets needs the following permissions:

### 1. S3 Access (for Terraform State)
✅ **Already configured** via S3 bucket policy - allows all IAM users in account 116981782315

### 2. DynamoDB Access (for State Locking)
The IAM user needs this policy attached:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "TerraformStateLocking",
      "Effect": "Allow",
      "Action": [
        "dynamodb:PutItem",
        "dynamodb:GetItem",
        "dynamodb:DeleteItem",
        "dynamodb:DescribeTable"
      ],
      "Resource": "arn:aws:dynamodb:ap-southeast-1:116981782315:table/terraform-state-lock"
    }
  ]
}
```

### 3. AWS Resources Management (for Terraform to create/update resources)
The IAM user also needs permissions to manage all the AWS resources Terraform provisions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "TerraformResourceManagement",
      "Effect": "Allow",
      "Action": [
        "ecr:*",
        "iam:*",
        "apprunner:*",
        "codebuild:*",
        "logs:*",
        "cloudwatch:*",
        "sts:GetCallerIdentity"
      ],
      "Resource": "*"
    }
  ]
}
```

## How to Apply These Permissions

### Option 1: Attach Policies to IAM User (Recommended)

1. Go to AWS Console → IAM → Users
2. Find the IAM user used by GitHub Actions
3. Click "Add permissions" → "Create inline policy"
4. Paste the DynamoDB and Resource Management policies above
5. Save the policy

### Option 2: Use AWS CLI

Save the combined policy to a file `github-actions-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "TerraformStateLocking",
      "Effect": "Allow",
      "Action": [
        "dynamodb:PutItem",
        "dynamodb:GetItem",
        "dynamodb:DeleteItem",
        "dynamodb:DescribeTable"
      ],
      "Resource": "arn:aws:dynamodb:ap-southeast-1:116981782315:table/terraform-state-lock"
    },
    {
      "Sid": "TerraformResourceManagement",
      "Effect": "Allow",
      "Action": [
        "ecr:*",
        "iam:*",
        "apprunner:*",
        "codebuild:*",
        "logs:*",
        "cloudwatch:*",
        "sts:GetCallerIdentity"
      ],
      "Resource": "*"
    }
  ]
}
```

Then apply it:

```bash
# Replace 'github-actions-user' with your actual IAM username
aws iam put-user-policy \
  --user-name github-actions-user \
  --policy-name TerraformCDPolicy \
  --policy-document file://github-actions-policy.json
```

### Option 3: Attach AWS Managed Policies (Simpler but Broader Permissions)

For development/testing, you can attach these managed policies:
- `PowerUserAccess` - Provides full access except IAM user management
- Or create a custom policy with the exact permissions above

## Verification

After applying the permissions, test with:

```bash
# Test DynamoDB access
aws dynamodb describe-table --table-name terraform-state-lock --region ap-southeast-1

# Test S3 access
aws s3 ls s3://terraform-state-116981782315-ap-southeast-1/

# Both should succeed without AccessDenied errors
```

## Security Best Practices

1. **Principle of Least Privilege**: The policy above grants broad permissions. For production, scope down to specific resources.
2. **Use IAM Roles**: Consider using OIDC to assume an IAM role instead of storing static credentials.
3. **Rotate Credentials**: Regularly rotate the IAM user access keys stored in GitHub secrets.
4. **Audit Access**: Enable CloudTrail to monitor what actions GitHub Actions performs.

## Current Status

- ✅ S3 bucket policy configured (allows all IAM users in account)
- ⚠️  DynamoDB permissions - **Need to be added to the GitHub Actions IAM user**
- ⚠️  Resource management permissions - **Need to be added to the GitHub Actions IAM user**

