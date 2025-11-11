# Pages Website Demo

A minimal GitHub Pages website with Maker.co integration.

## Project Structure

```
pages-website-demo/
├── .github/
│   └── workflows/
│       ├── deploy.yml            # GitHub Actions auto-deployment
│       └── scheduled-visits.yml  # Scheduled page visits (every 12 hours)
├── scripts/
│   ├── visit-page.ts             # Playwright script to visit page 10 times
│   └── scheduler.ts              # Local scheduler (optional)
├── .gitignore                    # Git ignore rules
├── package.json                  # Node.js configuration
├── tsconfig.json                 # TypeScript configuration
├── index.html                    # Main HTML page
└── README.md                     # This file
```

## Setup Instructions

### 1. Create GitHub Repository FIRST

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `pages-website-demo`
3. Do NOT initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"
5. **Copy your repository URL** (it will be shown on the next page)

### 2. Initialize Git and Push to GitHub

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username before running these commands!

```bash
git init
git add .
git commit -m "Initial commit: Setup minimal GitHub Pages site"
git remote add origin https://github.com/YOUR_USERNAME/pages-website-demo.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy your site

### 4. Access Your Site

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
- Maker.co embed integration (social story)
- Automatic deployment via GitHub Actions
- TypeScript support
- Automated page visits using Playwright
- Scheduled visits every 12 hours via GitHub Actions

## Automated Page Visits

This project includes a Playwright automation script that visits your GitHub Pages site across multiple devices:
- **Desktop**: 10 visits (standard desktop browser)
- **Tablet**: 10 visits (iPad Pro simulation)
- **Mobile**: 10 visits (iPhone 14 Pro Max simulation)
- **Total**: 30 visits per run

Each visit waits 10 seconds on the page. This can be useful for:
- Testing your Maker.co embed across different devices
- Generating page views from various screen sizes
- Monitoring responsive design and page load performance
- Keeping the page active

### Option 1: GitHub Actions Scheduler (Recommended)

The project includes a GitHub Actions workflow that automatically runs every 12 hours.

**Enable the scheduler:**
1. Push the code to GitHub (if not already done)
2. The workflow is located at `.github/workflows/scheduled-visits.yml`
3. It will run automatically every 12 hours at 00:00 and 12:00 UTC
4. View runs in the **Actions** tab on GitHub

**Manual trigger:**
1. Go to your repository on GitHub
2. Click **Actions** → **Scheduled Page Visits**
3. Click **Run workflow** → **Run workflow**

### Option 2: Run Locally

**Install dependencies first:**
```bash
npm install
npx playwright install chromium
```

**Run visits once:**
```bash
npm run visit
```

This will:
- Open the browser (visible by default)
- Run 10 visits on Desktop
- Run 10 visits on Tablet (iPad Pro simulation)
- Run 10 visits on Mobile (iPhone 14 Pro Max simulation)
- Wait 10 seconds on each visit
- Close the browser after each visit
- Show progress in the terminal
- **Total: 30 visits per run**

**Run with continuous scheduler:**
```bash
npm run scheduler
```

This will:
- Run the visits immediately
- Schedule them to run every 12 hours
- Keep running in the background (press Ctrl+C to stop)

### Configuration

To customize the automation, edit `scripts/visit-page.ts`:

```typescript
const PAGE_URL = 'https://shashank-maker-co.github.io/pages-website-demo';
const WAIT_TIME = 10000;           // 10 seconds (in milliseconds)
const VISIT_COUNT_PER_DEVICE = 10; // Number of visits per device

// Device configurations
const DEVICES = [
  { name: 'Desktop', config: undefined },
  { name: 'Tablet', config: devices['iPad Pro'] },
  { name: 'Mobile', config: devices['iPhone 14 Pro Max'] },
];
```

You can also change the headless setting:
```typescript
const browser = await chromium.launch({
  headless: false, // Set to true to hide the browser
});
```

To change which devices to test, modify the `DEVICES` array. Available devices from Playwright include:
- `devices['iPad']`, `devices['iPad Pro']`, `devices['iPad Mini']`
- `devices['iPhone 14']`, `devices['iPhone 14 Pro Max']`, `devices['iPhone 13']`
- `devices['Pixel 5']`, `devices['Galaxy S9+']`
- And many more (see Playwright documentation)

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
