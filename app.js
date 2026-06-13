// Soul Canvas v8.0 — Million Dollar Abstract Art
// ============================================================

// ----------------------------------------------------
// 1. THE PSYCHOLOGICAL LABYRINTH — Varied, Surprising Questions
// ----------------------------------------------------
const questions = [
    {
        text: "You enter a room you've never seen before. What do you notice first?",
        options: [
            { text: "The silence", effects: { resonance: 0.7, gravity: 0.3, luminance: -0.2 }, anim: "flow" },
            { text: "The exits", effects: { gravity: 0.6, chaos: -0.3, fluidity: -0.2 }, anim: "contract" },
            { text: "The light", effects: { luminance: 0.8, fluidity: 0.3, resonance: 0.2 }, anim: "expand" },
            { text: "The smell", effects: { chaos: 0.5, fluidity: 0.6, resonance: 0.3 }, anim: "flow" }
        ]
    },
    {
        text: "A stranger tells you something true about yourself that you've never said aloud. You feel…",
        options: [
            { text: "Exposed", effects: { gravity: 0.7, chaos: 0.3, luminance: -0.4 }, anim: "contract" },
            { text: "Understood", effects: { resonance: 0.8, fluidity: 0.5, luminance: 0.3 }, anim: "expand" },
            { text: "Suspicious", effects: { chaos: -0.5, gravity: 0.8, fluidity: -0.3 }, anim: "twist" }
        ]
    },
    {
        text: "When you lie awake at 3 AM, your mind is most likely…",
        options: [
            { text: "Replaying a conversation", effects: { resonance: 0.6, gravity: 0.5, chaos: 0.2 }, anim: "twist" },
            { text: "Building something", effects: { gravity: 0.4, fluidity: -0.3, luminance: 0.5 }, anim: "expand" },
            { text: "Drifting in images", effects: { fluidity: 0.8, chaos: 0.3, luminance: 0.3 }, anim: "flow" },
            { text: "Completely still", effects: { resonance: -0.3, chaos: -0.6, gravity: 0.2 }, anim: "contract" }
        ]
    },
    {
        text: "Which would you keep, if you could only choose one?",
        options: [
            { text: "A key to a door you haven't found", effects: { chaos: 0.5, resonance: 0.5, luminance: 0.4 }, anim: "expand" },
            { text: "A letter you'll never send", effects: { gravity: 0.6, resonance: 0.7, fluidity: -0.3 }, anim: "contract" },
            { text: "A map with no labels", effects: { chaos: 0.7, fluidity: 0.7, luminance: 0.2 }, anim: "scatter" }
        ]
    },
    {
        text: "You are walking alone at dusk. The path splits into three. You take…",
        options: [
            { text: "The one going uphill", effects: { gravity: 0.7, luminance: 0.5, chaos: -0.3 }, anim: "expand" },
            { text: "The one with footprints", effects: { fluidity: 0.5, resonance: 0.4, gravity: 0.3 }, anim: "flow" },
            { text: "The one you can't see the end of", effects: { chaos: 0.8, fluidity: 0.6, luminance: -0.2 }, anim: "scatter" }
        ]
    },
    {
        text: "A piece of music moves you to tears. What kind of tears?",
        options: [
            { text: "The kind that burn", effects: { chaos: 0.6, resonance: 0.8, luminance: 0.5 }, anim: "spike" },
            { text: "The kind that fall silently", effects: { fluidity: 0.7, gravity: 0.4, resonance: 0.3 }, anim: "flow" },
            { text: "You don't cry. You just stop breathing.", effects: { gravity: 0.9, chaos: -0.4, luminance: -0.3 }, anim: "contract" }
        ]
    },
    {
        text: "You discover a flaw in something you've built. You…",
        options: [
            { text: "Tear it apart and rebuild", effects: { chaos: 0.5, gravity: 0.4, fluidity: -0.5 }, anim: "scatter" },
            { text: "Leave it. The flaw gives it character.", effects: { fluidity: 0.7, resonance: 0.4, chaos: 0.2 }, anim: "flow" },
            { text: "Fix it so no one will ever notice", effects: { gravity: 0.8, chaos: -0.5, luminance: 0.2 }, anim: "twist" }
        ]
    },
    {
        text: "Which landscape mirrors your inner state right now?",
        options: [
            { text: "Open ocean at night", effects: { chaos: 0.4, fluidity: 0.9, luminance: -0.4 }, anim: "flow" },
            { text: "A cathedral made of glass", effects: { gravity: 0.6, luminance: 0.8, resonance: 0.5 }, anim: "expand" },
            { text: "A forest after a fire", effects: { chaos: 0.7, luminance: 0.3, resonance: 0.4 }, anim: "scatter" },
            { text: "A perfectly still lake", effects: { fluidity: 0.3, chaos: -0.7, resonance: 0.5 }, anim: "contract" }
        ]
    },
    {
        text: "Someone you admire disappoints you. Your first instinct is to…",
        options: [
            { text: "Withdraw quietly", effects: { gravity: 0.6, fluidity: -0.4, chaos: -0.3 }, anim: "contract" },
            { text: "Confront them directly", effects: { chaos: 0.5, resonance: 0.6, luminance: 0.3 }, anim: "spike" },
            { text: "Understand. Everyone is flawed.", effects: { fluidity: 0.6, resonance: 0.5, gravity: -0.2 }, anim: "flow" }
        ]
    },
    {
        text: "If your life had a recurring motif, it would be…",
        options: [
            { text: "Doors", effects: { chaos: 0.3, gravity: 0.3, fluidity: 0.3 }, anim: "expand" },
            { text: "Mirrors", effects: { resonance: 0.8, luminance: 0.4, gravity: 0.3 }, anim: "twist" },
            { text: "Storms", effects: { chaos: 0.8, fluidity: 0.5, luminance: -0.2 }, anim: "scatter" },
            { text: "Roots", effects: { gravity: 0.9, fluidity: -0.3, resonance: 0.4 }, anim: "contract" }
        ]
    },
    {
        text: "You're given absolute power for one day. You use it to…",
        options: [
            { text: "Restructure everything", effects: { gravity: 0.9, chaos: -0.5, fluidity: -0.4 }, anim: "twist" },
            { text: "Dissolve all boundaries", effects: { chaos: 0.8, fluidity: 0.9, luminance: 0.5 }, anim: "scatter" },
            { text: "Observe without intervening", effects: { resonance: 0.7, fluidity: 0.3, luminance: 0.3 }, anim: "flow" }
        ]
    },
    {
        text: "Finally… what frightens you more?",
        options: [
            { text: "That nothing matters", effects: { chaos: 0.6, luminance: -0.5, resonance: -0.3 }, anim: "scatter" },
            { text: "That everything does", effects: { gravity: 0.7, resonance: 0.6, luminance: 0.3 }, anim: "contract" }
        ]
    }
];

let soulState = { chaos: 0.0, gravity: 0.0, fluidity: 0.0, luminance: 0.5, resonance: 0.5 };
let currentQ = 0;
let isInterviewing = false;
let isArtRevealed = false;
let artOffsetX = 0;

// Mouse tracking for parallax
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// ----------------------------------------------------
// 2. ART FORMS DATA
// ----------------------------------------------------
let scene, camera, renderer, particleSystem, customMaterial;
let clock = new THREE.Clock();
const isMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 1;
const PARTICLE_COUNT = isMobile ? 40000 : 100000;

const ART_NAMES = [
    "The Living Cell", "The Golden Torus", "The Double Helix", "The Spiral Galaxy",
    "The Lissajous Ribbon", "The Monolith", "The Hollow Shell", "The Wormhole",
    "The Lemniscate", "The Hourglass", "The Stellated Star", "The Orbital Shells",
    "The Supernova", "The Möbius Strip", "The Neural Clusters"
];

const ART_SUBTITLES = [
    "The origin point from which all complexity emerges.",
    "An eternal loop of self-reinforcing conviction.",
    "The intertwined strands of logic and emotion.",
    "Matter spiraling into the gravity of purpose.",
    "Thought unbound, trailing across infinite space.",
    "An immovable pillar of crystallized identity.",
    "The architecture of deliberate absence.",
    "A tunnel between who you were and who you will become.",
    "Two hemispheres in perpetual dialogue.",
    "Time compressed at the waist, expanding at the edges.",
    "Sharpened edges radiating outward from a centered core.",
    "Uncertainty made beautiful — every possibility suspended.",
    "An explosive release of stored interior pressure.",
    "A surface with only one side — endlessly self-referential.",
    "Clustered nodes of meaning connected by invisible threads."
];

const ART_AFFINITIES = [
    [0.3, 0.3, 0.3, 0.5, 0.5],
    [0.1, 0.4, 0.7, 0.3, 0.4],
    [0.3, 0.2, 0.6, 0.5, 0.6],
    [0.2, 0.8, 0.3, 0.2, 0.2],
    [0.7, 0.1, 0.8, 0.4, 0.2],
    [0.0, 0.9, 0.0, 0.2, 0.3],
    [0.1, 0.5, 0.1, 0.1, 0.8],
    [0.4, 0.1, 0.5, 0.8, 0.2],
    [0.5, 0.4, 0.2, 0.3, 0.7],
    [0.1, 0.7, 0.1, 0.6, 0.4],
    [0.0, 0.2, 0.0, 0.9, 0.6],
    [0.8, 0.0, 0.2, 0.4, 0.5],
    [0.9, 0.1, 0.3, 0.7, 0.4],
    [0.2, 0.1, 0.8, 0.3, 0.7],
    [0.6, 0.1, 0.3, 0.2, 0.9],
];

function getArtIndex() {
    const state = [soulState.chaos, soulState.gravity, soulState.fluidity, soulState.luminance, soulState.resonance];
    let bestIndex = 0;
    let bestScore = -Infinity;
    for (let i = 0; i < ART_AFFINITIES.length; i++) {
        let score = 0;
        for (let j = 0; j < 5; j++) {
            score -= Math.pow(state[j] - ART_AFFINITIES[i][j], 2);
        }
        if (score > bestScore) { bestScore = score; bestIndex = i; }
    }
    return bestIndex;
}

// ----------------------------------------------------
// 3. SOUND ENGINE — Ambient Alien Organism
// ----------------------------------------------------
let audioCtx = null, masterGain = null, droneOsc1 = null, droneOsc2 = null, droneOsc3 = null;
let isMuted = false, soundInitialized = false;

function initSound() {
    if (soundInitialized) return;
    try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = 0.0;
        masterGain.connect(audioCtx.destination);

        // Layer 1: Deep sub-bass foundation
        droneOsc1 = audioCtx.createOscillator();
        droneOsc1.type = 'sine';
        droneOsc1.frequency.value = 55;
        const dg1 = audioCtx.createGain();
        dg1.gain.value = 0.10;
        droneOsc1.connect(dg1);
        dg1.connect(masterGain);

        // Layer 2: Mid-range with FM modulation for organic warble
        droneOsc2 = audioCtx.createOscillator();
        droneOsc2.type = 'sine';
        droneOsc2.frequency.value = 110;
        const modulator = audioCtx.createOscillator();
        modulator.type = 'sine';
        modulator.frequency.value = 0.25;
        const modGain = audioCtx.createGain();
        modGain.gain.value = 6;
        modulator.connect(modGain);
        modGain.connect(droneOsc2.frequency);
        modulator.start();
        const dg2 = audioCtx.createGain();
        dg2.gain.value = 0.05;
        droneOsc2.connect(dg2);
        dg2.connect(masterGain);

        // Layer 3: High shimmer with detuning + LFO volume breathing
        droneOsc3 = audioCtx.createOscillator();
        droneOsc3.type = 'sine';
        droneOsc3.frequency.value = 220.5;
        const shimmerGain = audioCtx.createGain();
        shimmerGain.gain.value = 0.02;
        droneOsc3.connect(shimmerGain);
        shimmerGain.connect(masterGain);
        const lfo = audioCtx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.07;
        const lfoGain = audioCtx.createGain();
        lfoGain.gain.value = 0.012;
        lfo.connect(lfoGain);
        lfoGain.connect(shimmerGain.gain);
        lfo.start();

        droneOsc1.start();
        droneOsc2.start();
        droneOsc3.start();
        masterGain.gain.setTargetAtTime(1.0, audioCtx.currentTime, 3.0);
        soundInitialized = true;
    } catch (e) { console.warn('Audio unavailable:', e); }
}

function playClickTone() {
    if (!audioCtx || isMuted) return;
    const baseFreq = 300 + Math.random() * 150;
    [baseFreq, baseFreq * 1.5, baseFreq * 2].forEach((f, i) => {
        const o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = 'sine'; o.frequency.value = f;
        g.gain.value = (0.04 - i * 0.012);
        o.connect(g); g.connect(masterGain); o.start();
        g.gain.setTargetAtTime(0, audioCtx.currentTime + 0.2, 0.3);
        o.stop(audioCtx.currentTime + 1.0);
    });
}

function playJoltThud() {
    if (!audioCtx || isMuted) return;
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = 'sine'; o.frequency.value = 38; g.gain.value = 0.08;
    o.connect(g); g.connect(masterGain); o.start();
    o.frequency.setTargetAtTime(22, audioCtx.currentTime, 0.12);
    g.gain.setTargetAtTime(0, audioCtx.currentTime + 0.15, 0.25);
    o.stop(audioCtx.currentTime + 0.6);
}

function updateDrone() {
    if (!audioCtx || !droneOsc1) return;
    const t = audioCtx.currentTime;
    droneOsc1.frequency.setTargetAtTime(55 + soulState.gravity * 15 - soulState.chaos * 8, t, 2.0);
    droneOsc2.frequency.setTargetAtTime(110 + soulState.chaos * 20 - soulState.fluidity * 10, t, 2.0);
    droneOsc3.frequency.setTargetAtTime(220 + soulState.luminance * 40 + soulState.resonance * 15, t, 2.0);
}

function playRevealCrescendo() {
    if (!audioCtx || isMuted) return;
    [130.81, 164.81, 196.0, 261.63, 329.63].forEach((f, i) => {
        const o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = 'sine'; o.frequency.value = f; g.gain.value = 0;
        o.connect(g); g.connect(masterGain);
        o.start(audioCtx.currentTime + i * 1.0);
        g.gain.setTargetAtTime(0.04, audioCtx.currentTime + i * 1.0, 0.8);
        g.gain.setTargetAtTime(0, audioCtx.currentTime + i * 1.0 + 4, 1.5);
        o.stop(audioCtx.currentTime + i * 1.0 + 7);
    });
}

// ----------------------------------------------------
// 4. HSL COLOR ENGINE — warm, luminous palette
// ----------------------------------------------------
function getSoulColor() {
    let hue = 35 + soulState.chaos * 25 - soulState.gravity * 40 + soulState.resonance * 15;
    hue = ((hue % 360) + 360) % 360;
    let sat = Math.min(0.75, Math.max(0.2, 0.25 + soulState.fluidity * 0.35 + soulState.resonance * 0.15));
    let light = Math.min(0.55, Math.max(0.2, 0.25 + soulState.luminance * 0.25));
    return new THREE.Color().setHSL(hue / 360, sat, light);
}

function getSoulAccentColor() {
    let hue = 42 + soulState.resonance * 30 - soulState.chaos * 15;
    hue = ((hue % 360) + 360) % 360;
    let sat = Math.min(0.8, 0.35 + soulState.fluidity * 0.3);
    let light = Math.min(0.65, 0.35 + soulState.luminance * 0.25);
    return new THREE.Color().setHSL(hue / 360, sat, light);
}

// ----------------------------------------------------
// 5. THREE.JS — THE LIVING ENGINE
// ----------------------------------------------------
function initThree() {
    const container = document.getElementById('webgl-container');
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4f4f0);
    scene.fog = new THREE.FogExp2(0xf4f4f0, 0.0004);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(-150, 0, 450);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const randoms = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const r = 200 * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
        randoms[i] = Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

    customMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uChaos: { value: 0.0 },
            uGravity: { value: 0.0 },
            uFluidity: { value: 0.0 },
            uColorA: { value: new THREE.Color(0x3a3530) },
            uColorB: { value: new THREE.Color(0xc4a035) },
            uShape1: { value: 0 },
            uShape2: { value: 0 },
            uMorphProgression: { value: 0.0 },
            uJoltIntensity: { value: 0.0 },
            uJoltPos: { value: new THREE.Vector3(0, 0, 0) },
            uScatter: { value: 0.0 },
            uScaleMultiplier: { value: 1.0 },
            uSizeMultiplier: { value: isMobile ? 700.0 : 350.0 },
            uTwist: { value: 0.0 }
        },
        vertexShader: `
            uniform float uTime;
            uniform float uChaos;
            uniform float uGravity;
            uniform float uFluidity;
            uniform float uSizeMultiplier;
            uniform int uShape1;
            uniform int uShape2;
            uniform float uMorphProgression;
            uniform float uJoltIntensity;
            uniform vec3 uJoltPos;
            uniform float uScatter;
            uniform float uScaleMultiplier;
            uniform float uTwist;

            attribute float aRandom;
            varying float vRandom;
            varying float vDepth;

            // --- Noise ---
            vec3 hash(vec3 p) {
                p = vec3(dot(p,vec3(127.1,311.7,74.7)), dot(p,vec3(269.5,183.3,246.1)), dot(p,vec3(113.5,271.9,124.6)));
                return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
            }
            float noise(vec3 p) {
                vec3 i = floor(p); vec3 f = fract(p); vec3 u = f*f*(3.0-2.0*f);
                return mix(mix(mix(dot(hash(i+vec3(0,0,0)),f-vec3(0,0,0)),dot(hash(i+vec3(1,0,0)),f-vec3(1,0,0)),u.x),
                               mix(dot(hash(i+vec3(0,1,0)),f-vec3(0,1,0)),dot(hash(i+vec3(1,1,0)),f-vec3(1,1,0)),u.x),u.y),
                           mix(mix(dot(hash(i+vec3(0,0,1)),f-vec3(0,0,1)),dot(hash(i+vec3(1,0,1)),f-vec3(1,0,1)),u.x),
                               mix(dot(hash(i+vec3(0,1,1)),f-vec3(0,1,1)),dot(hash(i+vec3(1,1,1)),f-vec3(1,1,1)),u.x),u.y),u.z);
            }

            // --- 15 Bespoke Living Art Forms (scaled up 1.5-2x) ---
            vec3 getShape(int idx, vec3 basePos, float rand) {
                vec3 n = normalize(basePos);
                float theta = atan(n.z, n.x);
                float phi = asin(n.y);
                float r = length(basePos);
                float t = uTime;

                // 0: Living Cell — amoeba-like pulsing surface
                if (idx == 0) {
                    float surface = 280.0 + 50.0 * noise(n * 2.0 + t * 0.08);
                    return n * surface;
                }

                // 1: Golden Torus — particles orbit along the ring
                if (idx == 1) {
                    float a = theta + t * 0.04 * (0.5 + rand * 0.5);
                    float R = 240.0;
                    float rad = 80.0 + 15.0 * sin(a * 3.0 + t * 0.1);
                    float p = phi + t * 0.05;
                    return vec3((R + rad*cos(p))*cos(a), rad*sin(p), (R + rad*cos(p))*sin(a));
                }

                // 2: Double Helix — two intertwined strands
                if (idx == 2) {
                    float strand = step(0.5, fract(rand * 7.0)) * 2.0 - 1.0;
                    float along = (rand - 0.5) * 2.0;
                    float twist = along * 6.0 + t * 0.08;
                    return vec3(100.0 * cos(twist) * strand, along * 400.0, 100.0 * sin(twist) * strand) + n * 15.0;
                }

                // 3: Spiral Galaxy — three logarithmic arms
                if (idx == 3) {
                    float arm = floor(rand * 3.0);
                    float along = fract(rand * 3.0);
                    float dist = 20.0 + along * 300.0;
                    float angle = along * 3.0 + arm * 2.094 + t * 0.015;
                    float height = (noise(vec3(rand * 10.0, t * 0.04, 0.0)) - 0.5) * 30.0 * (1.0 - along);
                    return vec3(dist * cos(angle), height, dist * sin(angle));
                }

                // 4: Lissajous Ribbon — 3D flowing curves
                if (idx == 4) {
                    float s = rand * 6.283 * 3.0;
                    return vec3(sin(s*2.0 + t*0.05)*260.0, cos(s*3.0 + t*0.06)*200.0, sin(s*5.0 + t*0.035)*150.0) + n * 12.0;
                }

                // 5: Monolith — crystalline rectangular pillar
                if (idx == 5) {
                    float fx = (fract(rand*5.0) - 0.5) * 2.0;
                    float fy = (fract(rand*7.0) - 0.5) * 2.0;
                    float fz = (fract(rand*11.0) - 0.5) * 2.0;
                    float breathe = 1.0 + 0.015 * sin(t * 0.15 + fy * 3.0);
                    return vec3(fx * 80.0, fy * 350.0, fz * 80.0) * breathe;
                }

                // 6: Hollow Shell — particles orbit a hollow sphere
                if (idx == 6) {
                    float shellR = 280.0 + 35.0 * sin(theta * 4.0 + t * 0.07);
                    float orbit = theta + t * 0.025 * (0.7 + rand * 0.6);
                    float p = phi + t * 0.015;
                    return vec3(shellR*sin(p)*cos(orbit), shellR*cos(p), shellR*sin(p)*sin(orbit));
                }

                // 7: Wormhole — curved tube through space
                if (idx == 7) {
                    float along = (rand - 0.5) * 2.0;
                    float tubeR = 55.0 + 40.0 * cos(along * 3.0);
                    float angle = fract(rand*13.0) * 6.283 + t * 0.035;
                    float cx = sin(along*1.5 + t*0.02) * 60.0;
                    float cz = cos(along*1.5 + t*0.02) * 60.0;
                    return vec3(cx + tubeR*cos(angle), along * 320.0, cz + tubeR*sin(angle));
                }

                // 8: Lemniscate — figure-eight in 3D space
                if (idx == 8) {
                    float s = rand * 6.283 + t * 0.025;
                    float scale = 260.0;
                    float denom = 1.0 + sin(s)*sin(s);
                    float x = scale * cos(s) / denom;
                    float y = scale * sin(s) * cos(s) / denom;
                    float z = (fract(rand*9.0) - 0.5) * 80.0;
                    return vec3(x, y, z) + n * 15.0;
                }

                // 9: Hourglass — hyperboloid with narrow waist
                if (idx == 9) {
                    float y = (rand - 0.5) * 500.0;
                    float waist = 30.0 + pow(abs(y)/250.0, 1.6) * 170.0;
                    float angle = fract(rand*13.0) * 6.283 + t * 0.018;
                    float breathe = 1.0 + 0.02 * sin(t*0.12 + y*0.004);
                    return vec3(waist*cos(angle), y, waist*sin(angle)) * breathe;
                }

                // 10: Stellated Star — spikes via golden angle
                if (idx == 10) {
                    float spikeId = floor(rand * 12.0);
                    float ga1 = spikeId * 2.399;
                    float ga2 = acos(1.0 - 2.0*(spikeId + 0.5)/12.0);
                    vec3 spikeDir = vec3(sin(ga2)*cos(ga1), cos(ga2), sin(ga2)*sin(ga1));
                    float along = fract(rand * 12.0);
                    float spikeLen = 100.0 + along * 250.0;
                    float spread = (1.0 - along) * 50.0;
                    float pulse = 1.0 + 0.04 * sin(t*0.12 + spikeId);
                    return spikeDir * spikeLen * pulse + n * spread;
                }

                // 11: Orbital Shells — concentric breathing shells
                if (idx == 11) {
                    float shell = floor(rand * 5.0);
                    float shellR = 80.0 + shell * 60.0 + 8.0*sin(t*0.08 + shell*1.5);
                    float orbit = theta + t * 0.018 * (1.0 + shell*0.2);
                    float p = phi + t * 0.01;
                    return vec3(shellR*sin(p)*cos(orbit), shellR*cos(p), shellR*sin(p)*sin(orbit));
                }

                // 12: Supernova — radial jets
                if (idx == 12) {
                    float jetId = floor(rand * 8.0);
                    float ja1 = jetId * 2.399 + 0.5;
                    float ja2 = acos(1.0 - 2.0*(jetId+0.5)/8.0);
                    vec3 jetDir = vec3(sin(ja2)*cos(ja1), cos(ja2), sin(ja2)*sin(ja1));
                    float along = fract(rand * 8.0);
                    float jetLen = along * 400.0 + 30.0;
                    float spread = (1.0 - along*along) * 20.0;
                    float pulse = 1.0 + 0.035*sin(t*0.1 + jetId*0.8);
                    return jetDir * jetLen * pulse + n * spread;
                }

                // 13: Möbius Strip — single-surface loop
                if (idx == 13) {
                    float u = rand * 6.283;
                    float v = (fract(rand*9.0) - 0.5) * 100.0;
                    float halfU = u*0.5 + t*0.02;
                    float x = (260.0 + v*cos(halfU)) * cos(u + t*0.018);
                    float y = (260.0 + v*cos(halfU)) * sin(u + t*0.018);
                    float z = v * sin(halfU);
                    return vec3(x, z, y);
                }

                // 14: Neural Clusters — drifting connected nodes
                if (idx == 14) {
                    float clusterId = floor(rand * 7.0);
                    vec3 center = vec3(sin(clusterId*3.7)*220.0, cos(clusterId*5.3)*220.0, sin(clusterId*7.1)*220.0);
                    center += vec3(sin(t*0.04+clusterId)*20.0, cos(t*0.03+clusterId*2.0)*20.0, sin(t*0.05+clusterId*3.0)*20.0);
                    return center + n * 50.0 * fract(rand * 7.0);
                }

                return basePos;
            }

            void main() {
                vRandom = aRandom;

                // 1. GPU Morphing between shapes
                vec3 shape1 = getShape(uShape1, position, aRandom);
                vec3 shape2 = getShape(uShape2, position, aRandom);
                vec3 pos = mix(shape1, shape2, uMorphProgression);

                // 2. Scale
                pos *= uScaleMultiplier;

                // 3. Organic breathing — very slow, subtle
                float breath = sin(uTime * 0.25) * 0.015 * (1.0 + uFluidity);
                pos *= (1.0 + breath);

                // 4. Localized skin jolt — gentle
                float distToJolt = length(pos - uJoltPos);
                float joltEffect = smoothstep(120.0, 0.0, distToJolt) * uJoltIntensity;
                vec3 nrm = normalize(pos);
                pos += nrm * sin(distToJolt*0.3 - uTime*15.0) * 12.0 * joltEffect;

                // 5. Scatter
                vec3 scatterP = vec3(noise(pos * 0.01), noise(pos * 0.01+vec3(10.0)), noise(pos * 0.01+vec3(20.0)));
                pos += scatterP * uScatter;

                // 6. Twist
                float twistAngle = length(pos.xy) * 0.002 * uTwist;
                float ts = sin(twistAngle), tc = cos(twistAngle);
                pos.xy = mat2(tc, -ts, ts, tc) * pos.xy;

                // 7. Chaos turbulence — softer
                float nFreq = 0.008 * (1.0 + uChaos * 1.2);
                float nAmp = 180.0 * uChaos;
                vec3 nCoord = vec3(pos.x*nFreq + uTime*0.08, pos.y*nFreq, pos.z*nFreq);
                pos.x += noise(nCoord) * nAmp;
                pos.y += noise(nCoord + vec3(100.0)) * nAmp;
                pos.z += noise(nCoord + vec3(200.0)) * nAmp;

                // 8. Fluidity wave deformation — gentler
                pos.y += sin(pos.x*0.006 + uTime*0.25) * 100.0 * uFluidity;
                pos.z += cos(pos.y*0.006 + uTime*0.25) * 100.0 * uFluidity;

                // 9. Gravity compression + twist — less extreme
                float r = length(pos);
                nrm = normalize(pos);
                pos = mix(pos, nrm * (r*0.2), uGravity * 0.5);
                float gAngle = r * 0.003 * uGravity;
                pos.xz = mat2(cos(gAngle), -sin(gAngle), sin(gAngle), cos(gAngle)) * pos.xz;

                // 10. ALWAYS-PRESENT LIFE NOISE — subtle organic drift
                float lifeAmp = 8.0;
                vec3 lifeCoord = vec3(pos.x*0.003 + uTime*0.04, pos.y*0.003 + uTime*0.025, pos.z*0.003);
                pos += vec3(noise(lifeCoord), noise(lifeCoord+vec3(50.0)), noise(lifeCoord+vec3(100.0))) * lifeAmp;

                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

                // Depth-based sizing — far particles smaller
                float depthFactor = clamp((-mvPosition.z - 50.0) / 600.0, 0.0, 1.0);
                vDepth = depthFactor;

                // Particle Size Variation — mix of fine dust and large bright "stars"
                float sizeVar = 0.8 + pow(aRandom, 4.0) * 4.0;
                gl_PointSize = sizeVar * (uSizeMultiplier / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            uniform vec3 uColorA;
            uniform vec3 uColorB;
            varying float vRandom;
            varying float vDepth;
            void main() {
                float dist = length(gl_PointCoord - vec2(0.5));
                if (dist > 0.5) discard;
                float alpha = smoothstep(0.5, 0.15, dist);

                // Depth-based fade — far particles more transparent
                alpha *= (1.0 - vDepth * 0.3);

                // Base transparency
                alpha *= 0.6;

                vec3 finalColor = mix(uColorA, uColorB, vRandom);
                // Subtle warm shift on distant particles
                finalColor += vec3(0.04, 0.02, -0.01) * vDepth;

                gl_FragColor = vec4(finalColor, alpha);
            }
        `,
        transparent: true,
        blending: THREE.NormalBlending,
        depthWrite: false
    });

    particleSystem = new THREE.Points(geometry, customMaterial);
    scene.add(particleSystem);
    window.addEventListener('resize', onWindowResize);

    // Gentle alien skin jolts at random intervals — very subtle
    setInterval(() => {
        if (!isInterviewing) return;
        if (Math.random() > 0.5) {
            const t = Math.random() * 2 * Math.PI;
            const p = Math.acos(2 * Math.random() - 1);
            customMaterial.uniforms.uJoltPos.value.set(200*Math.sin(p)*Math.cos(t), 200*Math.sin(p)*Math.sin(t), 200*Math.cos(p));
            gsap.fromTo(customMaterial.uniforms.uJoltIntensity, {value:0.3}, {value:0.0, duration:1.5, ease:"power2.out"});
            playJoltThud();
        }
    }, 5000);

    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    customMaterial.uniforms.uTime.value = t;

    // Organic rotation — sine waves with irrational frequencies, never repeats
    particleSystem.rotation.y = Math.sin(t * 0.067) * 0.2 + t * 0.008;
    particleSystem.rotation.x = Math.sin(t * 0.043) * 0.06 + mouseY * 0.015;
    particleSystem.rotation.z = Math.cos(t * 0.037) * 0.08;

    // Mouse parallax on particle system
    particleSystem.position.x += (mouseX * 6 - particleSystem.position.x) * 0.012;
    particleSystem.position.y += (-mouseY * 4 - particleSystem.position.y) * 0.008;

    // Organic camera orbit on art page — camera focuses left (artOffsetX), putting art on the right
    if (isArtRevealed) {
        camera.position.x = artOffsetX + Math.sin(t * 0.025) * 30;
        camera.position.y = Math.sin(t * 0.018) * 15;
        camera.position.z = 400 + Math.cos(t * 0.022) * 25;
        camera.lookAt(artOffsetX, 0, 0);
    }

    renderer.render(scene, camera);
}

// ----------------------------------------------------
// 6. UI REFERENCES
// ----------------------------------------------------
const phaseLanding = document.getElementById('phase-landing');
const phaseInterview = document.getElementById('phase-interview');
const phaseAnalysis = document.getElementById('phase-analysis');
const phaseCanvas = document.getElementById('phase-canvas');
const qText = document.getElementById('questionText');
const optContainer = document.getElementById('optionsContainer');
const terminalText = document.getElementById('terminalText');
const progressBarContainer = document.getElementById('progress-bar-container');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressCounter = document.getElementById('progress-counter');
const btnSound = document.getElementById('btn-sound');
const qNumber = document.getElementById('questionNumber');
const qLine = document.querySelector('.question-line');

// ----------------------------------------------------
// 7. GSAP PHASE TRANSITIONS — smooth, no blur
// ----------------------------------------------------
function transitionPhase(fromEl, toEl, onComplete) {
    const tl = gsap.timeline();
    tl.to(fromEl, {
        opacity: 0, y: -12, duration: 1.0, ease: "power2.in",
        onComplete: () => {
            fromEl.classList.remove('active');
            fromEl.style.pointerEvents = 'none';
            gsap.set(fromEl, { y: 0 });
        }
    });
    tl.fromTo(toEl,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out",
          onStart: () => { toEl.classList.add('active'); toEl.style.pointerEvents = 'auto'; },
          onComplete: onComplete
        }, "-=0.3"
    );
    return tl;
}

// ----------------------------------------------------
// 8. BEGIN LABYRINTH
// ----------------------------------------------------
document.getElementById('btn-begin').addEventListener('click', () => {
    initSound();
    transitionPhase(phaseLanding, phaseInterview);
    isInterviewing = true;
    progressBarContainer.classList.add('visible');
    progressCounter.classList.add('visible');
    btnSound.classList.add('visible');
    gsap.to(camera.position, { x: 0, y: 0, z: 400, duration: 4, ease: "power2.inOut" });
    updateProgress();
    loadQuestion();
});

btnSound.addEventListener('click', () => {
    isMuted = !isMuted;
    btnSound.classList.toggle('muted', isMuted);
    if (masterGain) masterGain.gain.setTargetAtTime(isMuted ? 0 : 1.0, audioCtx.currentTime, 0.3);
});

// ----------------------------------------------------
// 9. QUESTION REACTIONS — gentle, elegant, slow
// ----------------------------------------------------
function playReactionAnimation(type) {
    const u = customMaterial.uniforms;
    if (type === "contract") {
        gsap.to(u.uScaleMultiplier, { value: 0.94, duration: 4.0, yoyo: true, repeat: 1, ease: "sine.inOut" });
    } else if (type === "expand") {
        gsap.to(u.uScaleMultiplier, { value: 1.06, duration: 4.0, yoyo: true, repeat: 1, ease: "sine.inOut" });
    } else if (type === "scatter") {
        gsap.fromTo(u.uScatter, { value: 15.0 }, { value: 0.0, duration: 5.0, ease: "power2.out" });
    } else if (type === "twist") {
        gsap.fromTo(u.uTwist, { value: 0.5 }, { value: 0.0, duration: 4.5, ease: "power2.out" });
    } else if (type === "spike") {
        u.uJoltPos.value.set((Math.random()-0.5)*150, (Math.random()-0.5)*150, (Math.random()-0.5)*150);
        gsap.fromTo(u.uJoltIntensity, { value: 0.4 }, { value: 0.0, duration: 3.0, ease: "power2.out" });
    } else if (type === "flow") {
        gsap.fromTo(u.uChaos, { value: soulState.chaos + 0.15 }, { value: soulState.chaos, duration: 5.0, ease: "sine.inOut" });
    }
}

function updateProgress() {
    progressBarFill.style.width = ((currentQ / questions.length) * 100) + '%';
    progressCounter.textContent = `${String(currentQ + 1).padStart(2, '0')} / ${questions.length}`;
}

// ----------------------------------------------------
// 10. QUESTION LOADING WITH ELEGANT CROSS-FADE
// ----------------------------------------------------
function loadQuestion() {
    if (currentQ >= questions.length) { finishInterview(); return; }
    const q = questions[currentQ];
    updateProgress();

    const tl = gsap.timeline();

    tl.to([qNumber, qLine, qText, optContainer], {
        opacity: 0, y: -8, duration: 0.4, ease: "power2.in",
        onComplete: () => {
            qNumber.textContent = `${String(currentQ + 1).padStart(2, '0')} / ${questions.length}`;
            qText.textContent = q.text;
            optContainer.innerHTML = '';
            q.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'elegant-btn';
                btn.textContent = opt.text;
                btn.onclick = () => handleAnswer(opt);
                optContainer.appendChild(btn);
            });
        }
    });

    tl.fromTo(qNumber, { opacity: 0, y: 5 }, { opacity: 0.5, y: 0, duration: 0.4, ease: "power2.out" });
    tl.fromTo(qLine, { width: 0, opacity: 0 }, { width: 30, opacity: 0.2, duration: 0.5, ease: "power2.out" }, "-=0.3");
    tl.fromTo(qText, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
    tl.fromTo(optContainer, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3");
}

function handleAnswer(opt) {
    playClickTone();

    for (let key in opt.effects) {
        // Reduced from 0.25 to 0.12 so we don't hit the 1.0 ceiling too early, allowing more unique end states
        soulState[key] = Math.max(0, Math.min(1, soulState[key] + opt.effects[key] * 0.12));
    }

    playReactionAnimation(opt.anim);

    const primaryColor = getSoulColor();
    const accentColor = getSoulAccentColor();

    gsap.to(customMaterial.uniforms.uChaos, { value: soulState.chaos, duration: 4.0, ease: "sine.inOut" });
    gsap.to(customMaterial.uniforms.uGravity, { value: soulState.gravity, duration: 4.0, ease: "sine.inOut" });
    gsap.to(customMaterial.uniforms.uFluidity, { value: soulState.fluidity, duration: 4.0, ease: "sine.inOut" });
    gsap.to(customMaterial.uniforms.uColorA.value, { r: primaryColor.r, g: primaryColor.g, b: primaryColor.b, duration: 5, ease: "sine.inOut" });
    gsap.to(customMaterial.uniforms.uColorB.value, { r: accentColor.r, g: accentColor.g, b: accentColor.b, duration: 5, ease: "sine.inOut" });

    // Dynamic question panel border color
    document.querySelector('.question-container').style.borderLeftColor = '#' + accentColor.getHexString();

    updateDrone();

    currentQ++;
    loadQuestion();
}

// ----------------------------------------------------
// 11. DEEP INSIGHT ENGINE
// ----------------------------------------------------
const ART_INSIGHTS = [
    "You begin where all things begin — at the point of pure potential. Your psychology gravitates toward origins, toward the unformed clay before the sculptor's hands. You find comfort not in completion but in the state of becoming. This cell is not simple; it is total. It contains every possible shape within it, just as you contain every possible version of yourself, held in tension.",
    "Your mind moves in loops — not the anxious kind, but the deliberate, reinforcing kind. You revisit ideas, relationships, and beliefs to strengthen them, not because you are stuck, but because you understand that depth comes from repetition. The torus is a shape that has no beginning and no end. Neither do you.",
    "Two forces intertwine within you — the rational and the intuitive, the structured and the wild. They do not compete; they dance. Your decisions are rarely pure logic or pure feeling. They are a braid, each strand reinforcing the other. You are the rare mind that can hold contradiction without needing to resolve it.",
    "You are drawn to centers of gravity. Not because you are passive, but because you understand that the most powerful position is the one everything else orbits around. You accumulate — knowledge, relationships, influence — not aggressively, but inevitably, like matter spiraling toward a star.",
    "Your thoughts do not stay contained. They trail off into tangents, into beauty, into the unexpected. You are the person who follows a thought to its most surprising conclusion. The ribbon is not chaos — it has direction, it has grace. But it refuses to be boxed in.",
    "There is something immovable in you. Not stubbornness, but certainty. You have built an internal structure so solid that external chaos simply breaks against it. The monolith does not need to move. The world moves around it. You know who you are, and that knowing is your greatest power.",
    "You understand absence. While others chase fullness, you recognize that what is missing defines the shape of what remains. Your void is not emptiness — it is architecture. The negative space in your psychology is as deliberate and meaningful as the positive.",
    "You exist between states. Between who you were and who you are becoming. Between certainty and doubt. This is not indecision — it is passage. You are always moving through the narrow waist of transformation, compressed by change, emerging expanded on the other side.",
    "Your mind operates in dialogue. There are at least two voices inside you — not in conflict, but in conversation. One asks, the other answers. One provokes, the other stabilizes. These dual lobes are not a split; they are a collaboration. Your greatest insights come from this internal exchange.",
    "Time moves differently for you. There are moments of extreme compression — where everything narrows to a single point of focus — and moments of vast expansion, where you see the entirety of a situation at once. The hourglass is your rhythm: contract, release, contract, release.",
    "You radiate outward from a stable center. Your edges are sharp — your opinions, your boundaries, your aesthetic sense — but they all emanate from a core of deep self-knowledge. The star does not apologize for its points. Neither do you.",
    "You are comfortable with uncertainty in a way that most people are not. Where others need to collapse possibilities into a single answer, you can hold multiple truths simultaneously. Your orbital shells are not confusion; they are sophisticated tolerance for complexity.",
    "Something has been building inside you for a long time. Pressure, energy, insight — compressed and contained until the moment of release. The supernova is not destruction. It is transformation so rapid and so total that it reshapes everything around it. You are on the edge of that release.",
    "You are endlessly self-referential — not narcissistically, but philosophically. You think about your thinking. You observe your observations. The Möbius strip has only one surface, and so do you: there is no separation between your inner life and your outer expression. What you feel, you become.",
    "Your mind is a network, not a hierarchy. Ideas cluster around each other, forming constellations of meaning that others might not see. You draw connections between disparate things — a piece of music and a mathematical proof, a childhood memory and a political philosophy. These neural clusters are your unique intelligence."
];

const SOUL_SIGNATURES = [
    "You are the silence before the first word is spoken.",
    "You are the orbit that never touches the surface.",
    "You are the tension holding two truths at once.",
    "You are the gravity that bends light around corners.",
    "You are the trailing thought that arrives at dawn.",
    "You are the foundation beneath the foundation.",
    "You are the shape of what was deliberately left empty.",
    "You are the narrowing between two immensities.",
    "You are the echo answering its own question.",
    "You are the pause between the inhale and the exhale.",
    "You are the edge that defines the light.",
    "You are the superposition that refuses to collapse.",
    "You are the pressure that rewrites the equation.",
    "You are the surface that cannot find its other side.",
    "You are the thread connecting stars that no one else can see."
];

// ----------------------------------------------------
// 12. FINISH INTERVIEW
// ----------------------------------------------------
async function finishInterview() {
    isInterviewing = false;

    progressBarFill.style.width = '100%';
    setTimeout(() => {
        progressBarContainer.classList.remove('visible');
        progressCounter.classList.remove('visible');
    }, 1500);

    transitionPhase(phaseInterview, phaseAnalysis);

    // Shift camera focus to the left for desktop, keep centered and top-aligned for mobile
    artOffsetX = isMobile ? 0 : -220;
    const targetY = isMobile ? 120 : 0;
    const targetZ = isMobile ? 650 : 400;
    gsap.to(camera.position, { x: artOffsetX, y: targetY, z: targetZ, duration: 6, ease: "power3.inOut" });

    const artIndex = getArtIndex();

    // GPU Morph — slow and elegant
    customMaterial.uniforms.uShape2.value = artIndex;
    gsap.to(customMaterial.uniforms.uMorphProgression, { value: 1.0, duration: 8.0, ease: "power2.inOut" });

    playRevealCrescendo();

    const analysisLines = [
        `> Dimensional vector mapping complete.`,
        `> Chaos Quotient ............ [${(soulState.chaos * 100).toFixed(1)}%]`,
        `> Architectural Gravity ..... [${(soulState.gravity * 100).toFixed(1)}%]`,
        `> Fluid Resonance .......... [${(soulState.fluidity * 100).toFixed(1)}%]`,
        `> Luminance Index .......... [${(soulState.luminance * 100).toFixed(1)}%]`,
        `> Harmonic Resonance ....... [${(soulState.resonance * 100).toFixed(1)}%]`,
        `> Soul signature locked.`,
        `> Morphing into ${ART_NAMES[artIndex]}...`
    ];

    let fullText = '';
    for (let i = 0; i < analysisLines.length; i++) {
        await typeLine(analysisLines[i]);
        fullText += analysisLines[i] + '<br><br>';
        terminalText.innerHTML = fullText;
    }

    setTimeout(() => {
        transitionPhase(phaseAnalysis, phaseCanvas, () => {
            // Text fades in AFTER art is fully revealed
            const overlay = document.querySelector('.canvas-overlay');
            gsap.fromTo(overlay, { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 2.0, delay: 0.8, ease: "power2.out" });
        });

        document.getElementById('artTitle').textContent = ART_NAMES[artIndex];
        document.getElementById('artDescription').textContent = ART_SUBTITLES[artIndex];

        const insightText = ART_INSIGHTS[artIndex];
        const insightContainer = document.getElementById('artInsight');
        insightContainer.innerHTML = '';
        insightText.split(' ').forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.className = 'word-anim';
            span.style.animationDelay = `${1.8 + index * 0.06}s`;
            insightContainer.appendChild(span);
        });

        const sigEl = document.getElementById('soulSignature');
        sigEl.textContent = `"${SOUL_SIGNATURES[artIndex]}"`;
        gsap.to(sigEl, { opacity: 0.9, duration: 2, delay: 1.8 + insightText.split(' ').length * 0.06 + 1.5, ease: "power2.out" });

        isArtRevealed = true;

    }, 2500);
}

function typeLine(text) {
    return new Promise(resolve => {
        let i = 0;
        let span = document.createElement('span');
        terminalText.appendChild(span);
        let interval = setInterval(() => {
            span.textContent += text.charAt(i);
            i++;
            if (i >= text.length) { clearInterval(interval); setTimeout(resolve, 400); }
        }, 18);
    });
}

// ----------------------------------------------------
// 13. SHARE / EXPORT (2x)
// ----------------------------------------------------
document.getElementById('btn-share').addEventListener('click', () => {
    const scale = 2;
    const w = window.innerWidth, h = window.innerHeight;
    const tc = document.createElement('canvas');
    tc.width = w * scale; tc.height = h * scale;
    const ctx = tc.getContext('2d');
    ctx.scale(scale, scale);

    ctx.fillStyle = '#f4f4f0';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(renderer.domElement, 0, 0, w, h);

    ctx.strokeStyle = 'rgba(26,26,26,0.1)';
    ctx.lineWidth = 1;
    ctx.strokeRect(30, 30, w - 60, h - 60);

    ctx.fillStyle = '#1a1a1a';
    ctx.font = '300 44px "Cormorant Garamond", serif';
    ctx.fillText(document.getElementById('artTitle').innerText, 60, h - 280);

    ctx.fillStyle = '#666';
    ctx.font = '300 13px "Inter", sans-serif';
    ctx.fillText(document.getElementById('artDescription').innerText.toUpperCase(), 60, h - 245);

    ctx.fillStyle = '#1a1a1a';
    ctx.font = 'italic 16px "Cormorant Garamond", serif';
    const words = document.getElementById('artInsight').innerText.split(' ');
    let line = '', y = h - 200;
    for (let i = 0; i < words.length; i++) {
        let test = line + words[i] + ' ';
        if (ctx.measureText(test).width > 480 && i > 0) {
            ctx.fillText(line, 60, y); line = words[i] + ' '; y += 24;
        } else { line = test; }
    }
    ctx.fillText(line, 60, y);

    const sig = document.getElementById('soulSignature').innerText;
    if (sig) { ctx.font = 'italic 18px "Cormorant Garamond", serif'; ctx.fillStyle = '#333'; ctx.fillText(sig, 60, y + 40); }

    ctx.fillStyle = 'rgba(26,26,26,0.15)';
    ctx.font = '300 10px "Inter", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('Soul Canvas — ' + new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), w - 60, h - 40);

    const link = document.createElement('a');
    link.download = 'SoulCanvas_Masterpiece.png';
    link.href = tc.toDataURL('image/png');
    link.click();
});

// ----------------------------------------------------
// 14. RESTART
// ----------------------------------------------------
document.getElementById('btn-restart').addEventListener('click', () => {
    // Reset state
    soulState = { chaos: 0.0, gravity: 0.0, fluidity: 0.0, luminance: 0.5, resonance: 0.5 };
    currentQ = 0;
    isArtRevealed = false;
    isInterviewing = true;

    // Reset uniforms
    customMaterial.uniforms.uChaos.value = 0;
    customMaterial.uniforms.uGravity.value = 0;
    customMaterial.uniforms.uFluidity.value = 0;
    customMaterial.uniforms.uShape1.value = 0;
    customMaterial.uniforms.uShape2.value = 0;
    customMaterial.uniforms.uMorphProgression.value = 0;
    customMaterial.uniforms.uScaleMultiplier.value = 1;
    customMaterial.uniforms.uColorA.value.set(0x3a3530);
    customMaterial.uniforms.uColorB.value.set(0xc4a035);

    // Reset terminal
    terminalText.innerHTML = '';

    // Hide overlay
    gsap.to(document.querySelector('.canvas-overlay'), { opacity: 0, duration: 0.5 });
    document.getElementById('soulSignature').style.opacity = 0;

    // Transition back to interview
    transitionPhase(phaseCanvas, phaseInterview);
    progressBarContainer.classList.add('visible');
    progressCounter.classList.add('visible');
    progressBarFill.style.width = '0%';

    artOffsetX = 0;
    const startZ = isMobile ? 550 : 400;
    gsap.to(camera.position, { x: 0, y: 0, z: startZ, duration: 4, ease: "power2.inOut" });

    updateDrone();
    updateProgress();
    loadQuestion();
});

// ----------------------------------------------------
// 15. INIT
// ----------------------------------------------------
initThree();
