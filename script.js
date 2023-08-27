const puppeteer = require('puppeteer');
const password = 'v7#%RVaWpnXBf2H';
const birthday = '08281999'
const zip = '89183';

async function launchBrowser() {
    function generateRandomLetters(length) {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * letters.length);
            result += letters[randomIndex];
        }
        return result;
        }
        
    function generateRandomDigits(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
    }
    return result;
    }

    let phoneNumber = generateRandomDigits(10);
    let randomLetter = generateRandomLetters(5);

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
    await new Promise(resolve => setTimeout(resolve, 500));

    await page.waitForSelector('#last-name');
    await page.click('#last-name');
    await page.type('#last-name', 'bites');
    await new Promise(resolve => setTimeout(resolve, 500));

    await page.waitForSelector('#email');
    await page.click('#email');
    await page.type('#email', `${randomLetter}@bitesslots.com`);
    await new Promise(resolve => setTimeout(resolve, 500));

    await page.waitForSelector('#phone');
    await page.click('#phone');
    await page.type('#phone', phoneNumber);
    await new Promise(resolve => setTimeout(resolve, 500));

    await page.waitForSelector('#password');
    await page.click('#password');
    await page.type('#password', password);
    await new Promise(resolve => setTimeout(resolve, 500));

    await page.waitForSelector('#confirm-password');
    await page.click('#confirm-password');
    await page.type('#confirm-password', password);
    await new Promise(resolve => setTimeout(resolve, 500));

    await page.waitForSelector('#sign-up-page > app-layout-right > div > div.layout-right__inner > div.layout-right__inner--content > app-custom-sign-up > div > form > div.c-sign-up__submit > button');
    await page.click('#sign-up-page > app-layout-right > div > div.layout-right__inner > div.layout-right__inner--content > app-custom-sign-up > div > form > div.c-sign-up__submit > button');

    await page.waitForSelector('#birthday');
    await page.click('#birthday');
    await page.type('#birthday', birthday);
    await new Promise(resolve => setTimeout(resolve, 500));

    await page.waitForSelector('#ion-overlay-1 > app-custom-complete-profile > div > div.c-complete-profile__wrapper > form > div.c-complete-profile__favorite > button');
    await page.click('#ion-overlay-1 > app-custom-complete-profile > div > div.c-complete-profile__wrapper > form > div.c-complete-profile__favorite > button');

    await page.waitForSelector('#locationSearch');
    await page.click('#locationSearch');
    await page.type('#locationSearch', zip);

    await page.waitForSelector('#searchResults');
    await page.click('#searchResults > li > button');

    await page.waitForSelector('#ion-overlay-2 > app-custom-lightweight-location-finder > div > div > div > div.c-lightweight-location-finder__body > div > div:nth-child(1) > app-custom-location-card > div > div > div.c-location-card-default__footer.modal > button');
    await page.click('#ion-overlay-2 > app-custom-lightweight-location-finder > div > div > div > div.c-lightweight-location-finder__body > div > div:nth-child(1) > app-custom-location-card > div > div > div.c-location-card-default__footer.modal > button');

    await page.waitForSelector('#ion-overlay-1 > app-custom-complete-profile > div > div.c-complete-profile__wrapper > div > button');
    await page.click('#ion-overlay-1 > app-custom-complete-profile > div > div.c-complete-profile__wrapper > div > button');    

    // Close the browser after all actions are completed
    //   await browser.close();
    // 
}

launchBrowser();
