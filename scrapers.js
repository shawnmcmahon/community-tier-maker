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



async function scrapProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage(); 
  await page.goto(url);

  // const [el] = await page.$x('//*[@id="create-image-carousel"]');
  // const src = await el.getProperty('src'); 
  // const srcTxt = await src.jsonValue(); 

  // console.log({srcTxt})

  // page.$eval('.create-image-carousel', (div) => {
  //   return div.innerHTML
  // })

  const pic = await page.evaluate(el => el.innerHTML, await page.$('#create-image-carousel'));
  console.log({pic})
  browser.close();
}

scrapProduct('https://tiermaker.com/create/mlb-teams-102331')

