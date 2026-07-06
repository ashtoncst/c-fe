#!/bin/bash

# Script to apply required IAM permissions to the GitHub Actions IAM user
# Usage: ./apply-iam-permissions.sh <iam-username>

set -e

if [ -z "$1" ]; then
    echo "❌ Error: IAM username required"
    echo "Usage: ./apply-iam-permissions.sh <iam-username>"
    echo ""
    echo "To find your IAM username:"
    echo "  aws iam list-users --query 'Users[].UserName'"
    exit 1
fi

IAM_USERNAME="$1"
ACCOUNT_ID="116981782315"
REGION="ap-southeast-1"

echo "🔧 Applying IAM permissions to user: $IAM_USERNAME"
echo "Account: $ACCOUNT_ID"
echo ""

# Create the policy document
cat > /tmp/terraform-cd-policy.json <<'EOF'
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
EOF

# Apply the policy
echo "📝 Creating inline policy 'TerraformCDPolicy' for user $IAM_USERNAME..."
aws iam put-user-policy \
    --user-name "$IAM_USERNAME" \
    --policy-name TerraformCDPolicy \
    --policy-document file:///tmp/terraform-cd-policy.json

# Clean up
rm /tmp/terraform-cd-policy.json

echo ""
echo "✅ Permissions applied successfully!"
echo ""
echo "Testing permissions..."

# Test DynamoDB access
if aws iam get-user-policy --user-name "$IAM_USERNAME" --policy-name TerraformCDPolicy > /dev/null 2>&1; then
    echo "✅ Policy attached to user"
else
    echo "⚠️  Warning: Could not verify policy attachment"
fi

echo ""
echo "Next steps:"
echo "1. GitHub Actions should now have the required permissions"
echo "2. Commit and push your changes"
echo "3. Test the CD pipeline"

