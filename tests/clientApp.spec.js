const {test, expect} = require ('@playwright/test');


test('Second playwright test with successful logins confirm all elements on new page', async ({page}) =>
{
    const cardTitles = await page.locator('[class="card-body"]');
    await page.goto("https://rahulshettyacademy.com/client/");
    console.log(await page.title());
    await page.locator('#userEmail').fill('peppermint@gmail.com');
    await page.locator('#userPassword').fill("Iamking@000");

    await Promise.all([
        page.waitForURL(''),
        page.locator('[value="Login"]').click()
    ]);
    await expect(page.url()).toBe('https://rahulshettyacademy.com/client/dashboard/dash');
    await page.waitForLoadState('networkidle');
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});
test('Second playwright test with successful logins confirm all elements on new page same cat', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/client/");
    console.log(await page.title());
    await page.locator('#userEmail').fill('peppermint@gmail.com');
    await page.locator('#userPassword').fill("Iamking@000");

    await Promise.all([
        page.waitForURL('https://rahulshettyacademy.com/client/dashboard/dash'),
        page.locator('[value="Login"]').click()
    ]);
    await expect(page.url()).toBe('https://rahulshettyacademy.com/client/dashboard/dash');
    console.log(await page.locator('[class="card-body"]').first().textContent());
    console.log(await page.locator('[class="card-body"]').nth(1).textContent());
    console.log(await page.locator('[class="card-body"]').nth(2).textContent());
    console.log(await page.locator('[class="card-body"]').nth(3).textContent());
    console.log(await page.locator('[class="card-body"]').nth(4).textContent());
    console.log(await page.locator('[class="card-body"]').last().textContent());
});