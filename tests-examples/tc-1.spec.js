const {test, expect} = require ('@playwright/test');

// test('Login Success', async ({browser}) =>
// {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
//     await page.locator('#username').fill('admin');
//     await page.locator('#password').fill("password123");
//     await page.locator('[type="submit"]').click();
//     await context.clearCookies();
//     await context.clearPermissions();
// });

test('Test Case 1 - Assert Implement User Auth', async ({browser}) =>
{
    // Nav to Page and Log In
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();
    // Locate the "To Do" column
    const todoColumn = page.locator('text=To Do').first();
    // Verify the task exists in "To Do"
    const task = page.locator('text=Implement user authentication');
    await expect(task).toBeVisible();
    //Verify tags
    await expect(task.locator('text=Feature')).toBeVisible();
    await expect(task.locator('text=High Priority')).toBeVisible();
    await context.clearCookies();
    await context.clearPermissions();
});

test('Test Case 2 - Assert Fix Navigation Bug', async ({browser}) =>
{
    // Nav to Page and Log In
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();
    // Locate the "To Do" column
    const todoColumn = page.locator('text=To Do').locator('#root > div > div.flex-1.flex.flex-col.bg-gray-100 > main > div > div > div:nth-child(1)');
    // Verify the task exists in "To Do"
    const task = todoColumn.locator('text=Fix navigation bug');
    await expect(task).toBeVisible();
    //Verify tags
    await expect(task.locator('text=Bug')).toBeVisible();
    await context.clearCookies();
    await context.clearPermissions();
});

test('Test Case 3 - Assert Design System Updates', async ({browser}) =>
{
    // Nav to Page and Log In
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();
    // Locate the "To Do" column
    const inProgress = page.locator('text=In Progress').locator('#root > div > div.flex-1.flex.flex-col.bg-gray-100 > main > div > div > div:nth-child(2)');
    // Verify the task exists in "To Do"
    const task = inProgress.locator('text=Design system updates');
    await expect(task).toBeVisible();
    //Verify tags
    await expect(task.locator('text=Design')).toBeVisible();
    await context.clearCookies();
    await context.clearPermissions();
});

test('Test Case 4 - Assert Push Notification System', async ({browser}) =>
{
    // Nav to Page and Log In
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();
    // Select Mobile Application
    await page.locator('[#root > div > div.w-64.bg-gray-800.text-white.h-screen.flex.flex-col > nav > button.w-full.text-left.p-4.hover\\:bg-gray-700.transition-colors.bg-gray-700]').click();
    // Locate the "To Do" column
    const todoColumn = page.locator('text=In Progress').locator('#root > div > div.flex-1.flex.flex-col.bg-gray-100 > main > div > div > div:nth-child(1)');
    // Verify the task exists in "To Do"
    const task = todoColumn.locator('text=Push notification system');
    await expect(task).toBeVisible();
    //Verify tags
    await expect(task.locator('text=Feature')).toBeVisible();
    await context.clearCookies();
    await context.clearPermissions();
});

test('Test Case 5 - Assert Offline Mode', async ({browser}) =>
{
    // Nav to Page and Log In
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();
    // Select Mobile Application
    await page.locator('[#root > div > div.w-64.bg-gray-800.text-white.h-screen.flex.flex-col > nav > button.w-full.text-left.p-4.hover\\:bg-gray-700.transition-colors.bg-gray-700]').click();
    // Locate the "To Do" column
    const inProgress = page.locator('text=In Progress').locator('#root > div > div.flex-1.flex.flex-col.bg-gray-100 > main > div > div > div:nth-child(1)');
    // Verify the task exists in "To Do"
    const task = inProgress.locator('text=Offline mode');
    await expect(task).toBeVisible();
    //Verify tags
    await expect(task.locator('text=Feature')).toBeVisible();
    await expect(task.locator('text=High Priority')).toBeVisible();
    await context.clearCookies();
    await context.clearPermissions();
});

test('Test Case 6 - Assert App Icon Design', async ({browser}) =>
{
    // Nav to Page and Log In
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();
    // Select Mobile Application
    await page.locator('[#root > div > div.w-64.bg-gray-800.text-white.h-screen.flex.flex-col > nav > button.w-full.text-left.p-4.hover\\:bg-gray-700.transition-colors.bg-gray-700]').click();
    // Locate the "To Do" column
    const done = page.locator('text=Done').locator('#root > div > div.flex-1.flex.flex-col.bg-gray-100 > main > div > div > div:nth-child(4)');
    // Verify the task exists in "To Do"
    const task = done.locator('text=App icon design');
    await expect(task).toBeVisible();
    //Verify tags
    await expect(task.locator('text=Design')).toBeVisible();
    await context.clearCookies();
    await context.clearPermissions();
});