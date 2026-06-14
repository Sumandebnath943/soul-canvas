const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--use-gl=angle', '--ignore-gpu-blocklist'] });
    const page = await browser.newPage();
    page.on('pageerror', e => console.log('ERR', e.message));
    await page.goto('file:///D:/project/New%20folder%20(2)/soul-canvas/index.html', { waitUntil: 'networkidle0' });

    const result = await page.evaluate(() => {
        const N = 100000;
        const counts = new Array(ART_NAMES.length).fill(0);
        for (let n = 0; n < N; n++) {
            let ss = { chaos: 0, gravity: 0, fluidity: 0, luminance: 0.5, resonance: 0.5 };
            for (let q = 0; q < questions.length; q++) {
                const opts = questions[q].options;
                const opt = opts[Math.floor(Math.random() * opts.length)];
                for (let k in opt.effects) ss[k] = Math.max(0, Math.min(1, ss[k] + opt.effects[k] * 0.12));
            }
            soulState.chaos = ss.chaos; soulState.gravity = ss.gravity; soulState.fluidity = ss.fluidity;
            soulState.luminance = ss.luminance; soulState.resonance = ss.resonance;
            counts[getArtIndex()]++;
        }
        return counts.map((c, i) => ({ i, name: ART_NAMES[i], pct: (100 * c / N) }));
    });

    result.sort((a, b) => b.pct - a.pct);
    const orphans = result.filter(r => r.pct < 0.05);
    console.log('=== ART HIT DISTRIBUTION (100k random personas) ===');
    result.forEach(r => console.log(`${r.pct.toFixed(2).padStart(6)}%  [${String(r.i).padStart(2)}] ${r.name}`));
    console.log(`\nReachable (>0.05%): ${result.length - orphans.length} / ${result.length}`);
    console.log(`ORPHANS (<0.05%, effectively unreachable): ${orphans.length}`);
    console.log(orphans.map(o => `[${o.i}] ${o.name}`).join(', '));
    await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
