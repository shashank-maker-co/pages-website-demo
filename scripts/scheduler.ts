import cron from 'node-cron';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const CRON_SCHEDULE = '0 */12 * * *'; // Every 12 hours at minute 0

async function runVisitScript(): Promise<void> {
  console.log('\n========================================');
  console.log(`[${new Date().toISOString()}] Running scheduled page visits...`);
  console.log('========================================\n');

  try {
    const { stdout, stderr } = await execAsync('npm run visit');
    console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (error) {
    console.error('Error running visit script:', error);
  }
}

// Run immediately on start
console.log('Scheduler started!');
console.log(`Schedule: Every 12 hours (cron: ${CRON_SCHEDULE})`);
console.log('Running first visit immediately...\n');
runVisitScript();

// Schedule for every 12 hours
cron.schedule(CRON_SCHEDULE, () => {
  runVisitScript();
});

console.log('\nScheduler is now running. Press Ctrl+C to stop.');
