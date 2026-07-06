# ⚡ Quick Start - GitHub Actions

## 🎯 What You Have Now

### ✅ 2 Simple Workflows

1. **CI** (Quality Checks) - `ci.yml`

   - Runs on every push/PR
   - Checks code quality
   - No deployment

2. **CD** (Deployment) - `deploy.yml`
   - Runs on `dev` and `main` branches
   - Builds Docker image
   - Deploys to AWS

---

## 🚀 How to Use

### For Daily Development

```bash
# 1. Create a feature branch
git checkout -b feature/my-feature

# 2. Make changes and commit
git add .
git commit -m "Add my feature"

# 3. Push (CI runs automatically)
git push origin feature/my-feature

# 4. Create PR on GitHub
# CI runs on PR → shows ✅ or ❌
```

### Deploy to Staging

```bash
# Merge PR to dev branch
# CD automatically deploys to staging
```

### Deploy to Production

```bash
# Merge dev to main
git checkout main
git merge dev
git push origin main

# CD automatically deploys to production
```

---

## 📊 What Happens When You Push?

### Push to Feature Branch

```
You push → CI runs → Shows results
(No deployment)
```

### Push to `dev` Branch

```
You push → CI runs → CD runs → Deploys to Staging
```

### Push to `main` Branch

```
You push → CI runs → CD runs → Deploys to Production
```

---

## 🎨 Visual Flow

```
Feature Branch          dev Branch           main Branch
     │                      │                     │
     ├─► CI (tests)         ├─► CI (tests)        ├─► CI (tests)
     │                      │                     │
     └─► ✅               ├─► CD (deploy)       ├─► CD (deploy)
                            │                     │
                            └─► 🚀 Staging        └─► 🚀 Production
```

---

## 🔍 Check Workflow Status

1. Go to your GitHub repo
2. Click "Actions" tab
3. See all workflow runs
4. Click any run to see details

---

## ⚙️ Manual Deployment

Sometimes you need to deploy manually:

1. Go to **Actions** tab
2. Click **"CD - Deploy to AWS"**
3. Click **"Run workflow"** button
4. Select:
   - **Branch:** `main` or `dev`
   - **Environment:** `staging` or `production`
5. Click **"Run workflow"**
6. Wait 6-8 minutes
7. See deployment URL in logs

---

## 📍 Find Your Deployment

After CD completes:

1. Click the workflow run
2. Click "Deploy to staging/production"
3. Scroll to bottom
4. See: **🌐 URL: https://your-app.awsapprunner.com**

Or check AWS Console:

- Service: App Runner
- Region: ap-southeast-1
- Service: `converge-global-fe-staging` or `converge-global-fe-production`

---

## 🐛 Common Issues

### ❌ CI Failed

- **Lint errors:** Fix code style issues
- **Type errors:** Fix TypeScript errors
- **Build errors:** Fix Next.js build issues

### ❌ CD Failed - Build Step

- Check AWS CodeBuild logs
- Verify Docker build process
- Check ECR permissions

### ❌ CD Failed - Deploy Step

- Check Terraform errors
- Verify AWS credentials
- Check App Runner service

---

## 💡 Pro Tips

✅ **Always:**

- Let CI pass before merging
- Test in staging first
- Check deployment logs
- Review changes in PRs

🚫 **Never:**

- Skip CI checks
- Push directly to `main`
- Deploy without testing
- Ignore workflow failures

---

## 📞 Need Help?

1. Check workflow logs in GitHub Actions
2. Check AWS CloudWatch logs
3. Review error messages
4. Check Terraform state

---

## 📚 More Info

- **Detailed guide:** `.github/WORKFLOW_GUIDE.md`
- **Workflow reference:** `.github/workflows/README.md`
- **Terraform config:** `terraform/`
- **CodeBuild config:** `buildspec.yml`
