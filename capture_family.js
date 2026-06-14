const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Usage: node capture_family.js <startIdx> <endIdx> <outName>
const START = parseInt(process.argv[2] || '21', 10);
const END = parseInt(process.argv[3] || '25', 10);
const OUT = process.argv[4] || 'family.png';

const ALL_NAMES = [
    "0 Living Cell","1 Golden Torus","2 Double Helix","3 Spiral Galaxy","4 Lissajous Ribbon",
    "5 Monolith","6 Hollow Shell","7 Wormhole","8 Lemniscate","9 Hourglass","10 Stellated Star",
    "11 Orbital Shells","12 Supernova","13 Mobius Strip","14 Neural Clusters","15 Nebula Cloud",
    "16 Accretion Disk","17 Barred Galaxy","18 Protoplanetary Disk","19 Cosmic Web","20 Aurora Veil",
    "21 World Tree","22 Lotus","23 Koru","24 Dandelion","25 Vine","26 Jellyfish","27 Murmuration",
    "28 Butterfly","29 Nautilus","30 Coral","31 Peacock","32 Flame","33 Maelstrom","34 Cresting Wave",
    "35 Lightning","36 Tornado","37 Snowflake","38 Geode","39 Mandala","40 Labyrinth","41 Cathedral",
    "42 Lorenz","43 Aizawa","44 Phoenix","45 Eye","46 Heart"
];

(async () => {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--use-gl=angle', '--ignore-gpu-blocklist', '--enable-webgl'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 520, height: 400, deviceScaleFactor: 1 });
    page.on('pageerror', e => console.log('ERR', e.message));
    await page.goto('file:///D:/project/New%20folder%20(2)/soul-canvas/index.html', { waitUntil: 'networkidle0' });
    await page.evaluate(() => {
        document.querySelectorAll('.phase,.canvas-overlay,#grain-overlay,#vignette-overlay,#progress-bar-container,#progress-counter,.sound-toggle')
            .forEach(e => e.style.display = 'none');
    });

    const ids = [];
    for (let i = START; i <= END; i++) {
        await page.evaluate((idx) => {
            const u = customMaterial.uniforms;
            u.uShape1.value = idx; u.uShape2.value = idx; u.uMorphProgression.value = 1.0;
            u.uChaos.value = 0; u.uGravity.value = 0; u.uFluidity.value = 0;
            u.uScatter.value = 0; u.uTwist.value = 0; u.uScaleMultiplier.value = 1.0;
            camera.position.set(0, 0, 600); camera.lookAt(0, 0, 0);
        }, i);
        await new Promise(r => setTimeout(r, 1200));
        await page.screenshot({ path: path.join(__dirname, `art_${i}.png`) });
        ids.push(i);
        console.log('captured', i);
    }

    const cols = Math.min(ids.length, 3);
    const cells = ids.map(i =>
        `<div class="cell"><img src="file:///D:/project/New%20folder%20(2)/soul-canvas/art_${i}.png"><div class="lbl">${ALL_NAMES[i]}</div></div>`
    ).join('');
    const html = `<!doctype html><html><head><style>
        body{margin:0;background:#e8e2d6;font-family:Arial;display:grid;grid-template-columns:repeat(${cols},1fr);gap:5px;padding:5px;}
        .cell{position:relative;background:#f4f1ea;}.cell img{width:100%;display:block;}
        .lbl{position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.6);color:#fff;font-size:15px;padding:4px 7px;}
    </style></head><body>${cells}</body></html>`;
    fs.writeFileSync(path.join(__dirname, 'family.html'), html);
    const p2 = await browser.newPage();
    await p2.setViewport({ width: 1600, height: 1100, deviceScaleFactor: 1 });
    await p2.goto('file:///D:/project/New%20folder%20(2)/soul-canvas/family.html', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));
    await p2.screenshot({ path: path.join(__dirname, OUT), fullPage: true });
    console.log('saved', OUT);
    await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
