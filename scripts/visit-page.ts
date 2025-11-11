import { chromium } from '@playwright/test';

const PAGE_URL = 'https://shashank-maker-co.github.io/pages-website-demo';
const WAIT_TIME = 10000; // 10 seconds
const VISIT_COUNT = 10;

async function visitPage(visitNumber: number): Promise<void> {
  console.log(`\n[Visit ${visitNumber}/${VISIT_COUNT}] Starting...`);

  const browser = await chromium.launch({
    headless: false, // Set to true if you don't want to see the browser
  });

  try {
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log(`[Visit ${visitNumber}/${VISIT_COUNT}] Opening ${PAGE_URL}`);
    await page.goto(PAGE_URL, { waitUntil: 'networkidle' });

    console.log(`[Visit ${visitNumber}/${VISIT_COUNT}] Waiting for 10 seconds...`);
    await page.waitForTimeout(WAIT_TIME);

    console.log(`[Visit ${visitNumber}/${VISIT_COUNT}] Completed`);
  } catch (error) {
    console.error(`[Visit ${visitNumber}/${VISIT_COUNT}] Error:`, error);
  } finally {
    await browser.close();
  }
}

async function runAllVisits(): Promise<void> {
  console.log('========================================');
  console.log('Starting automated page visits');
  console.log(`URL: ${PAGE_URL}`);
  console.log(`Total visits: ${VISIT_COUNT}`);
  console.log(`Wait time per visit: ${WAIT_TIME / 1000} seconds`);
  console.log('========================================');

  const startTime = Date.now();

  for (let i = 1; i <= VISIT_COUNT; i++) {
    await visitPage(i);
  }

  const endTime = Date.now();
  const totalTime = ((endTime - startTime) / 1000 / 60).toFixed(2);

  console.log('\n========================================');
  console.log('All visits completed!');
  console.log(`Total time: ${totalTime} minutes`);
  console.log('========================================');
}

// Run the script
runAllVisits().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
