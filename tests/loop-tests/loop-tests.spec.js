import { test, expect } from '@playwright/test';

test('Test Case 1 - Assert Implement User Auth', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();

    const todoColumn = page.locator('text=To Do').locator('..');

    const task = todoColumn.locator(':has-text("Implement user authentication")').first();
    await expect(task).toBeVisible();

    await expect(task).toContainText('Feature');
    await expect(task).toContainText('High Priority');

    await context.close();
});


test('Test Case 2 - Assert Fix Navigation Bug', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();

    const todoColumn = page.locator('text=To Do').locator('..');

    const task = todoColumn.locator(':has-text("Fix navigation bug")').first();
    await expect(task).toBeVisible();

    await expect(task).toContainText('Bug');

    await context.close();
});


test('Test Case 3 - Assert Design System Updates', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();

    const inProgress = page.locator('text=In Progress').locator('..');

    const task = inProgress.locator(':has-text("Design system updates")').first();
    await expect(task).toBeVisible();

    await expect(task).toContainText('Design');

    await context.close();
});


test('Test Case 4 - Assert Push Notification System', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();

    // Fixed selector
    await page.getByRole('button', { name: 'Mobile Application' }).click();

    const todoColumn = page.locator('text=To Do').locator('..');

    const task = todoColumn.locator(':has-text("Push notification system")').first();
    await expect(task).toBeVisible();

    await expect(task).toContainText('Feature');

    await context.close();
});


test('Test Case 5 - Assert Offline Mode', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();

    await page.getByRole('button', { name: 'Mobile Application' }).click();

    const inProgress = page.locator('text=In Progress').locator('..');

    const task = inProgress.locator(':has-text("Offline mode")').first();
    await expect(task).toBeVisible();

    await expect(task).toContainText('Feature');
    await expect(task).toContainText('High Priority');

    await context.close();
});


test('Test Case 6 - Assert App Icon Design', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill("password123");
    await page.locator('[type="submit"]').click();

    await page.getByRole('button', { name: 'Mobile Application' }).click();

    const done = page.locator('text=Done').locator('..');

    const task = done.locator(':has-text("App icon design")').first();
    await expect(task).toBeVisible();

    await expect(task).toContainText('Design');

    await context.close();
});