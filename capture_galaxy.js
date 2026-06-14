const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--use-gl=angle', '--ignore-gpu-blocklist', '--enable-webgl']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 630, deviceScaleFactor: 1 });
    page.on('console', m => console.log('PAGE:', m.text()));
    page.on('pageerror', e => console.log('PAGEERR:', e.message));

    const url = 'file:///D:/project/New%20folder%20(2)/soul-canvas/index.html';
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Jump straight to the Spiral Galaxy (index 3) reveal, sped up.
    await page.evaluate(() => {
        window.getArtIndex = () => 2;
        gsap.globalTimeline.timeScale(6.0);
        finishInterview();
    });

    await new Promise(r => setTimeout(r, 18000));

    // Hide only the leftover landing/interview/analysis overlays (test artifact);
    // keep the real reveal framing (art sits right-of-centre, card space on the left).
    await page.evaluate(() => {
        ['phase-landing', 'phase-interview', 'phase-analysis'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
    });
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: path.join(__dirname, 'galaxy_preview.png') });
    console.log('Saved galaxy_preview.png');
    await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
