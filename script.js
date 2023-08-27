const puppeteer = require('puppeteer');
const randomLetter = 'slkdfjsd123';
const phoneNumber = '9197712323';
const password = 'v7#%RVaWpnXBf2H'

async function launchBrowser () {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setDefaultTimeout(30000); // Increase timeout to 30 seconds
    await page.goto(`https://www.freddys.com/account/signup`);
    await page.setViewport({
        width: 1099,
        height: 1299,
    });
    setTimeout(async () => {
        const firstName = '#first-name';
        await page.waitForSelector(firstName);
        await page.click(firstName);
        await page.type(firstName, 'jed');
    }, 2000); // delay of 2 second
    setTimeout(async () => {
        const lastName = '#last-name';
        await page.waitForSelector(lastName);
        await page.click(lastName);
        await page.type(lastName, 'bites');
    }, 2000); // delay of 2 seconds
    setTimeout(async () => {
        const emailInput = '#email';
        await page.waitForSelector(emailInput);
        await page.click(emailInput);
        await page.type(emailInput, `${randomLetter}@ovomark.xyz`);
    }, 2000); // delay of 2 seconds
    setTimeout(async () => {
        const phoneInput = '#phone';
        await page.waitForSelector(phoneInput);
        await page.click(phoneInput);
        await page.type(phoneInput, phoneNumber);
    }, 2000); // delay of 2 seconds
    setTimeout(async () => {
        const passInput = '#password';
        await page.waitForSelector(passInput);
        await page.click(passInput);
        await page.type(passInput, password);
    }, 2000); // delay of 2 seconds
    setTimeout(async () => {
        const confirmPass = '#confirm-password';
        await page.waitForSelector(confirmPass);
        await page.click(confirmPass);
        await page.type(confirmPass, password);
    }, 2000); // delay of 2 seconds
    setTimeout(async () => {
        const signUpBtn = '.btn--primary';
        await page.waitForSelector(signUpBtn);
        await page.click(signUpBtn);
    }, 2000); // delay of 2 seconds

    // await browser.close();
    // await page.type(firstName, `${randomLetter}@ovomark.xyz`);
}

launchBrowser();

