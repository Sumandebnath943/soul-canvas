const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Worst-case personas: each art's own affinity = the persona that most strongly
// lands on it = the strongest distortion that art ever receives.
const IDS = [23, 20, 12, 31, 41, 5, 36, 24, 35];
const LABELS = {
    23: '23 Koru (hi chaos+fluid)', 20: '20 Aurora (hi chaos+fluid)', 12: '12 Supernova (hi chaos)',
    31: '31 Peacock (hi gravity)', 41: '41 Cathedral (hi gravity)', 5: '5 Monolith (hi gravity)',
    36: '36 Tornado (chaos+grav)', 24: '24 Dandelion (hi fluid)', 35: '35 Lightning (hi chaos)'
};

(async () => {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--use-gl=angle', '--ignore-gpu-blocklist', '--enable-webgl'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 480, height: 380, deviceScaleFactor: 1 });
    page.on('pageerror', e => console.log('ERR', e.message));

    for (const i of IDS) {
        await page.goto('file:///D:/project/New%20folder%20(2)/soul-canvas/index.html', { waitUntil: 'networkidle0' });
        await page.evaluate((idx) => {
            const a = ART_AFFINITIES[idx];
            soulState = { chaos: a[0], gravity: a[1], fluidity: a[2], luminance: a[3], resonance: a[4] };
            const u = customMaterial.uniforms;
            u.uChaos.value = a[0]; u.uGravity.value = a[1]; u.uFluidity.value = a[2];  // full, as at interview end
            window.getArtIndex = () => idx;
            gsap.globalTimeline.timeScale(8.0);
            finishInterview();
        }, i);
        await new Promise(r => setTimeout(r, 13000));
        await page.evaluate(() => {
            document.querySelectorAll('.phase,.canvas-overlay,#grain-overlay,#vignette-overlay,#progress-bar-container,#progress-counter,.sound-toggle')
                .forEach(e => e.style.display = 'none');
            artOffsetX = 0;  // centre for a clean look
        });
        await new Promise(r => setTimeout(r, 1500));
        await page.screenshot({ path: path.join(__dirname, `rev_${i}.png`) });
        console.log('captured', i);
    }

    const cells = IDS.map(i => `<div class="cell"><img src="file:///D:/project/New%20folder%20(2)/soul-canvas/rev_${i}.png"><div class="lbl">${LABELS[i]}</div></div>`).join('');
    const html = `<!doctype html><html><head><style>body{margin:0;background:#e8e2d6;font-family:Arial;display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:4px;}.cell{position:relative;background:#f4f1ea;}.cell img{width:100%;display:block;}.lbl{position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.6);color:#fff;font-size:13px;padding:3px 6px;}</style></head><body>${cells}</body></html>`;
    fs.writeFileSync(path.join(__dirname, 'revset.html'), html);
    const p2 = await browser.newPage();
    await p2.setViewport({ width: 1500, height: 1000, deviceScaleFactor: 1 });
    await p2.goto('file:///D:/project/New%20folder%20(2)/soul-canvas/revset.html', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));
    await p2.screenshot({ path: path.join(__dirname, 'revset.png'), fullPage: true });
    console.log('montage saved');
    await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
