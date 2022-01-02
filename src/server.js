const puppeteer = require('puppeteer-extra');
const express = require('express');

const app = express();

app.get('/screenshot', async (req, res) => {
  console.log(req.query.url, 'req')
  const browser = await puppeteer.launch();
  const page = await browser.newPage(); 
  await page.goto(req.query.url);
  // const data = await page.evaluate(el => el.innerHTML, await page.$('#create-image-carousel'));
  // const innerHTMLarr = data.match(/images(.*?).png/g).map(val => {
  //   console.log(val)
  //   return val;
  // });
  const screenshotBuffer = await page.screenshot();

 

  // browser.close();

    // Respond with the image
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': screenshotBuffer.length
    });
    res.end(screenshotBuffer);

    await browser.close();
})

app.listen(4000);