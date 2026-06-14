const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--use-gl=angle', '--ignore-gpu-blocklist'] });
    const page = await browser.newPage();
    page.on('pageerror', e => console.log('ERR', e.message));
    await page.goto('file:///D:/project/New%20folder%20(2)/soul-canvas/index.html', { waitUntil: 'networkidle0' });

    const newAff = await page.evaluate(() => {
        const KEYS = ['chaos', 'gravity', 'fluidity', 'luminance', 'resonance'];
        const clamp = x => Math.max(0, Math.min(1, x));
        const M = 30000;
        // 1) sample reachable soul-states through the real questions
        const samples = [];
        for (let n = 0; n < M; n++) {
            const s = [0, 0, 0, 0.5, 0.5];
            for (let q = 0; q < questions.length; q++) {
                const o = questions[q].options[Math.floor(Math.random() * questions[q].options.length)];
                for (let d = 0; d < 5; d++) if (o.effects[KEYS[d]]) s[d] = clamp(s[d] + o.effects[KEYS[d]] * 0.12);
            }
            samples.push(s);
        }
        const dist2 = (a, b) => { let d = 0; for (let i = 0; i < 5; i++) { const x = a[i] - b[i]; d += x * x; } return d; };
        const K = ART_AFFINITIES.length;
        // 2) k-means into K clusters
        let cents = [];
        for (let k = 0; k < K; k++) cents.push(samples[Math.floor(Math.random() * M)].slice());
        const assign = new Array(M);
        for (let iter = 0; iter < 30; iter++) {
            for (let n = 0; n < M; n++) {
                let best = 0, bd = Infinity;
                for (let k = 0; k < K; k++) { const d = dist2(samples[n], cents[k]); if (d < bd) { bd = d; best = k; } }
                assign[n] = best;
            }
            const sum = Array.from({ length: K }, () => [0, 0, 0, 0, 0]);
            const cnt = new Array(K).fill(0);
            for (let n = 0; n < M; n++) { const k = assign[n]; cnt[k]++; for (let d = 0; d < 5; d++) sum[k][d] += samples[n][d]; }
            for (let k = 0; k < K; k++) {
                if (cnt[k] === 0) { cents[k] = samples[Math.floor(Math.random() * M)].slice(); continue; }
                for (let d = 0; d < 5; d++) cents[k][d] = sum[k][d] / cnt[k];
            }
        }
        // 3) reachable per-dimension range (2nd..98th percentile)
        const lo = [0, 0, 0, 0, 0], hi = [0, 0, 0, 0, 0];
        for (let d = 0; d < 5; d++) {
            const col = samples.map(s => s[d]).sort((a, b) => a - b);
            lo[d] = col[Math.floor(0.02 * M)]; hi[d] = col[Math.floor(0.98 * M)];
        }
        // 4) map each art's INTENDED affinity into the reachable box (preserves character)
        const intended = ART_AFFINITIES.map(a => a.map((v, d) => lo[d] + v * (hi[d] - lo[d])));
        // 5) greedy bipartite assignment art -> nearest unused centroid
        const pairs = [];
        for (let a = 0; a < K; a++) for (let c = 0; c < K; c++) pairs.push([a, c, dist2(intended[a], cents[c])]);
        pairs.sort((x, y) => x[2] - y[2]);
        const artDone = new Array(K).fill(false), centDone = new Array(K).fill(false);
        const result = new Array(K).fill(null);
        let assigned = 0;
        for (const [a, c] of pairs) {
            if (assigned === K) break;
            if (artDone[a] || centDone[c]) continue;
            result[a] = cents[c].map(v => Math.round(v * 100) / 100);
            artDone[a] = true; centDone[c] = true; assigned++;
        }
        return { result, names: ART_NAMES };
    });

    let out = '';
    newAff.result.forEach((a, i) => {
        out += `    [${a.map(v => v.toFixed(2)).join(', ')}],  // ${i}: ${newAff.names[i]}\n`;
    });
    console.log(out);
    await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
