# Pages Website Demo

A minimal GitHub Pages website with Maker.co integration.

## Project Structure

```
pages-website-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions auto-deployment
├── .gitignore              # Git ignore rules
├── package.json            # Node.js configuration
├── tsconfig.json           # TypeScript configuration
├── index.html              # Main HTML page
└── README.md               # This file
```

## Setup Instructions

### 1. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Setup minimal GitHub Pages site"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `pages-website-demo`
3. Do NOT initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/pages-website-demo.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy your site

### 5. Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/pages-website-demo
```

The first deployment takes 1-2 minutes. Check the **Actions** tab to monitor deployment progress.

## Local Development

### Install Dependencies

```bash
npm install
```

### Run Local Server

```bash
npm run dev
```

Visit [http://localhost:8000](http://localhost:8000) to view the site locally.

## Features

- Minimal HTML5 boilerplate
- Maker.co automation integration
- Automatic deployment via GitHub Actions
- TypeScript support (for future enhancements)

## Making Changes

1. Edit `index.html` or other files
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
3. GitHub Actions will automatically deploy your changes

## Troubleshooting

### Site not deploying?

- Check the **Actions** tab for deployment status
- Ensure GitHub Pages is set to "GitHub Actions" source
- Wait 1-2 minutes after pushing changes

### 404 Error?

- Verify `index.html` exists in the root directory
- Check that the repository name matches in Settings → Pages

### Workflow failing?

- Check the workflow run logs in the **Actions** tab
- Ensure the workflow has proper permissions (already configured)

## License

MIT
