# CD Pipeline Deployment Checklist ✅

## Current Status: Almost Ready! 🎯

### What's Been Fixed ✅

1. **✅ Terraform Remote State Backend**
   - S3 bucket: `terraform-state-116981782315-ap-southeast-1`
   - DynamoDB table: `terraform-state-lock`
   - Location: AWS Account **116981782315** (default account)
   - State file: EXISTS (31KB staging.tfstate)

2. **✅ S3 Bucket Policy**
   - Allows all IAM principals in account 116981782315
   - Grants S3 list, get, put, delete permissions

3. **✅ Infrastructure State**
   - All 13 staging resources imported into remote state
   - App Runner service RUNNING
   - terraform plan shows 0 to add, 0 to destroy

4. **✅ GitHub Actions Workflow**
   - Updated to use environment-specific state keys
   - Configured for staging/production environments

---

## ⚠️ What You Need to Verify

### GitHub Actions Secrets Verification (CRITICAL)

The AccessDenied error suggests the GitHub secrets might not be correct. Please verify:

#### Step 1: Check GitHub Secrets
1. Go to: **GitHub Repository → Settings → Secrets and variables → Actions**
2. Verify these secrets:
   - `AWS_ACCESS_KEY_ID` 
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION` (should be `ap-southeast-1`)

#### Step 2: Verify Credentials Match Account 116981782315

Run this test locally with the **exact same credentials** from GitHub secrets:

```bash
# Set the credentials (copy from GitHub secrets)
export AWS_ACCESS_KEY_ID="<paste-from-github>"
export AWS_SECRET_ACCESS_KEY="<paste-from-github>"
export AWS_DEFAULT_REGION="ap-southeast-1"

# Test 1: Verify account
aws sts get-caller-identity
# Expected output: "Account": "116981782315"
# If you see a different account number, the secrets are wrong!

# Test 2: Verify S3 access
aws s3 ls s3://terraform-state-116981782315-ap-southeast-1/
# Should show: staging.tfstate

# Test 3: Verify DynamoDB access
aws dynamodb describe-table --table-name terraform-state-lock --region ap-southeast-1
# Should show: "TableStatus": "ACTIVE"

# Test 4: Full terraform init test
cd terraform
terraform init -backend-config="key=converge-global-fe/staging.tfstate"
# Should succeed without AccessDenied
```

#### Step 3: If Tests Fail

If any test shows:
- ❌ Wrong account number → Update GitHub secrets with account 116981782315 credentials
- ❌ AccessDenied errors → Credentials are invalid or from wrong account

---

## 🚀 Once Verified, Deploy!

After confirming the credentials work locally:

1. **Commit remaining changes**:
   ```bash
   git add terraform/
   git commit -m "docs: add github actions iam policy documentation"
   git push
   ```

2. **Trigger GitHub Actions**:
   - Push to `dev` branch triggers staging deployment automatically
   - Or manually trigger via GitHub Actions UI

3. **Monitor deployment**:
   - Watch GitHub Actions logs
   - Should see: "Successfully configured the backend"
   - Should see: "Apply complete! Resources: X added, Y changed, Z destroyed"

---

## 📊 Infrastructure Summary

### Account Configuration
- **AWS Account**: 116981782315 (default account with App Runner enabled)
- **Region**: ap-southeast-1
- **State Backend**: S3 + DynamoDB

### Resources Managed
- 1 × ECR Repository
- 1 × App Runner Service (RUNNING)
- 3 × IAM Roles
- 3 × IAM Policies
- 1 × CodeBuild Project
- 1 × CloudWatch Log Group
- 2 × CloudWatch Alarms

### Cost Estimate
- State storage (S3): < $1/month
- State locking (DynamoDB): < $1/month
- App Runner: ~$5-20/month (depending on usage)
- Total backend overhead: ~$2/month

---

## 🔧 Troubleshooting

### If deployment still fails with AccessDenied:

1. **Double-check account**: 
   ```bash
   # With GitHub secrets:
   aws sts get-caller-identity
   # Must show: 116981782315
   ```

2. **Regenerate credentials**:
   - Go to AWS Console → IAM → Users (or use root Security Credentials)
   - Create new access key
   - Update GitHub secrets

3. **Verify bucket exists**:
   ```bash
   aws s3 ls | grep terraform-state-116981782315
   ```

4. **Check bucket policy**:
   ```bash
   aws s3api get-bucket-policy --bucket terraform-state-116981782315-ap-southeast-1
   ```

### If you need IAM user instead of root:

See `GITHUB_ACTIONS_IAM_POLICY.md` for required permissions and run:
```bash
# Create IAM user and attach policy
./apply-iam-permissions.sh <username>
```

---

## 📝 Next Steps After Successful Deployment

1. ✅ Verify App Runner service is updated
2. ✅ Test the deployed application URL
3. ✅ Set up same backend for `dev` and `production` environments
4. ✅ Consider setting up OIDC instead of static credentials
5. ✅ Enable state file encryption at rest (already done ✅)
6. ✅ Set up state file backup/versioning (already done ✅)

---

## 🎉 Success Criteria

You'll know it's working when you see in GitHub Actions:

```
✅ Terraform init -backend-config="key=converge-global-fe/staging.tfstate"
✅ Successfully configured the backend "s3"!
✅ Terraform state has been successfully locked
✅ Apply complete! Resources: X added, Y changed, Z destroyed
✅ Deployment complete!
🌐 URL: https://xxxxx.ap-southeast-1.awsapprunner.com
```

---

**Bottom Line**: The infrastructure is ready. Just verify the GitHub secrets have the correct credentials for account **116981782315**! 🚀

