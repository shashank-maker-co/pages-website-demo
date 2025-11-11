import { chromium, devices } from '@playwright/test';

const PAGE_URL = 'https://shashank-maker-co.github.io/pages-website-demo';
const WAIT_TIME = 10000; // 10 seconds
const VISIT_COUNT_PER_DEVICE = 10;

// Device configurations
const DEVICES = [
  { name: 'Desktop', config: undefined },
  { name: 'Tablet', config: devices['iPad Pro'] },
  { name: 'Mobile', config: devices['iPhone 14 Pro Max'] },
];

async function visitPage(
  visitNumber: number,
  deviceName: string,
  deviceConfig: any
): Promise<void> {
  console.log(`\n[${deviceName} - Visit ${visitNumber}/${VISIT_COUNT_PER_DEVICE}] Starting...`);

  const browser = await chromium.launch({
    headless: false, // Set to true if you don't want to see the browser
  });

  try {
    const context = deviceConfig
      ? await browser.newContext(deviceConfig)
      : await browser.newContext();
    const page = await context.newPage();

    console.log(`[${deviceName} - Visit ${visitNumber}/${VISIT_COUNT_PER_DEVICE}] Opening ${PAGE_URL}`);
    await page.goto(PAGE_URL, { waitUntil: 'networkidle' });

    console.log(`[${deviceName} - Visit ${visitNumber}/${VISIT_COUNT_PER_DEVICE}] Waiting for 10 seconds...`);
    await page.waitForTimeout(WAIT_TIME);

    console.log(`[${deviceName} - Visit ${visitNumber}/${VISIT_COUNT_PER_DEVICE}] Completed`);
  } catch (error) {
    console.error(`[${deviceName} - Visit ${visitNumber}/${VISIT_COUNT_PER_DEVICE}] Error:`, error);
  } finally {
    await browser.close();
  }
}

async function runAllVisits(): Promise<void> {
  const totalVisits = DEVICES.length * VISIT_COUNT_PER_DEVICE;

  console.log('========================================');
  console.log('Starting automated page visits');
  console.log(`URL: ${PAGE_URL}`);
  console.log(`Devices: ${DEVICES.map((d) => d.name).join(', ')}`);
  console.log(`Visits per device: ${VISIT_COUNT_PER_DEVICE}`);
  console.log(`Total visits: ${totalVisits}`);
  console.log(`Wait time per visit: ${WAIT_TIME / 1000} seconds`);
  console.log('========================================');

  const startTime = Date.now();

  for (const device of DEVICES) {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`Starting ${VISIT_COUNT_PER_DEVICE} visits for ${device.name}`);
    console.log('='.repeat(50));

    for (let i = 1; i <= VISIT_COUNT_PER_DEVICE; i++) {
      await visitPage(i, device.name, device.config);
    }

    console.log(`\nCompleted all ${VISIT_COUNT_PER_DEVICE} visits for ${device.name}`);
  }

  const endTime = Date.now();
  const totalTime = ((endTime - startTime) / 1000 / 60).toFixed(2);

  console.log('\n========================================');
  console.log('All visits completed!');
  console.log(`Total visits: ${totalVisits}`);
  console.log(`Total time: ${totalTime} minutes`);
  console.log('========================================');
}

// Run the script
runAllVisits().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
