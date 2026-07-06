# GitHub Actions Workflows

This directory contains CI/CD workflows for the converge-global-fe project.

## 📋 Workflows

### 1. **CI - Quality Checks** (`ci.yml`)

**Triggers:** Every push and pull request to `main` or `dev`

**What it does:**

- Runs ESLint linting
- Checks TypeScript types
- Builds the Next.js app
- Runs security audits

**Purpose:** Ensures code quality without deploying

---

### 2. **CD - Deploy to AWS** (`deploy.yml`)

**Triggers:**

- Push to `main` branch → deploys to **production**
- Push to `dev` branch → deploys to **staging**
- Manual trigger → choose environment

**What it does:**

1. **Build Step:**
   - Packages source code
   - Uploads to S3
   - Triggers AWS CodeBuild to build Docker image
   - Waits for build completion
2. **Deploy Step:**
   - Uses Terraform to deploy to App Runner
   - Updates with the new Docker image
   - Shows deployment URL

**Purpose:** Automated deployment to AWS

---

## 🔄 How It Works

```
┌─────────────────┐
│  Push to dev    │
│  (or main)      │
└────────┬────────┘
         │
         ├─► CI runs (checks code quality)
         │
         └─► CD runs:
              ├─► CodeBuild: Builds Docker image
              └─► Terraform: Deploys to App Runner
```

## 🎯 Branch → Environment Mapping

| Branch | Environment | App Runner Service            |
| ------ | ----------- | ----------------------------- |
| `dev`  | staging     | converge-global-fe-staging    |
| `main` | production  | converge-global-fe-production |

## 🔐 Required Secrets

Configure these in GitHub Repository Settings → Secrets:

- `AWS_ACCESS_KEY_ID` - AWS credentials for deployment
- `AWS_SECRET_ACCESS_KEY` - AWS credentials for deployment

## 🚀 Manual Deployment

Go to **Actions** → **CD - Deploy to AWS** → **Run workflow**

Choose:

- Branch: `main` or `dev`
- Environment: `staging` or `production`

## 📝 Notes

- CI runs on all PRs and pushes (fast feedback)
- CD only runs on `main` and `dev` branches
- CodeBuild handles Docker builds (faster than GitHub Actions)
- Terraform manages infrastructure and deployments
