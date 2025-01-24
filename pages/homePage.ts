import { Page } from '@playwright/test';

export class HomePage {
    // Reference to the Playwright Page object
    readonly page: Page;

    // Define selectors as properties for readability
    readonly getStartedLink = 'text=Get started';

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://playwright.dev/');
    }

    async clickGetStarted() {
        await this.page.click(this.getStartedLink);
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }
}