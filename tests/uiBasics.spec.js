const {test, expect} = require ('@playwright/test');

test('First playwright test', async ({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
});

test('Browser Context playwright test', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
});

test('First playwright test with assert', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title());
});

test('Browser Context playwright test with assert', async ({page}) =>
{
    await page.goto("https://google.com/")
    await page.title();
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test('First playwright test with form', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator('[id="username"]').fill("peppermintPatty");
    await page.locator('#password').fill("learning");
    await page.locator('[id="signInBtn"]').click();
    await page.locator("[style*='block']");
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');
});

test('Second playwright test with form', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('[id="username"]');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    // await page.locator('[id="username"]').fill("peppermintPatty");
    await userName.fill('peppermintPatty');
    await page.locator('#password').fill("learning");
    await page.locator('[id="signInBtn"]').click();
    await page.locator("[style*='block']");
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');
    // clear entry and repopulate
    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await page.locator('[id="signInBtn"]').click();
});

test('Second playwright test with successful login', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('[id="username"]');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    // await page.locator('[id="username"]').fill("peppermintPatty");
    await userName.fill('peppermintPatty');
    await page.locator('#password').fill("learning");
    await page.locator('[id="signInBtn"]').click();
    await page.locator("[style*='block']");
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');
    // clear entry and repopulate
    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await page.locator('[id="signInBtn"]').click();
    await page.locator("[style*='block']");
});

test('Second playwright test with successful logins confirm elements on new page', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('[id="username"]');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill('rahulshettyacademy');
    await page.locator('#password').fill("learning");
    // await page.locator('[id="signInBtn"]').click();
    await Promise.all([
        page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop'),
        page.locator('[id="signInBtn"]').nth(0).click()
    ]);
    await expect(page.url()).toBe('https://rahulshettyacademy.com/angularpractice/shop');

    console.log(await page.locator('[class="card-body"]').first().textContent());
    console.log(await page.locator('[class="card-body"]').nth(1).textContent());
    console.log(await page.locator('[class="card-body"]').nth(2).textContent());
    console.log(await page.locator('[class="card-body"]').last().textContent());
});

test('Second playwright test with successful logins confirm all elements on new page', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const cardTitles = await page.locator('[class="card-body"]');
    const userName = await page.locator('[id="username"]');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill('rahulshettyacademy');
    await page.locator('#password').fill("learning");
    // await page.locator('[id="signInBtn"]').click();
    await Promise.all([
        page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop'),
        page.locator('[id="signInBtn"]').nth(0).click()
    ]);
    await expect(page.url()).toBe('https://rahulshettyacademy.com/angularpractice/shop');
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

});

test('nav test new tab', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://card.americanexpress.com/d/american-express/?jo_&dynamic_disabled&disableOffers=true&acceptModal=false&disableCovid=true&exp=0");
    await page.locator('[data-test-button="masthead__login"]').click();
    expect (await page.goto( 'https://www.americanexpress.com/en-us/account/login?inav=iNavLnkLog'));
});

test('nav test same tab redirect', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://card.americanexpress.com/d/american-express/?jo_&dynamic_disabled&disableOffers=true&acceptModal=false&disableCovid=true&exp=0");
    await Promise.all([
        page.waitForURL('https://www.americanexpress.com/us/credit-cards/card-application/apply/platinum-card/28009-10-0#/'),
        page.locator('[data-test-button="Apply Now"]').nth(0).click()
    ]);
    expect(page.url()).toBe('https://www.americanexpress.com/us/credit-cards/card-application/apply/platinum-card/28009-10-0#/');
});

test('Second playwright test with successful logins radio buttons & dropdown', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('[id="username"]');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill('rahulshettyacademy');
    await page.locator('#password').fill("learning");
    //radio
    await page.locator('[class="customradio"]').nth(0).click();
    console.log(await page.locator('[class="customradio"]').nth(0).textContent());
    //dropdown
    const dropdown = await page.locator('[class="form-control"]').nth(2);
    await dropdown.selectOption("consult");
    console.log(await page.locator('[class="form-control"] [value]').nth(2).textContent());
    // await page.pause();
    await Promise.all([
        page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop'),
        page.locator('[id="signInBtn"]').nth(0).click()
    ]);
    await expect(page.url()).toBe('https://rahulshettyacademy.com/angularpractice/shop');

    console.log(await page.locator('[class="card-body"]').first().textContent());
    console.log(await page.locator('[class="card-body"]').nth(1).textContent());
    console.log(await page.locator('[class="card-body"]').nth(2).textContent());
    console.log(await page.locator('[class="card-body"]').last().textContent());
});

test('Second playwright test with successful logins radio buttons & dropdown and modal', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('[id="username"]');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill('rahulshettyacademy');
    await page.locator('#password').fill("learning");
    //radio
    await page.locator('[class="customradio"]').nth(1).click();
    console.log(await page.locator('[class="customradio"]').nth(1).textContent());
    //modal
    await page.locator('[class="btn btn-success"]').click();
    //dropdown
    const dropdown = await page.locator('[class="form-control"]').nth(2);
    await dropdown.selectOption("consult");
    console.log(await page.locator('[class="form-control"] [value]').nth(2).textContent());
    // await page.pause();
    await Promise.all([
        page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop'),
        page.locator('[id="signInBtn"]').nth(0).click()
    ]);
    await expect(page.url()).toBe('https://rahulshettyacademy.com/angularpractice/shop');

    console.log(await page.locator('[class="card-body"]').first().textContent());
    console.log(await page.locator('[class="card-body"]').nth(1).textContent());
    console.log(await page.locator('[class="card-body"]').nth(2).textContent());
    console.log(await page.locator('[class="card-body"]').last().textContent());
});

test('Second playwright test with successful logins radio buttons & dropdown and modal and checkbox', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('[id="username"]');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill('rahulshettyacademy');
    await page.locator('#password').fill("learning");
    //radio
    await page.locator('[class="customradio"]').nth(1).click();
    console.log(await page.locator('[class="customradio"]').nth(1).textContent());
    //modal
    await page.locator('[class="btn btn-success"]').click();
    //checkbox
    await page.locator('[id="terms"]').click();
    await expect (page.locator('[id="terms"]')).toBeChecked();
    //dropdown
    const dropdown = await page.locator('[class="form-control"]').nth(2);
    await dropdown.selectOption("consult");
    console.log(await page.locator('[class="form-control"] [value]').nth(2).textContent());
    // await page.pause();
    await Promise.all([
        page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop'),
        page.locator('[id="signInBtn"]').nth(0).click()
    ]);
    await expect(page.url()).toBe('https://rahulshettyacademy.com/angularpractice/shop');

    console.log(await page.locator('[class="card-body"]').first().textContent());
    console.log(await page.locator('[class="card-body"]').nth(1).textContent());
    console.log(await page.locator('[class="card-body"]').nth(2).textContent());
    console.log(await page.locator('[class="card-body"]').last().textContent());
});

test('Second playwright test with successful logins radio buttons & dropdown and modal and checkbox logging', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('[id="username"]');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill('rahulshettyacademy');
    await page.locator('#password').fill("learning");
    //radio
    await page.locator('[class="customradio"]').nth(1).click();
    console.log(await page.locator('[class="customradio"]').nth(1).textContent());
    //modal
    await page.locator('[class="btn btn-success"]').click();
    //checkbox
    await page.locator('[id="terms"]').click();
    await expect (await page.locator('[id="terms"]')).toBeChecked();
    await expect(page.locator('[id="terms"]').isChecked()).toBeTruthy();
    console.log(await page.locator('[id="terms"]').last().isChecked());
    //dropdown
    const dropdown = await page.locator('[class="form-control"]').nth(2);
    await dropdown.selectOption("consult");
    console.log(await page.locator('[class="form-control"] [value]').nth(2).textContent());
    // uncheck checkbox
    await page.locator('[id="terms"]').uncheck();
    // await page.pause();
    await expect(await page.locator('[id="terms"]').isChecked()).toBeFalsy();
    console.log(await page.locator('[id="terms"]').last().isChecked());
    // await page.pause();
    await Promise.all([
        page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop'),
        page.locator('[id="signInBtn"]').nth(0).click()
    ]);
    await expect(page.url()).toBe('https://rahulshettyacademy.com/angularpractice/shop');

    console.log(await page.locator('[class="card-body"]').first().textContent());
    console.log(await page.locator('[class="card-body"]').nth(1).textContent());
    console.log(await page.locator('[class="card-body"]').nth(2).textContent());
    console.log(await page.locator('[class="card-body"]').last().textContent());
});

test('fill out form, open new tab with assertions', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('[id="username"]');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill('rahulshettyacademy');
    await page.locator('#password').fill("learning");
    //radio
    await page.locator('[class="customradio"]').nth(1).click();
    console.log(await page.locator('[class="customradio"]').nth(1).textContent());
    //modal
    await page.locator('[class="btn btn-success"]').click();
    //checkbox
    await page.locator('[id="terms"]').click();
    await expect (await page.locator('[id="terms"]')).toBeChecked();
    await expect(page.locator('[id="terms"]').isChecked()).toBeTruthy();
    console.log(await page.locator('[id="terms"]').last().isChecked());
    //dropdown
    const dropdown = await page.locator('[class="form-control"]').nth(2);
    await dropdown.selectOption("consult");
    console.log(await page.locator('[class="form-control"] [value]').nth(2).textContent());
    // uncheck checkbox
    await page.locator('[id="terms"]').uncheck();
    // await page.pause();
    await expect(await page.locator('[id="terms"]').isChecked()).toBeFalsy();
    console.log(await page.locator('[id="terms"]').last().isChecked());
    // await page.pause();
    await Promise.all([
        page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop'),
        page.locator('[id="signInBtn"]').nth(0).click()
    ]);
    await expect(page.url()).toBe('https://rahulshettyacademy.com/angularpractice/shop');

    console.log(await page.locator('[class="card-body"]').first().textContent());
    console.log(await page.locator('[class="card-body"]').nth(1).textContent());
    console.log(await page.locator('[class="card-body"]').nth(2).textContent());
    console.log(await page.locator('[class="card-body"]').last().textContent());
    const documentLink = page.locator('[href="https://qasummit.org/"]');
    await expect(documentLink).toHaveAttribute("class","blinkingText");
    await documentLink.click();
});


