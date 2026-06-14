const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--use-gl=angle', '--ignore-gpu-blocklist'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1500, height: 1000, deviceScaleFactor: 1 });
    await page.goto('file:///D:/project/New%20folder%20(2)/soul-canvas/montage.html', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(__dirname, 'montage.png'), fullPage: true });
    console.log('done');
    await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
