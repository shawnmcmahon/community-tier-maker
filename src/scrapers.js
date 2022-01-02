const puppeteer = require('puppeteer-extra'); 

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

puppeteer.launch({ headless: true }).then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage()
  await page.goto('https://bot.sannysoft.com')
  await page.waitForTimeout(5000)
  await page.screenshot({ path: 'testresult.png', fullPage: true })
  await browser.close()
  console.log(`All done, check the screenshot. ✨`)
})



async function scrapeImages(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage(); 
  await page.goto(url);
  const data = await page.evaluate(el => el.innerHTML, await page.$('#create-image-carousel'));
  const innerHTMLarr = data.match(/images(.*?).png/g).map(val => {
    console.log(val)
    return val;
  });

  console.log({innerHTMLarr});

  browser.close();
};



scrapeImages('https://tiermaker.com/create/mlb-teams-102331')

module.exports = {
  mode: "production",
  resolve: {
      fallback: { "path": false }
  }
}
