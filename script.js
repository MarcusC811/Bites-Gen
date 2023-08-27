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
