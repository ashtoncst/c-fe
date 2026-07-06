# 🚀 CI/CD Workflow Guide

## Overview

This project uses a simple, clear CI/CD pipeline:

```
┌──────────────────────────────────────────────────────────┐
│              PUSH CODE TO GITHUB                          │
└───────────────────┬──────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
   ┌────────┐            ┌──────────┐
   │   CI   │            │    CD    │
   │ (Test) │            │ (Deploy) │
   └────────┘            └──────────┘
        │                       │
        ▼                       ▼
  ✅ Quality             🚀 Deployed to AWS
     Checks                App Runner
```

---

## 🔍 CI Workflow (Quality Checks)

**File:** `.github/workflows/ci.yml`

**Runs on:**

- Every push to `main` or `dev`
- Every pull request

**Steps:**

1. ✨ Lint code with ESLint
2. 🔍 Check TypeScript types
3. 🏗️ Build Next.js app
4. 🔒 Run security audit

**Duration:** ~2-3 minutes

**Purpose:** Catch bugs early, no deployment

---

## 🚀 CD Workflow (Deployment)

**File:** `.github/workflows/deploy.yml`

**Runs on:**

- Push to `dev` → Deploys to **Staging**
- Push to `main` → Deploys to **Production**
- Manual trigger → Choose environment

### Deployment Process

```
Step 1: BUILD
┌─────────────────────────────────────┐
│  1. Package source code             │
│  2. Upload to S3                    │
│  3. Trigger AWS CodeBuild           │
│  4. CodeBuild builds Docker image   │
│  5. Push image to ECR               │
└─────────────────────────────────────┘
              │
              ▼
Step 2: DEPLOY
┌─────────────────────────────────────┐
│  1. Run Terraform                   │
│  2. Update App Runner service       │
│  3. Deploy new Docker image         │
│  4. Health checks                   │
│  5. Show deployment URL             │
└─────────────────────────────────────┘
```

**Duration:** ~6-8 minutes

---

## 📊 Branch Strategy

| Branch | Auto-Deploy | Environment | Service Name                    |
| ------ | ----------- | ----------- | ------------------------------- |
| `dev`  | ✅ Yes      | Staging     | `converge-global-fe-staging`    |
| `main` | ✅ Yes      | Production  | `converge-global-fe-production` |
| Others | ❌ No       | -           | CI only                         |

---

## 🎯 Common Workflows

### Push a Feature

```bash
# Work on feature
git checkout -b feature/my-feature
git add .
git commit -m "Add new feature"
git push origin feature/my-feature

# Create PR → CI runs automatically
# Merge to dev → CD deploys to staging
```

### Deploy to Production

```bash
# Merge dev into main
git checkout main
git merge dev
git push origin main

# CD automatically deploys to production
```

### Manual Deployment

1. Go to GitHub Actions
2. Click "CD - Deploy to AWS"
3. Click "Run workflow"
4. Select branch and environment
5. Click "Run workflow"

---

## 🔧 Environment Variables

Workflows use these environment variables:

```yaml
AWS_REGION: ap-southeast-1
ECR_REPOSITORY: converge-global-fe
NODE_VERSION: 18
```

---

## 🔐 Required GitHub Secrets

Set these in: **Settings → Secrets and variables → Actions**

| Secret                  | Description                   |
| ----------------------- | ----------------------------- |
| `AWS_ACCESS_KEY_ID`     | AWS access key for deployment |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key for deployment |

---

## 📍 Deployment URLs

After deployment, find your app at:

- **Staging:** Check GitHub Actions output or AWS Console
- **Production:** Check GitHub Actions output or AWS Console

URLs are shown in the workflow summary and step output.

---

## 🐛 Troubleshooting

### CI Failed

1. Check the failed step in GitHub Actions
2. Common issues:
   - ESLint errors → Fix linting issues
   - TypeScript errors → Fix type issues
   - Build errors → Check Next.js configuration

### CD Failed

1. Check which step failed:
   - **Build step:** Check CodeBuild logs in AWS
   - **Deploy step:** Check Terraform errors
2. Common issues:
   - AWS credentials → Verify secrets
   - CodeBuild project → Check AWS Console
   - Terraform state → Check S3 backend

### Need Help?

- Check workflow logs in GitHub Actions
- Check AWS CloudWatch logs for App Runner
- Review Terraform state in AWS Console

---

## 💡 Best Practices

✅ **DO:**

- Always create PRs for code review
- Test in staging before production
- Check CI passes before merging
- Review deployment logs

❌ **DON'T:**

- Push directly to `main` (use PRs)
- Skip CI checks
- Deploy without testing
- Ignore failed workflows

---

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [AWS App Runner Documentation](https://docs.aws.amazon.com/apprunner/)
- [Terraform Documentation](https://www.terraform.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
