import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'tests',
    timeout: 30000,
    use: {
        headless: true, // Set false to see the browser
        screenshot: 'on',
        video: 'on'
    },
    reporter: [
        ['list'],  // Default console output
        ['allure-playwright'],  // Add Allure reporter
    ],
    projects: [
        { name: 'chromium', use: { browserName: 'chromium' } },
        // { name: 'firefox', use: { browserName: 'firefox' } },
        // { name: 'webkit', use: { browserName: 'webkit' } },
    ],
});
