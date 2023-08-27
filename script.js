// const puppeteer = require('puppeteer');
// const randomLetter = 'slkdfjsd123';
// const phoneNumber = '9197712323';
// const password = 'v7#%RVaWpnXBf2H';

// async function launchBrowser () {
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     await page.setDefaultTimeout(30000); // Increase timeout to 30 seconds
//     await page.goto(`https://www.freddys.com/account/signup`);
//     await page.setViewport({
//         width: 1099,
//         height: 1299,
//     });
//     setTimeout(async () => {
//         const firstName = '#first-name';
//         await page.waitForSelector(firstName);
//         await page.click(firstName);
//         await page.type(firstName, 'jed');
//     }, 2000); // delay of 2 second
//     setTimeout(async () => {
//         const lastName = '#last-name';
//         await page.waitForSelector(lastName);
//         await page.click(lastName);
//         await page.type(lastName, 'bites');
//     }, 2000); // delay of 2 seconds
//     setTimeout(async () => {
//         const emailInput = '#email';
//         await page.waitForSelector(emailInput);
//         await page.click(emailInput);
//         await page.type(emailInput, `${randomLetter}@ovomark.xyz`);
//     }, 2000); // delay of 2 seconds
//     setTimeout(async () => {
//         const phoneInput = '#phone';
//         await page.waitForSelector(phoneInput);
//         await page.click(phoneInput);
//         await page.type(phoneInput, phoneNumber);
//     }, 2000); // delay of 2 seconds
//     setTimeout(async () => {
//         const passInput = '#password';
//         await page.waitForSelector(passInput);
//         await page.click(passInput);
//         await page.type(passInput, password);
//     }, 2000); // delay of 2 seconds
//     setTimeout(async () => {
//         const confirmPass = '#confirm-password';
//         await page.waitForSelector(confirmPass);
//         await page.click(confirmPass);
//         await page.type(confirmPass, password);
//     }, 2000); // delay of 2 seconds
//     setTimeout(async () => {
//         const signUpBtn = '.btn--primary';
//         await page.waitForSelector(signUpBtn);
//         await page.click(signUpBtn);
//     }, 2000); // delay of 2 seconds
// }

// launchBrowser();

const puppeteer = require('puppeteer');

const randomLetter = 'mcncstatefan';
const phoneNumber = '9197712323';
const password = 'v7#%RVaWpnXBf2H';

async function launchBrowser() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setDefaultTimeout(30000); // Increase timeout to 30 seconds
  await page.goto(`https://www.freddys.com/account/signup`);
  await page.setViewport({
    width: 1099,
    height: 1299,
  });

  await page.waitForSelector('#first-name');
  await page.click('#first-name');
  await page.type('#first-name', 'jed');
  await page.waitForTimeout(2000);

  await page.waitForSelector('#last-name');
  await page.click('#last-name');
  await page.type('#last-name', 'bites');
  await page.waitForTimeout(2000);

  await page.waitForSelector('#email');
  await page.click('#email');
  await page.type('#email', `${randomLetter}@icloud.com`);
  await page.waitForTimeout(2000);

  await page.waitForSelector('#phone');
  await page.click('#phone');
  await page.type('#phone', phoneNumber);
  await page.waitForTimeout(2000);

  await page.waitForSelector('#password');
  await page.click('#password');
  await page.type('#password', password);
  await page.waitForTimeout(2000);

  await page.waitForSelector('#confirm-password');
  await page.click('#confirm-password');
  await page.type('#confirm-password', password);
  await page.waitForTimeout(2000);

  await page.waitForSelector('.btn--primary');
  await page.click('.btn--primary');


  // Close the browser after all actions are completed
//   await browser.close();
}

launchBrowser();
