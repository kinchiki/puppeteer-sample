const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 8 Plus'];

(async () => {
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto('https://machicon.jp/');
  await page.click('.is-loggedOut:nth-child(3)>.menu-item');
  await page.waitFor(1000);

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);
  await page.screenshot({path: 'screenshots/example.png'});

  await browser.close();
})();
