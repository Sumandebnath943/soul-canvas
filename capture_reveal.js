const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--use-gl=angle', '--ignore-gpu-blocklist', '--enable-webgl'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 720, deviceScaleFactor: 1 });
    page.on('pageerror', e => console.log('ERR', e.message));
    await page.goto('file:///D:/project/New%20folder%20(2)/soul-canvas/index.html', { waitUntil: 'networkidle0' });

    // Simulate a real high-fluidity persona that lands on the Jellyfish, then run
    // the ACTUAL reveal path (finishInterview) so the new distortion-taming applies.
    await page.evaluate(() => {
        soulState = { chaos: 0.45, gravity: 0.30, fluidity: 0.85, luminance: 0.90, resonance: 0.95 };
        const u = customMaterial.uniforms;
        u.uChaos.value = soulState.chaos;       // full distortion, as at end of interview
        u.uGravity.value = soulState.gravity;
        u.uFluidity.value = soulState.fluidity;
        window.getArtIndex = () => 26;          // Jellyfish
        gsap.globalTimeline.timeScale(6.0);
        finishInterview();
    });
    await new Promise(r => setTimeout(r, 16000));
    await page.evaluate(() => {
        ['phase-landing', 'phase-interview', 'phase-analysis'].forEach(id => { const e = document.getElementById(id); if (e) e.style.display = 'none'; });
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(__dirname, 'reveal_check.png') });
    console.log('saved reveal_check.png');
    await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
