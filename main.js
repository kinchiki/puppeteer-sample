const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://machicon.jp/');
  await page.screenshot({path: 'screenshots/example.png'});

  await browser.close();
})();
