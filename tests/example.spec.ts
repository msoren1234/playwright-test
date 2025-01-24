import {expect, test} from "./fixtures";


test('homepage has title and links to intro page', async ({ page,homePage }) => {

    await homePage.navigate();
    // Verify title
    const title = await homePage.getTitle();
    expect(title).toMatch(/Playwright/);


    // Interact with the page
    await homePage.clickGetStarted();

    // Expect URL to contain docs/intro
    await expect(homePage.page).toHaveURL(/.*docs\/intro/);
});