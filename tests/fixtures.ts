import { test as baseTest, Page } from '@playwright/test';
import {HomePage} from "../pages/homePage";


// 1. Define a custom fixture type
type MyFixtures = {
    homePage: HomePage;
};

// 2. Extend the base test
export const test = baseTest.extend<MyFixtures>({
    // This is the fixture definition
    homePage: async ({ page }, use) => {
        // Create an instance of HomePage
        const homePage = new HomePage(page as Page);
        // Provide it to the test
        await use(homePage);
    },
});

// 3. You can also export 'expect' from the extended test, to keep usage consistent
export const expect = test.expect;
