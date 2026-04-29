import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('button[type="submit"]');
});


// Helper to get a column by name
const getColumn = (page, columnName) => {
    return page.locator('div').filter({ hasText: columnName }).nth(1);
};

// Helper to get a card inside a column
const getCard = (column, text) => {
    return column.locator(`:has-text("${text}")`).first();
};


test('Test Case 1 - Implement User Auth', async ({ page }) => {
    const todo = getColumn(page, 'To Do');

    const card = getCard(todo, 'Implement user authentication');

    await expect(card).toBeVisible();
    await expect(card).toContainText('Feature');
    await expect(card).toContainText('High Priority');
});


test('Test Case 2 - Fix Navigation Bug', async ({ page }) => {
    const todo = getColumn(page, 'To Do');

    const card = getCard(todo, 'Fix navigation bug');

    await expect(card).toBeVisible();
    await expect(card).toContainText('Bug');
});


test('Test Case 3 - Design System Updates', async ({ page }) => {
    const inProgress = getColumn(page, 'In Progress');

    const card = getCard(inProgress, 'Design system updates');

    await expect(card).toBeVisible();
    await expect(card).toContainText('Design');
});


test('Test Case 4 - Push Notification System', async ({ page }) => {
    // Click "Mobile Application"
    await page.getByRole('button', { name: 'Mobile Application' }).click();

    const todo = getColumn(page, 'To Do');

    const card = getCard(todo, 'Push notification system');

    await expect(card).toBeVisible();
    await expect(card).toContainText('Feature');
});


test('Test Case 5 - Offline Mode', async ({ page }) => {
    await page.getByRole('button', { name: 'Mobile Application' }).click();

    const inProgress = getColumn(page, 'In Progress');

    const card = getCard(inProgress, 'Offline mode');

    await expect(card).toBeVisible();
    await expect(card).toContainText('Feature');
    await expect(card).toContainText('High Priority');
});


test('Test Case 6 - App Icon Design', async ({ page }) => {
    await page.getByRole('button', { name: 'Mobile Application' }).click();

    const done = getColumn(page, 'Done');

    const card = getCard(done, 'App icon design');

    await expect(card).toBeVisible();
    await expect(card).toContainText('Design');
});