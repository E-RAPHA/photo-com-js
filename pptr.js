
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless:false,
        args: [ '--use-fake-ui-for-media-stream' ]
    })
  const page = await browser.newPage(); 
  await page.setViewport({
    width: 1920,
    height: 1080
})
  await page.goto(`file://${__dirname}/camera.html`);

  await page.waitForTimeout(2500);
  await page.screenshot({
                path: `./imgez/foto.png`,
                clip: { x:8, y:8, width: 900, height: 500},
})


})();
