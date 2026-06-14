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
            { text: "The exits", effects: { gravity: 0.6, chaos: -0.3, fluidity: -0.2, luminance: -0.3 }, anim: "contract" },
            { text: "The light", effects: { luminance: 0.8, fluidity: 0.3, resonance: 0.2 }, anim: "expand" },
            { text: "The smell", effects: { chaos: 0.5, fluidity: 0.6, resonance: 0.3 }, anim: "flow" }
        ]
    },
    {
        text: "A stranger tells you something true about yourself that you've never said aloud. You feel…",
        options: [
            { text: "Exposed", effects: { gravity: 0.7, chaos: 0.3, luminance: -0.4 }, anim: "contract" },
            { text: "Understood", effects: { resonance: 0.8, fluidity: 0.5, luminance: 0.3 }, anim: "expand" },
            { text: "Suspicious", effects: { chaos: -0.5, gravity: 0.8, fluidity: -0.3, luminance: -0.4, resonance: -0.3 }, anim: "twist" }
        ]
    },
    {
        text: "When you lie awake at 3 AM, your mind is most likely…",
        options: [
            { text: "Replaying a conversation", effects: { resonance: 0.6, gravity: 0.5, chaos: 0.2, luminance: -0.3 }, anim: "twist" },
            { text: "Building something", effects: { gravity: 0.4, fluidity: -0.3, luminance: 0.5 }, anim: "expand" },
            { text: "Drifting in images", effects: { fluidity: 0.8, chaos: 0.3, luminance: 0.3 }, anim: "flow" },
            { text: "Completely still", effects: { resonance: -0.3, chaos: -0.6, gravity: 0.2 }, anim: "contract" }
        ]
    },
    {
        text: "Which would you keep, if you could only choose one?",
        options: [
            { text: "A key to a door you haven't found", effects: { chaos: 0.5, resonance: 0.5, luminance: 0.4 }, anim: "expand" },
            { text: "A letter you'll never send", effects: { gravity: 0.6, resonance: 0.7, fluidity: -0.3, luminance: -0.4 }, anim: "contract" },
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
            { text: "Fix it so no one will ever notice", effects: { gravity: 0.8, chaos: -0.5, luminance: -0.4, resonance: -0.3 }, anim: "twist" }
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
            { text: "Withdraw quietly", effects: { gravity: 0.6, fluidity: -0.4, chaos: -0.3, luminance: -0.5, resonance: -0.4 }, anim: "contract" },
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
            { text: "Roots", effects: { gravity: 0.9, fluidity: -0.3, resonance: 0.4, luminance: -0.3 }, anim: "contract" }
        ]
    },
    {
        text: "You're given absolute power for one day. You use it to…",
        options: [
            { text: "Restructure everything", effects: { gravity: 0.9, chaos: -0.5, fluidity: -0.4, luminance: -0.3, resonance: -0.3 }, anim: "twist" },
            { text: "Dissolve all boundaries", effects: { chaos: 0.8, fluidity: 0.9, luminance: 0.5 }, anim: "scatter" },
            { text: "Observe without intervening", effects: { resonance: 0.7, fluidity: 0.3, luminance: 0.3 }, anim: "flow" }
        ]
    },
    {
        text: "What frightens you more?",
        options: [
            { text: "That nothing matters", effects: { chaos: 0.6, luminance: -0.5, resonance: -0.3 }, anim: "scatter" },
            { text: "That everything does", effects: { gravity: 0.7, resonance: 0.6, luminance: 0.3 }, anim: "contract" }
        ]
    },
    {
        text: "What survives in you after everything else is stripped away?",
        options: [
            { text: "A single, stubborn certainty", effects: { gravity: 0.8, chaos: -0.4, resonance: 0.4 }, anim: "contract" },
            { text: "A question I still can't answer", effects: { resonance: 0.7, chaos: 0.4, gravity: -0.2 }, anim: "twist" },
            { text: "The ability to start over", effects: { fluidity: 0.7, luminance: 0.5, chaos: 0.3 }, anim: "expand" },
            { text: "Nothing — and that is freeing", effects: { chaos: 0.6, gravity: -0.5, luminance: -0.3 }, anim: "scatter" }
        ]
    },
    {
        text: "You are handed a blank page and unlimited time. You…",
        options: [
            { text: "Fill it edge to edge", effects: { chaos: 0.7, fluidity: 0.6, luminance: 0.4 }, anim: "scatter" },
            { text: "Write one perfect line", effects: { gravity: 0.6, resonance: 0.6, chaos: -0.4 }, anim: "contract" },
            { text: "Leave it blank, on purpose", effects: { resonance: 0.5, chaos: -0.6, luminance: 0.2 }, anim: "flow" },
            { text: "Fold it into something else", effects: { fluidity: 0.7, chaos: 0.3, gravity: 0.2 }, anim: "twist" }
        ]
    },
    {
        text: "Which silence do you trust most?",
        options: [
            { text: "The silence after a storm", effects: { fluidity: 0.6, luminance: 0.4, chaos: -0.3 }, anim: "flow" },
            { text: "The silence before a decision", effects: { gravity: 0.7, resonance: 0.5, chaos: -0.3 }, anim: "contract" },
            { text: "The silence between two who understand each other", effects: { resonance: 0.8, luminance: 0.4, fluidity: 0.3 }, anim: "expand" }
        ]
    },
    {
        text: "Something in you wants out. It is most like…",
        options: [
            { text: "A held breath", effects: { gravity: 0.6, chaos: 0.3, fluidity: -0.2 }, anim: "contract" },
            { text: "A struck match", effects: { chaos: 0.8, luminance: 0.7 }, anim: "spike" },
            { text: "A tide going out", effects: { fluidity: 0.8, gravity: -0.3 }, anim: "flow" },
            { text: "A held note finally let go", effects: { resonance: 0.7, luminance: 0.5, fluidity: 0.4 }, anim: "expand" }
        ]
    },
    {
        text: "When the world speeds up, you…",
        options: [
            { text: "Speed up with it, gladly", effects: { chaos: 0.7, fluidity: 0.5, luminance: 0.3 }, anim: "scatter" },
            { text: "Plant your feet and slow down", effects: { gravity: 0.8, chaos: -0.5 }, anim: "contract" },
            { text: "Step outside of time entirely", effects: { resonance: 0.6, fluidity: 0.4, luminance: 0.3 }, anim: "flow" }
        ]
    },
    {
        text: "What does your darkness look like?",
        options: [
            { text: "A locked room", effects: { gravity: 0.7, luminance: -0.6, fluidity: -0.3 }, anim: "contract" },
            { text: "Deep water", effects: { fluidity: 0.8, luminance: -0.5, chaos: 0.3 }, anim: "flow" },
            { text: "Static and noise", effects: { chaos: 0.8, luminance: -0.4, resonance: -0.3 }, anim: "scatter" },
            { text: "I don't look — I keep moving", effects: { gravity: 0.4, chaos: 0.3, resonance: -0.4 }, anim: "twist" }
        ]
    },
    {
        text: "You feel most alive when you are…",
        options: [
            { text: "Building toward something certain", effects: { gravity: 0.7, luminance: 0.5, chaos: -0.3 }, anim: "expand" },
            { text: "Lost in something larger than yourself", effects: { fluidity: 0.8, resonance: 0.6, luminance: 0.5 }, anim: "flow" },
            { text: "On the edge of losing control", effects: { chaos: 0.9, luminance: 0.6 }, anim: "spike" },
            { text: "Perfectly, completely still", effects: { resonance: 0.6, chaos: -0.7, gravity: 0.3 }, anim: "contract" }
        ]
    },
    {
        text: "A truth arrives. How does it reach you?",
        options: [
            { text: "Like a slow dawn", effects: { luminance: 0.7, fluidity: 0.4, resonance: 0.4 }, anim: "expand" },
            { text: "Like a crack of thunder", effects: { chaos: 0.7, luminance: 0.6, resonance: 0.3 }, anim: "spike" },
            { text: "Like a weight settling", effects: { gravity: 0.8, resonance: 0.5, chaos: -0.3 }, anim: "contract" }
        ]
    },
    {
        text: "Which would you rather be?",
        options: [
            { text: "A river", effects: { fluidity: 0.9, chaos: 0.3 }, anim: "flow" },
            { text: "A mountain", effects: { gravity: 0.9, chaos: -0.4 }, anim: "contract" },
            { text: "A fire", effects: { chaos: 0.7, luminance: 0.8 }, anim: "spike" },
            { text: "A field of light", effects: { luminance: 0.8, resonance: 0.5, fluidity: 0.3 }, anim: "expand" }
        ]
    },
    {
        text: "What do you do with the unbearable?",
        options: [
            { text: "Hold it, quietly, alone", effects: { gravity: 0.7, resonance: 0.6, luminance: -0.3 }, anim: "contract" },
            { text: "Transform it into something to share", effects: { resonance: 0.7, fluidity: 0.5, luminance: 0.4 }, anim: "expand" },
            { text: "Let it move through me and out", effects: { fluidity: 0.8, chaos: 0.3 }, anim: "flow" }
        ]
    },
    {
        text: "Your attention is a…",
        options: [
            { text: "Spotlight — narrow and intense", effects: { gravity: 0.6, luminance: 0.5, chaos: -0.3 }, anim: "contract" },
            { text: "Floodlight — everywhere at once", effects: { chaos: 0.6, fluidity: 0.6, luminance: 0.4 }, anim: "scatter" },
            { text: "Candle — small, steady, warm", effects: { resonance: 0.6, luminance: 0.4, chaos: -0.3 }, anim: "flow" }
        ]
    },
    {
        text: "At the very end, what would you want to have been?",
        options: [
            { text: "Unforgettable", effects: { chaos: 0.5, luminance: 0.7, resonance: 0.5 }, anim: "spike" },
            { text: "Unshakable", effects: { gravity: 0.9, resonance: 0.4, chaos: -0.3 }, anim: "contract" },
            { text: "Unbounded", effects: { fluidity: 0.8, chaos: 0.5, luminance: 0.4 }, anim: "scatter" },
            { text: "Understood", effects: { resonance: 0.9, luminance: 0.4, fluidity: 0.3 }, anim: "expand" }
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
    "The Supernova", "The Möbius Strip", "The Neural Clusters",
    "The Nebula Cloud", "The Accretion Disk", "The Barred Galaxy",
    "The Protoplanetary Disk", "The Cosmic Web", "The Aurora Veil",
    // GAIA · Flora
    "The World Tree", "The Lotus", "The Koru", "The Dandelion", "The Vine",
    // GAIA · Fauna
    "The Jellyfish", "The Murmuration", "The Butterfly", "The Nautilus", "The Coral", "The Peacock",
    // GAIA · Elements
    "The Flame", "The Maelstrom", "The Cresting Wave", "The Lightning", "The Tornado",
    // GAIA · Structure
    "The Snowflake", "The Geode", "The Mandala", "The Labyrinth", "The Cathedral",
    // GAIA · Soul & Emergence
    "The Lorenz Attractor", "The Aizawa Attractor", "The Phoenix", "The Eye", "The Heart"
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
    "Clustered nodes of meaning connected by invisible threads.",
    "The formless place where everything new is born.",
    "All things drawn inward, compressed, made brilliant by surrender.",
    "Structure imposed across chaos — the spine that holds the spiral together.",
    "The patience of formation — rings of matter waiting to become worlds.",
    "Everything connected by threads too vast to see.",
    "Emotion made visible — the sky charged with what cannot be spoken.",
    // GAIA · Flora
    "Everything you are grew from a single seed.",
    "You open only when the water is still.",
    "Becoming, forever mid-unfurl.",
    "You hold on loosely, and let the wind decide.",
    "You climb by holding to what is near.",
    // GAIA · Fauna
    "You move by surrender, not by force.",
    "A thousand small decisions, one shape.",
    "You became by dissolving first.",
    "You grow by adding rooms, never tearing down.",
    "You build slowly, together, in the dark.",
    "You were never meant to be subtle.",
    // GAIA · Elements
    "You are warmest where you are least solid.",
    "Everything you release, you release inward.",
    "You gather for a long time before you break.",
    "Your clarity arrives all at once, or not at all.",
    "You are calm at the center of your own chaos.",
    // GAIA · Structure
    "No one has ever been made the way you were.",
    "Your richest self is the one you keep hidden.",
    "At your center, everything agrees.",
    "The only way out was always further in.",
    "You build upward, to hold something larger than yourself.",
    // GAIA · Soul & Emergence
    "Tiny beginnings, unrepeatable lives.",
    "You orbit a center you cannot name.",
    "You have ended before, and chosen to begin.",
    "You are the one part of you that watches all the rest.",
    "You keep time for everything you feel."
];

const ART_AFFINITIES = [
    [0.30, 0.88, 0.61, 0.96, 0.99],  // 0: Living Cell
    [0.26, 0.87, 0.75, 0.61, 0.97],  // 1: Golden Torus
    [0.35, 0.75, 0.79, 0.95, 0.99],  // 2: Double Helix
    [0.25, 0.79, 0.44, 0.73, 0.99],  // 3: Spiral Galaxy
    [0.54, 0.59, 0.90, 0.95, 0.99],  // 4: Lissajous Ribbon
    [0.09, 0.98, 0.37, 0.72, 0.99],  // 5: Monolith
    [0.30, 0.71, 0.65, 0.62, 0.99],  // 6: Hollow Shell
    [0.38, 0.66, 0.48, 0.96, 1.00],  // 7: Wormhole
    [0.53, 0.84, 0.55, 0.83, 0.98],  // 8: Lemniscate
    [0.13, 0.96, 0.29, 0.91, 1.00],  // 9: Hourglass
    [0.44, 0.86, 0.34, 0.81, 0.98],  // 10: Stellated Star
    [0.64, 0.69, 0.44, 0.96, 0.99],  // 11: Orbital Shells
    [0.84, 0.48, 0.64, 0.96, 0.99],  // 12: Supernova
    [0.45, 0.66, 0.53, 0.76, 0.99],  // 13: Möbius Strip
    [0.42, 0.85, 0.37, 0.97, 0.99],  // 14: Neural Clusters
    [0.38, 0.55, 0.70, 0.97, 1.00],  // 15: Nebula Cloud
    [0.28, 0.93, 0.50, 0.52, 0.95],  // 16: Accretion Disk
    [0.13, 0.93, 0.56, 0.70, 0.99],  // 17: Barred Galaxy
    [0.08, 0.96, 0.50, 0.51, 0.99],  // 18: Protoplanetary Disk
    [0.47, 0.73, 0.61, 0.97, 0.99],  // 19: Cosmic Web
    [0.79, 0.37, 0.92, 0.95, 0.99],  // 20: Aurora Veil
    // GAIA · Flora
    [0.13, 0.86, 0.71, 0.83, 0.99],  // 21: World Tree
    [0.54, 0.72, 0.70, 0.60, 0.97],  // 22: Lotus
    [0.81, 0.53, 0.83, 0.77, 0.92],  // 23: Koru
    [0.29, 0.55, 0.91, 0.93, 1.00],  // 24: Dandelion
    [0.20, 0.70, 0.83, 0.78, 1.00],  // 25: Vine
    // GAIA · Fauna
    [0.50, 0.38, 0.93, 0.95, 1.00],  // 26: Jellyfish
    [0.38, 0.64, 0.91, 0.67, 0.98],  // 27: Murmuration
    [0.70, 0.68, 0.51, 0.76, 0.97],  // 28: Butterfly
    [0.35, 0.93, 0.56, 0.72, 0.98],  // 29: Nautilus
    [0.32, 0.77, 0.61, 0.82, 0.99],  // 30: Coral
    [0.11, 0.99, 0.24, 0.54, 0.98],  // 31: Peacock
    // GAIA · Elements
    [0.61, 0.44, 0.74, 0.97, 1.00],  // 32: Flame
    [0.47, 0.82, 0.63, 0.70, 0.76],  // 33: Maelstrom
    [0.57, 0.52, 0.93, 0.74, 0.98],  // 34: Cresting Wave
    [0.66, 0.66, 0.70, 0.96, 0.98],  // 35: Lightning
    [0.55, 0.54, 0.55, 0.96, 1.00],  // 36: Tornado
    // GAIA · Structure
    [0.30, 0.97, 0.31, 0.68, 0.98],  // 37: Snowflake
    [0.19, 0.77, 0.46, 0.95, 1.00],  // 38: Geode
    [0.50, 0.84, 0.44, 0.61, 0.97],  // 39: Mandala
    [0.28, 0.95, 0.43, 0.89, 0.99],  // 40: Labyrinth
    [0.09, 0.93, 0.53, 0.91, 1.00],  // 41: Cathedral
    // GAIA · Soul & Emergence
    [0.63, 0.55, 0.69, 0.77, 0.98],  // 42: Lorenz Attractor
    [0.48, 0.75, 0.76, 0.80, 0.98],  // 43: Aizawa Attractor
    [0.41, 0.56, 0.74, 0.79, 0.99],  // 44: Phoenix
    [0.18, 0.67, 0.67, 0.97, 1.00],  // 45: Eye
    [0.18, 0.65, 0.60, 0.78, 1.00],  // 46: Heart
];

// Per-form fill scale at reveal — normalizes apparent size so each form fills the
// canvas. Flat/disk forms scale up; tall forms stay ~1.0 to avoid clipping height.
const ART_FILL = [
    1.10, // 0  Living Cell
    1.20, // 1  Golden Torus
    1.00, // 2  Double Helix (tall)
    1.15, // 3  Spiral Galaxy
    1.15, // 4  Lissajous Ribbon
    1.00, // 5  Monolith (tall)
    1.10, // 6  Hollow Shell
    1.00, // 7  Wormhole (tall)
    1.25, // 8  Lemniscate (flat)
    1.00, // 9  Hourglass (tall)
    1.15, // 10 Stellated Star
    1.20, // 11 Orbital Shells
    1.15, // 12 Supernova
    1.20, // 13 Möbius Strip (flat)
    1.15, // 14 Neural Clusters
    1.15, // 15 Nebula Cloud
    1.20, // 16 Accretion Disk
    1.20, // 17 Barred Galaxy
    1.25, // 18 Protoplanetary Disk
    1.05, // 19 Cosmic Web
    1.00, // 20 Aurora Veil (tall)
    // GAIA · Flora
    1.00, // 21 World Tree (tall)
    1.20, // 22 Lotus
    1.15, // 23 Koru
    1.10, // 24 Dandelion
    1.00, // 25 Vine (tall)
    // GAIA · Fauna
    1.00, // 26 Jellyfish (tall)
    1.05, // 27 Murmuration
    1.15, // 28 Butterfly (wide)
    1.15, // 29 Nautilus
    1.10, // 30 Coral
    1.10, // 31 Peacock
    // GAIA · Elements
    1.00, // 32 Flame (tall)
    1.15, // 33 Maelstrom
    1.10, // 34 Cresting Wave
    1.00, // 35 Lightning (tall)
    1.00, // 36 Tornado (tall)
    // GAIA · Structure
    1.15, // 37 Snowflake (flat)
    1.10, // 38 Geode
    1.20, // 39 Mandala (flat)
    1.15, // 40 Labyrinth (flat)
    1.00, // 41 Cathedral (tall)
    // GAIA · Soul & Emergence
    1.10, // 42 Lorenz Attractor
    1.10, // 43 Aizawa Attractor
    1.05, // 44 Phoenix
    1.20, // 45 Eye (flat)
    1.10, // 46 Heart
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
    const scatter = new Float32Array(PARTICLE_COUNT); // second per-particle random for the new cosmic forms

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const r = 200 * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
        randoms[i] = Math.random();
        scatter[i] = Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
    geometry.setAttribute('aScatter', new THREE.BufferAttribute(scatter, 1));

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
            uSizeMultiplier: { value: isMobile ? 900.0 : 350.0 },
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
            attribute float aScatter;
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

            // Tilt a disk-plane point about the X axis (for oblique disks)
            vec3 inclineDisk(vec3 p, float a) {
                float c = cos(a), s = sin(a);
                return vec3(p.x, p.y*c - p.z*s, p.y*s + p.z*c);
            }

            // --- 21 Bespoke Living Art Forms — volumetric, normalized scale ---
            vec3 getShape(int idx, vec3 basePos, float rand) {
                vec3 n = normalize(basePos);
                float theta = atan(n.z, n.x);
                float phi = asin(n.y);
                float r = length(basePos);
                float t = uTime;
                // Two independent per-particle randoms -> real 3D volume (not 1D wires)
                float r1 = aRandom, r2 = aScatter;
                vec3 rv  = hash(vec3(r1*167.0, r2*97.0, 23.0));   // [-1,1]^3
                vec3 rv2 = hash(vec3(r2*131.0, r1*61.0, 7.0));    // [-1,1]^3
                float ra = rv.x*0.5+0.5, rb = rv.y*0.5+0.5, rc = rv.z*0.5+0.5;

                // 0: Living Cell — organic volumetric sphere
                if (idx == 0) {
                    float surface = 235.0 + 55.0 * noise(n * 1.8 + t * 0.07);
                    return n * surface * (0.86 + 0.14 * rc);
                }

                // 1: Golden Torus — solid donut, near face-on so the ring hole is clear
                if (idx == 1) {
                    float a = ra * 6.2831 + t * 0.04;
                    float b = rb * 6.2831;
                    float R = 200.0;
                    float rt = 66.0 * sqrt(rc);
                    vec3 p = vec3((R + rt*cos(b))*cos(a), rt*sin(b), (R + rt*cos(b))*sin(a));
                    return inclineDisk(p, 1.45);
                }

                // 2: Double Helix — two solid intertwined strands
                if (idx == 2) {
                    float along = ra;
                    float strand = step(0.5, rb);
                    float yy = (along - 0.5) * 470.0;
                    float ang = along * 9.0 + t * 0.06 + strand * 3.14159;
                    float helR = 95.0;
                    vec3 c = vec3(cos(ang)*helR, yy, sin(ang)*helR);
                    return c + rv2 * 17.0;
                }

                // 3: Spiral Galaxy — dense tilted spiral disk
                if (idx == 3) {
                    float radius = 32.0 + pow(ra, 0.8) * 285.0;
                    float ph = rb * 6.2831;
                    float armPhase = ph * 2.0 - log(radius / 32.0) * 4.4;
                    ph -= sin(armPhase) * 0.18;
                    float ang = ph + t * 0.02;
                    float thick = mix(38.0, 8.0, clamp(radius / 200.0, 0.0, 1.0));
                    vec3 p = vec3(radius*cos(ang), (rc - 0.5) * thick, radius*sin(ang));
                    return inclineDisk(p, 0.55);
                }

                // 4: Lissajous Ribbon — thick flowing 3D ribbon
                if (idx == 4) {
                    float s = ra * 6.283 * 2.0;
                    vec3 c = vec3(sin(s*2.0 + t*0.05)*235.0, cos(s*3.0 + t*0.06)*180.0, sin(s*5.0 + t*0.035)*150.0);
                    return c + rv2 * 24.0;
                }

                // 5: Monolith — solid pillar with a living traveling shimmer
                if (idx == 5) {
                    vec3 box = vec3((ra - 0.5) * 130.0, (rb - 0.5) * 430.0, (rc - 0.5) * 130.0);
                    float wave = sin(box.y * 0.022 - t * 0.9);   // pulse travels up the pillar
                    box.x *= 1.0 + wave * 0.06;
                    box.z *= 1.0 + wave * 0.06;
                    box.x += box.y * sin(t * 0.25) * 0.05;       // slow sway
                    return box;
                }

                // 6: Hollow Shell — gyroscopic cage of great-circle rings (clearly hollow)
                if (idx == 6) {
                    float R = 265.0;
                    float ring = floor(ra * 5.0);                 // 5 rings, each on its own plane
                    float ang = rb * 6.2831 + t * 0.02;
                    vec3 base = vec3(cos(ang) * R, sin(ang) * R, 0.0);
                    float ax = ring * 1.05, az = ring * 0.62;
                    base = vec3(base.x, base.y*cos(ax) - base.z*sin(ax), base.y*sin(ax) + base.z*cos(ax));
                    base = vec3(base.x*cos(az) - base.y*sin(az), base.x*sin(az) + base.y*cos(az), base.z);
                    return base + rv2 * 7.0;
                }

                // 7: Wormhole — flared funnel tunnel with a narrow throat
                if (idx == 7) {
                    float along = ra;
                    float prof = abs(along - 0.5) * 2.0;
                    float tubeR = 38.0 + pow(prof, 1.6) * 215.0;
                    float ang = rb * 6.2831 + along * 6.0 + t * 0.05;
                    float yy = (along - 0.5) * 430.0;
                    vec3 p = vec3(tubeR*cos(ang), yy, tubeR*sin(ang));
                    p += rv2 * (4.0 + prof * 9.0);
                    return inclineDisk(p, 0.95);
                }

                // 8: Lemniscate — thick figure-eight tube
                if (idx == 8) {
                    float s = ra * 6.283 + t * 0.025;
                    float denom = 1.0 + sin(s)*sin(s);
                    vec3 c = vec3(250.0*cos(s)/denom, 250.0*sin(s)*cos(s)/denom, 0.0);
                    return c + rv2 * 30.0;
                }

                // 9: Hourglass — solid hyperboloid of revolution
                if (idx == 9) {
                    float y = (ra - 0.5) * 470.0;
                    float waist = 35.0 + pow(abs(y)/235.0, 1.7) * 155.0;
                    float angle = rb * 6.283 + t * 0.018;
                    float rr = waist * (0.5 + 0.5 * rc);
                    return vec3(rr*cos(angle), y, rr*sin(angle)) * (1.0 + 0.02*sin(t*0.12 + y*0.004));
                }

                // 10: Stellated Star — solid faceted star: bold points around a dense core
                if (idx == 10) {
                    if (rc < 0.28) { return n * (55.0 + 55.0 * (rc / 0.28)) * (0.9 + 0.1 * ra); } // solid core body
                    float spikeId = floor(ra * 10.0);            // 10 bold points
                    float ga1 = spikeId * 2.399;
                    float ga2 = acos(1.0 - 2.0*(spikeId + 0.5)/10.0);
                    vec3 dir = vec3(sin(ga2)*cos(ga1), cos(ga2), sin(ga2)*sin(ga1));
                    float along = rb;
                    float len = 70.0 + along * 250.0;
                    float pulse = 1.0 + 0.04 * sin(t*0.12 + spikeId);
                    return dir * len * pulse + rv2 * (1.0 - along) * 62.0;  // fat base, sharp tip
                }

                // 11: Orbital Shells — nested orbital rings on varied planes
                if (idx == 11) {
                    float shell = floor(ra * 5.0);
                    float R = 80.0 + shell * 52.0;
                    float ang = rb * 6.2831 + t * 0.025 * (1.0 + shell * 0.3);
                    float tx = shell * 1.05, tz = shell * 0.7;
                    vec3 p = vec3(R*cos(ang), 0.0, R*sin(ang));
                    p = vec3(p.x, p.y*cos(tx) - p.z*sin(tx), p.y*sin(tx) + p.z*cos(tx));
                    p = vec3(p.x*cos(tz) - p.y*sin(tz), p.x*sin(tz) + p.y*cos(tz), p.z);
                    return p + rv2 * 9.0;
                }

                // 12: Supernova — radial jets bursting outward
                if (idx == 12) {
                    float jetId = floor(ra * 40.0);
                    float ja1 = jetId * 2.399 + 0.5;
                    float ja2 = acos(1.0 - 2.0*(jetId+0.5)/40.0);
                    vec3 dir = vec3(sin(ja2)*cos(ja1), cos(ja2), sin(ja2)*sin(ja1));
                    float along = rb;
                    float len = along * 300.0 + 25.0;
                    float pulse = 1.0 + 0.035*sin(t*0.1 + jetId*0.8);
                    return dir * len * pulse + rv2 * (1.0 - along*along) * 28.0;
                }

                // 13: Möbius Strip — wide single-surface band with a clear half-twist
                if (idx == 13) {
                    float u = ra * 6.283;
                    float v = (rb - 0.5) * 190.0;
                    float halfU = u*0.5 + t*0.015;
                    float R = 170.0;
                    float x = (R + v*cos(halfU)) * cos(u);
                    float y = (R + v*cos(halfU)) * sin(u);
                    float z = v * sin(halfU);
                    return inclineDisk(vec3(x, z, y), 0.62) + rv2 * 4.0;
                }

                // 14: Neural Clusters — compact, brain-like sphere of soft nodes + short links
                if (idx == 14) {
                    float cId = floor(ra * 10.0);
                    float gy = acos(1.0 - 2.0*(cId+0.5)/10.0), gx = cId * 2.399;
                    vec3 c1 = vec3(sin(gy)*cos(gx), cos(gy), sin(gy)*sin(gx)) * 150.0;
                    c1 += vec3(sin(t*0.05+cId)*14.0, cos(t*0.04+cId*2.0)*14.0, sin(t*0.06+cId*3.0)*14.0);
                    if (rc > 0.45) { return c1 + rv * 42.0; }          // soft round cloud nodes
                    float cId2 = mod(cId + 1.0 + floor(rb*4.0), 10.0);
                    float gy2 = acos(1.0 - 2.0*(cId2+0.5)/10.0), gx2 = cId2 * 2.399;
                    vec3 c2 = vec3(sin(gy2)*cos(gx2), cos(gy2), sin(gy2)*sin(gx2)) * 150.0;
                    return mix(c1, c2, rb) + rv2 * 8.0;                 // short straight links
                }

                // ===== COSMIC FORMS =====

                // 15: Nebula Cloud — bright condensation cores with long wispy tendrils
                if (idx == 15) {
                    float lobeId = floor(ra * 6.0);
                    float la = lobeId * 1.05 + noise(vec3(lobeId*2.7, 0.5, 0.3)) * 1.8;
                    float ld = 60.0 + noise(vec3(lobeId*2.1, 0.5, 0.3)) * 120.0;
                    vec3 lc = vec3(cos(la)*ld, sin(lobeId*2.3 + t*0.009)*70.0, sin(la)*ld);
                    float spread = mix(8.0, 225.0, pow(rb, 2.2));      // dense core -> wispy edge
                    vec3 flow = vec3(noise(lc*0.01 + t*0.03), noise(lc*0.01 + vec3(7.0) + t*0.03), noise(lc*0.01 + vec3(13.0) + t*0.03));
                    return lc + normalize(rv + flow * 0.8) * spread;
                }

                // 16: Accretion Disk — blazing tilted disk
                if (idx == 16) {
                    float radius = 30.0 + pow(ra, 0.7) * 270.0;
                    float ang = rb * 6.283 + t * mix(0.06, 0.012, ra);
                    float thick = mix(20.0, 4.0, clamp(radius/200.0, 0.0, 1.0));
                    vec3 p = vec3(radius*cos(ang), (rc - 0.5) * thick, radius*sin(ang));
                    return inclineDisk(p, 0.80);
                }

                // 17: Barred Galaxy — straight bar with two arms from its ends
                if (idx == 17) {
                    vec3 p;
                    if (rc < 0.5) {
                        float bx = (ra - 0.5) * 320.0;
                        float taper = 1.0 - abs(bx) / 185.0;
                        p = vec3(bx, (rb - 0.5) * 14.0, rv2.x * 18.0 * taper);
                    } else {
                        float arm = step(0.5, rb);
                        float s = ra;
                        float ang0 = arm > 0.5 ? 0.0 : 3.14159;
                        float ang = ang0 + s * 2.2 + t * 0.01;
                        float rad = 155.0 + s * 150.0;
                        p = vec3(rad*cos(ang), (rc - 0.5) * 12.0 * (1.0 - s), rad*sin(ang)) + rv2 * 7.0;
                    }
                    return inclineDisk(p, 1.28);
                }

                // 18: Protoplanetary Disk — concentric rings with gaps
                if (idx == 18) {
                    float ringId = floor(ra * 5.0);
                    float ringR = 60.0 + ringId * 56.0 + (rc - 0.5) * 18.0;
                    float ang = rb * 6.283 + t * mix(0.04, 0.008, ringId/4.0);
                    vec3 p = vec3(ringR*cos(ang), rv2.y * 9.0, ringR*sin(ang));
                    return inclineDisk(p, 1.32);
                }

                // 19: Cosmic Web — bright nodes linked by clean filaments
                if (idx == 19) {
                    float nid = floor(ra * 6.0);
                    vec3 na = vec3(sin(nid*2.3)*210.0, cos(nid*1.7)*180.0, sin(nid*3.1)*200.0);
                    na += vec3(sin(t*0.013+nid)*14.0, cos(t*0.011+nid*2.0)*14.0, sin(t*0.015+nid*3.0)*14.0);
                    if (rc > 0.62) { return na + rv2 * 32.0; }
                    float nid2 = mod(nid + 1.0 + floor(rb*2.0), 6.0);
                    vec3 nb = vec3(sin(nid2*2.3)*210.0, cos(nid2*1.7)*180.0, sin(nid2*3.1)*200.0);
                    float tl = rb;
                    return mix(na, nb, tl) + rv2 * 9.0 * sin(tl*3.14159);
                }

                // 20: Aurora Veil — tall draping curtains of rippling light
                if (idx == 20) {
                    float curtainId = floor(ra * 6.0);
                    float vY = rb;                                   // 0 bottom .. 1 top
                    float yPos = (vY - 0.5) * 470.0;
                    float xBase = (curtainId - 2.5) * 82.0;
                    float ripple = sin(yPos*0.012 + curtainId*1.4 + t*0.06)*72.0
                                 + sin(yPos*0.028 + t*0.045 + curtainId*0.9)*34.0;
                    float zPos = sin(curtainId*2.2 + t*0.02)*90.0;
                    float spreadX = mix(8.0, 44.0, vY);             // narrow bright base -> diffuse top
                    return vec3(xBase + ripple + (rc - 0.5)*spreadX, yPos, zPos + rv2.z*18.0);
                }

                // ===== GAIA · FLORA =====

                // 21: World Tree — roots, trunk, and a broad canopy
                if (idx == 21) {
                    if (rc < 0.55) {
                        vec3 c = n * (60.0 + 120.0 * pow(ra, 0.5));      // rounded foliage canopy
                        return vec3(c.x, c.y * 0.8 + 205.0, c.z) + rv2 * 8.0;
                    }
                    if (rc < 0.72) {
                        float br = floor(ra * 6.0);                      // roots fanning down
                        float s = rb;
                        float rad = s * 155.0;
                        return vec3(cos(br*1.05)*rad, -55.0 - s*185.0, sin(br*1.05)*rad) + rv2 * 7.0;
                    }
                    float s = rb;                                        // trunk + diverging branches
                    float br = floor(ra * 5.0);
                    float rad = smoothstep(0.45, 1.0, s) * 85.0 * ra;
                    return vec3(cos(br*1.256)*rad, -55.0 + s*265.0, sin(br*1.256)*rad) + rv2 * (5.0 + rad*0.05);
                }

                // 22: Lotus — a cupped bloom: inner petals upright, outer petals opening out
                if (idx == 22) {
                    float petals = 8.0;
                    float tier = floor(ra * 4.0);
                    float tierF = tier / 3.0;                       // 0 inner .. 1 outer
                    float pid = floor(rb * petals);
                    float pa = (pid + 0.5)/petals * 6.2831 + tier * 0.4;
                    float along = rc;                               // 0 base .. 1 tip
                    float w = (fract(rb * petals) - 0.5) * 2.0;
                    float elev = mix(1.25, 0.22, tierF) - along*along*0.45;  // upright->open, tip bends out
                    float petalLen = 120.0 + tierF * 125.0;
                    float r = along * petalLen;
                    float rad = r * cos(elev);
                    float y = r * sin(elev) - 25.0;
                    float width = pow(sin(along * 3.14159), 0.55) * (54.0 - tier * 5.0);  // broad rounded petal
                    vec3 radial = vec3(cos(pa), 0.0, sin(pa));
                    vec3 tang = vec3(-sin(pa), 0.0, cos(pa));
                    return radial * rad + tang * (w * width) + vec3(0.0, y, 0.0) + rv2 * 4.0;
                }

                // 23: Koru — an unfurling fern spiral
                if (idx == 23) {
                    float s = ra;
                    float ang = s * 3.5 * 6.2831 + t * 0.04;
                    float rad = pow(1.0 - s, 1.3) * 300.0 + 10.0;
                    vec3 spine = vec3(cos(ang)*rad, sin(ang)*rad, 0.0);
                    spine += normalize(spine + vec3(0.001)) * (rb - 0.5) * 32.0 * (0.3 + 0.7 * s);
                    spine.z += (rc - 0.5) * 22.0;
                    return inclineDisk(spine, 0.5) + rv2 * 4.0;
                }

                // 24: Dandelion — a sphere of seed-stalks, some drifting free
                if (idx == 24) {
                    float R = 230.0;
                    if (rc > 0.88) {
                        float drift = (rc - 0.88) / 0.12;
                        return n * R + vec3(1.0, 0.3, 0.2) * drift * 260.0 + rv * drift * 40.0 + rv2 * 3.0;
                    }
                    return n * (rb * R) + rv * smoothstep(0.82, 1.0, rb) * 22.0 + rv2 * 2.0;
                }

                // 25: Vine — climbing tendrils winding upward, leaves sprouting
                if (idx == 25) {
                    float strand = floor(ra * 4.0);
                    float s = rb;
                    float climb = s * 9.0 + strand * 1.57 + t * 0.05;
                    float rad = 72.0 + sin(s * 6.2831 + strand) * 26.0;
                    vec3 p = vec3(cos(climb)*rad, (s - 0.5) * 460.0, sin(climb)*rad);
                    if (rc > 0.7) {
                        vec3 tang = vec3(-sin(climb), 0.3, cos(climb));
                        p += normalize(tang + rv * 0.5) * ((rc - 0.7)/0.3) * 45.0;
                    }
                    return p + rv2 * 4.0;
                }

                // ===== GAIA · FAUNA =====

                // 26: Jellyfish — pulsing bell with trailing tentacles
                if (idx == 26) {
                    if (rc < 0.5) {
                        float pol = rb * 1.5708;
                        float az = ra * 6.2831;
                        float R = 150.0 * (1.0 + 0.12 * sin(t * 0.8));
                        float bellR = R * sin(pol) * (1.0 + 0.3 * pow(sin(pol), 3.0));
                        return vec3(bellR*cos(az), R*cos(pol)*0.8 + 45.0, bellR*sin(az)) + rv2 * 4.0;
                    }
                    float tent = floor(ra * 12.0);
                    float s = rb;
                    float tAng = tent/12.0 * 6.2831;
                    float wav = sin(s*5.0 + t*0.6 + tent) * 42.0 * s;
                    return vec3(cos(tAng)*120.0 + wav, 45.0 - s*330.0, sin(tAng)*120.0 + cos(t*0.5+tent)*22.0*s) + rv2 * 4.0;
                }

                // 27: Murmuration — a swooping flock: dense leading edge, dispersing tail
                if (idx == 27) {
                    float s = pow(ra, 0.65);                        // 0 dense head .. 1 wispy tail
                    float ang = s * 3.4 + t * 0.12;
                    float rad = 70.0 + s * 200.0;
                    vec3 path = vec3(cos(ang)*rad, (s-0.4)*150.0 + sin(s*7.0 + t*0.3)*45.0, sin(ang)*rad);
                    float spread = mix(24.0, 145.0, s);            // tight head -> dispersing tail
                    vec3 turb = vec3(noise(path*0.012 + t*0.06), noise(path*0.012 + vec3(9.0) + t*0.06), noise(path*0.012 + vec3(19.0) + t*0.06));
                    return path + (rv + turb*0.8) * spread + rv2 * 6.0;
                }

                // 28: Butterfly — body, antennae, and four shaped wings that flap
                if (idx == 28) {
                    if (rc < 0.08) { return vec3(0.0, (rb-0.5)*250.0, 0.0) + rv2 * 5.0; }   // body
                    if (rc < 0.115) {                                                       // antennae
                        float sideA = step(0.5, ra)*2.0 - 1.0;
                        return vec3(sideA*rb*45.0, 135.0 + rb*70.0, 0.0) + rv2 * 3.0;
                    }
                    float side = step(0.5, ra) * 2.0 - 1.0;
                    float wing = step(0.5, rb);
                    float a = fract(ra * 2.0);
                    float fill = sqrt(rc);
                    float prof = 0.5 + 0.5*sin(a*3.14159);          // rounded wing edge
                    vec2 wpt;
                    if (wing < 0.5) {                               // forewing: up-and-out lobe
                        float th = mix(0.30, 1.50, a);
                        float rr = (135.0 + 135.0*prof) * fill;
                        wpt = vec2(cos(th)*rr, sin(th)*rr) + vec2(14.0, 28.0);
                    } else {                                        // hindwing: down-and-out lobe
                        float th = mix(-0.18, -1.45, a);
                        float rr = (105.0 + 100.0*prof) * fill;
                        wpt = vec2(cos(th)*rr, sin(th)*rr) + vec2(8.0, -34.0);
                    }
                    float flap = sin(t * 1.3) * 0.7;
                    return vec3(side*wpt.x, wpt.y, side*wpt.x*flap*0.45) + rv2 * 4.0;
                }

                // 29: Nautilus — a chambered logarithmic shell
                if (idx == 29) {
                    float s = ra;
                    float ang = s * 3.2 * 6.2831 + t * 0.02;
                    float rad = pow(s, 1.3) * 290.0 + 8.0;
                    float wall = 8.0 + s * 55.0;
                    vec3 sp = vec3(cos(ang)*rad, sin(ang)*rad, 0.0);
                    vec3 outward = normalize(sp + vec3(0.001));
                    sp += outward * (rb - 0.5) * wall + vec3(0.0, 0.0, (rc - 0.5) * wall);
                    return inclineDisk(sp, 0.4) + rv2 * 4.0;
                }

                // 30: Coral — many stalks spreading from the base, each forking (staghorn)
                if (idx == 30) {
                    float s = rb;
                    float baseBranch = floor(ra * 7.0);              // 7 main stalks
                    float bd = baseBranch * 0.92;
                    vec3 dir = normalize(vec3(cos(bd)*0.85, 0.7, sin(bd)*0.85));   // fan outward + up
                    vec3 pos = vec3(cos(bd), 0.0, sin(bd)) * 28.0 + vec3(0.0, -95.0, 0.0);
                    float total = s * 4.0;
                    for (int k = 0; k < 4; k++) {
                        if (float(k) >= total) break;
                        float frac = clamp(total - float(k), 0.0, 1.0);
                        pos += dir * (80.0 * pow(0.8, float(k))) * frac;
                        float d = fract(ra * (5.3 + float(k)*9.7) + baseBranch) * 6.2831;
                        vec3 perp = vec3(cos(d), 0.0, sin(d));
                        dir = normalize(dir * 0.55 + (perp + vec3(0.0, 0.35, 0.0)) * 0.45);
                    }
                    return pos + rv2 * mix(15.0, 4.0, s);            // knobby base, fine tips
                }

                // 31: Peacock — broad fan of feathers, each tipped with an eye
                if (idx == 31) {
                    if (rc < 0.07) { return vec3(0.0, -150.0 + rb*90.0, rb*25.0) + rv2 * 5.0; }  // body/neck
                    float feather = floor(ra * 30.0);
                    float s = rb;
                    float fSpread = feather/30.0 - 0.5;
                    float fan = fSpread * 3.0;                         // ~170-degree fan
                    float len = 330.0 * (1.0 - abs(fSpread)*0.4);
                    float xx = sin(fan) * s * len;
                    float yy = cos(fan*0.45) * s * len;
                    float eye = smoothstep(0.80, 1.0, s);
                    xx += rv.x * 30.0 * eye;                           // round eye-spot at the tip
                    yy += rv.y * 30.0 * eye;
                    xx += cos(fan + 1.5708) * (rc - 0.5) * sin(s*3.14159) * 18.0 * (1.0 - eye);  // barbs
                    return vec3(xx, yy - 150.0, sin(fan)*30.0*s + (rc - 0.5)*6.0) + rv2 * 3.0;
                }

                // ===== GAIA · ELEMENTS =====

                // 32: Flame — wide rounded base tapering to flickering upward tongues
                if (idx == 32) {
                    float s = pow(rb, 0.75);
                    float ang = ra * 6.2831;
                    float w = sqrt(max(0.0, 1.0 - s)) * (0.55 + 0.45*(1.0 - s)) * 125.0;  // teardrop
                    float rad = w * sqrt(rc);
                    float fl = mix(7.0, 52.0, s);                  // modest flicker, doesn't fatten the tip
                    float fx = (noise(vec3(cos(ang)*2.0, s*4.0 - t*1.4, sin(ang)*2.0)) - 0.5) * fl;
                    float fz = (noise(vec3(sin(ang)*2.0 + 4.0, s*4.0 - t*1.4, cos(ang)*2.0)) - 0.5) * fl;
                    float tongue = floor(ra * 4.0);                // thin upward licks near the tip
                    float lickUp = smoothstep(0.6, 1.0, s) * noise(vec3(tongue*3.0, s*3.0 - t*1.5, 0.0)) * 75.0;
                    return vec3(cos(ang)*rad + fx, s*430.0 - 150.0 + lickUp, sin(ang)*rad + fz) + rv2 * (3.0 + s*4.0);
                }

                // 33: Maelstrom — a deep spiralling whirlpool funnel with an open throat
                if (idx == 33) {
                    float radius = 45.0 + pow(ra, 0.5) * 270.0;
                    float ang = rb * 6.2831 + log(radius/45.0) * 5.0 + t * (0.18 * 300.0 / radius);
                    float depth = -pow(1.0 - radius/315.0, 1.6) * 300.0;      // deep cone, empty center
                    vec3 p = vec3(radius*cos(ang), depth + (rc - 0.5) * 12.0, radius*sin(ang));
                    return inclineDisk(p, 0.55) + rv2 * 4.0;
                }

                // 34: Cresting Wave — a curling barrel; crest runs into the screen so the curl faces out
                if (idx == 34) {
                    float zc = (ra - 0.5) * 300.0;               // crest length along Z (into screen)
                    if (rb < 0.45) {
                        float h = rb / 0.45;                     // rising wave face (wall of water)
                        return vec3(-h*h*160.0 + (rc - 0.5)*30.0, h*200.0 - 140.0, zc + (rc - 0.5)*45.0) + rv2 * 5.0;
                    }
                    float curlT = (rb - 0.45) / 0.55;            // lip curling forward, ~1.7 turns
                    float curlAng = curlT * 5.4;
                    float curlR = 95.0 + curlT * 120.0;
                    float cx = -120.0 - cos(curlAng) * curlR;
                    float cy = 70.0 + sin(curlAng) * curlR;
                    float spray = smoothstep(0.82, 1.0, curlT);
                    return vec3(cx, cy, zc + (rc - 0.5)*24.0) + rv * spray * 80.0 + rv2 * 5.0;
                }

                // 35: Lightning — a thick jagged main channel with thin angular forks
                if (idx == 35) {
                    float branch = floor(ra * 6.0);
                    float isMain = step(branch, 1.5);              // branches 0,1 = bright main channel
                    float s = rb;
                    float seg = floor(s * 7.0);
                    float segf = fract(s * 7.0);
                    float xoff = 0.0, zoff = 0.0;
                    for (int k = 0; k < 7; k++) {                  // stepped random walk -> sharp zigzag
                        if (float(k) > seg) break;
                        float amt = (float(k) == seg) ? segf : 1.0;
                        xoff += (fract(sin(float(k)*12.9 + branch*7.3) * 43758.5) - 0.5) * 70.0 * amt;
                        zoff += (fract(sin(float(k)*7.7 + branch*3.1) * 23421.6) - 0.5) * 70.0 * amt;
                    }
                    float veer = (isMain > 0.5) ? 0.0 : (fract(branch*3.3) - 0.5) * s * s * 280.0;
                    return vec3(xoff + veer, (0.5 - s) * 470.0, zoff) + rv2 * ((isMain > 0.5) ? 6.0 : 2.5);
                }

                // 36: Tornado — a towering rotating funnel
                if (idx == 36) {
                    float s = rb;
                    float rad = 20.0 + pow(s, 1.5) * 180.0;
                    float ang = ra * 6.2831 + s * 6.0 + t * (1.2 - s*0.6);
                    vec3 p = vec3(cos(ang)*rad*(0.7 + 0.3*rc), (s - 0.5) * 470.0, sin(ang)*rad*(0.7 + 0.3*rc));
                    if (s < 0.12) {
                        float da = ra * 6.2831;
                        p = vec3(cos(da)*(40.0 + rc*120.0), -235.0 + rb*60.0, sin(da)*(40.0 + rc*120.0));
                    }
                    p.x += sin(s*3.0 + t*0.5) * 30.0;
                    return p + rv2 * 4.0;
                }

                // ===== GAIA · STRUCTURE =====

                // 37: Snowflake — six-fold dendritic ice crystal
                if (idx == 37) {
                    float arm = floor(ra * 6.0);
                    float a0 = arm * 1.0472;
                    float s = rb;
                    float node = floor(s * 5.0);
                    float ndist = (node + 0.5)/5.0 * 270.0;
                    float bside = step(0.5, fract(rc*2.0))*2.0 - 1.0;
                    float blen = (1.0 - node/5.0) * 70.0 * fract(rc*9.0);
                    vec2 pos2;
                    if (rc < 0.5) { pos2 = vec2(cos(a0), sin(a0)) * (s * 270.0); }
                    else { pos2 = vec2(cos(a0), sin(a0))*ndist + vec2(cos(a0 + bside*1.047), sin(a0 + bside*1.047))*blen; }
                    return vec3(pos2.x, pos2.y, (rc - 0.5)*8.0) + rv2 * 3.0;
                }

                // 38: Geode — rough shell opening to an inner cavity of crystals
                if (idx == 38) {
                    if (rc < 0.4) {
                        vec3 d = n;
                        d.z = -abs(d.z)*0.7 - d.z*0.3;             // shell biased to the back (open front)
                        return d * (245.0 + noise(d*4.0)*35.0) + rv2 * 6.0;
                    }
                    float cId = floor(ra * 50.0);
                    vec3 base = normalize(vec3(sin(cId*2.3), cos(cId*1.7), -0.6 - abs(sin(cId*3.1))*0.7));
                    float along = rb;
                    float spikeLen = 90.0 + fract(cId*0.37)*110.0;
                    return base * 235.0 - base * along * spikeLen + rv2 * mix(10.0, 2.0, along);
                }

                // 39: Mandala — concentric rings of radial motifs
                if (idx == 39) {
                    float ring = floor(ra * 6.0);
                    float ringR = 40.0 + ring * 42.0;
                    float symmetry = 8.0 + ring * 4.0;
                    float motif = floor(rb * symmetry);
                    float mAng = (motif + 0.5)/symmetry * 6.2831 + ring*0.2;
                    float along = rc;
                    float pr = ringR + (along - 0.5) * (18.0 + ring*4.0);
                    float spread = sin(along*3.14159) * (8.0 + ring*2.0);
                    vec2 base = vec2(cos(mAng), sin(mAng)) * pr;
                    vec2 perp = vec2(-sin(mAng), cos(mAng)) * (fract(rb*symmetry) - 0.5) * spread * 2.0;
                    return vec3(base.x + perp.x, base.y + perp.y, (rc - 0.5)*8.0) + rv2 * 2.5;
                }

                // 40: Labyrinth — concentric circuits with gaps and connectors
                if (idx == 40) {
                    float ring = floor(ra * 8.0);
                    float ringR = 30.0 + ring * 30.0;
                    float ang = rb * 6.2831;
                    float gap = ring * 0.8;
                    float inGap = step(abs(mod(ang - gap + 3.14159, 6.2831) - 3.14159), 0.5);
                    vec2 pos2 = vec2(cos(ang), sin(ang)) * ringR;
                    if (inGap > 0.5) { pos2 = vec2(cos(gap), sin(gap)) * (ringR + rc * 30.0); }
                    return vec3(pos2.x, pos2.y, (rc - 0.5)*10.0) + rv2 * 4.0;
                }

                // 41: Cathedral — twin towers, a gabled nave, and a rose window
                if (idx == 41) {
                    float r = rc;
                    if (r < 0.4) {                                  // twin towers tapering to spires
                        float side = step(0.5, ra)*2.0 - 1.0;
                        float h = rb;
                        float towerR = mix(45.0, 10.0, smoothstep(0.8, 1.0, h));
                        float ta = fract(ra*2.0) * 6.2831;
                        return vec3(side*150.0 + cos(ta)*towerR, h*420.0 - 200.0, sin(ta)*towerR*0.5) + rv2 * 4.0;
                    }
                    if (r < 0.78) {                                 // central gabled nave (pointed top)
                        float x = (fract(ra*3.0) - 0.5) * 220.0;
                        float maxH = mix(180.0, 360.0, 1.0 - abs(x)/115.0);
                        return vec3(x, rb*maxH - 200.0, (rc - 0.5)*60.0) + rv2 * 5.0;
                    }
                    float wr = sqrt(rb) * 60.0;                     // rose window
                    float wa = ra * 6.2831;
                    return vec3(cos(wa)*wr, 120.0 + sin(wa)*wr, 65.0) + rv2 * 3.0;
                }

                // ===== GAIA · SOUL & EMERGENCE =====

                // 42: Lorenz Attractor — the butterfly of deterministic chaos
                if (idx == 42) {
                    vec3 lp = vec3(0.1, 0.0, 0.0) + rv * 0.6;
                    float steps = 40.0 + ra * 140.0;               // warmup ensures particles fill both lobes
                    for (int i = 0; i < 180; i++) {
                        if (float(i) >= steps) break;
                        float dx = 10.0 * (lp.y - lp.x);
                        float dy = lp.x * (28.0 - lp.z) - lp.y;
                        float dz = lp.x * lp.y - 2.6667 * lp.z;
                        lp += vec3(dx, dy, dz) * 0.006;
                    }
                    return vec3(lp.x * 7.0, lp.z * 7.0 - 175.0, lp.y * 7.0) + rv2 * 3.5;
                }

                // 43: Aizawa Attractor — an orbiting flow around a spindle
                if (idx == 43) {
                    vec3 ap = vec3(0.1, 0.0, 0.0) + rv * 0.25;
                    float steps = 55.0 + ra * 150.0;               // warmup so the orbit spreads, not a blob
                    for (int i = 0; i < 210; i++) {
                        if (float(i) >= steps) break;
                        float dx = (ap.z - 0.7) * ap.x - 3.5 * ap.y;
                        float dy = 3.5 * ap.x + (ap.z - 0.7) * ap.y;
                        float dz = 0.6 + 0.95 * ap.z - ap.z*ap.z*ap.z/3.0 - (ap.x*ap.x + ap.y*ap.y)*(1.0 + 0.25*ap.z) + 0.1*ap.z*ap.x*ap.x*ap.x;
                        ap += vec3(dx, dy, dz) * 0.014;
                    }
                    return vec3(ap.x * 155.0, ap.z * 150.0 - 70.0, ap.y * 155.0) + rv2 * 3.0;
                }

                // 44: Phoenix — a rising firebird, wings spread, ember tail trailing
                if (idx == 44) {
                    if (rc < 0.10) { return vec3(0.0, rb*220.0 - 70.0, 0.0) + rv2 * 6.0; }    // body + head
                    if (rc < 0.66) {                                                          // broad spread wings
                        float side = step(0.5, ra)*2.0 - 1.0;
                        float a = fract(ra * 2.0);                 // 0 root .. 1 wingtip
                        float across = rb - 0.5;                   // across the wing chord
                        float span = 40.0 + a * 290.0;
                        float chord = sin(a*3.14159) * 130.0 + 25.0;
                        float upsweep = a*a * 140.0;               // tips sweep upward
                        return vec3(side*span, 20.0 + upsweep + across*chord, side*a*55.0) + rv2 * 4.0;
                    }
                    float s = (rc - 0.66) / 0.34;                                             // dispersing ember tail
                    float spread = mix(18.0, 95.0, s);
                    return vec3(rv.x*spread*0.7, -70.0 - s*250.0 + sin(s*8.0 + t)*18.0, rv.z*spread*0.7) + rv2 * (3.0 + s*5.0);
                }

                // 45: Eye — radial iris fibers around a dark pupil
                if (idx == 45) {
                    if (rc > 0.92) {                                                          // outer limbus ring
                        float la = ra * 6.2831;
                        return vec3(cos(la)*228.0, sin(la)*228.0, (rc - 0.5)*6.0) + rv2 * 3.0;
                    }
                    float fiber = floor(ra * 80.0);
                    float fAng = (fiber/80.0)*6.2831 + (fract(ra*80.0) - 0.5)*0.06;
                    float rr = mix(45.0, 205.0, rb) + sin(rb*8.0 + fiber)*6.0;                // pupil edge -> iris rim
                    return vec3(cos(fAng)*rr, sin(fAng)*rr, (rc - 0.5)*10.0) + rv2 * 2.5;
                }

                // 46: Heart — a beating, chambered heart
                if (idx == 46) {
                    float th = ra * 6.2831;
                    float fill = sqrt(rc);
                    float hx = 16.0*sin(th)*sin(th)*sin(th);
                    float hy = 13.0*cos(th) - 5.0*cos(2.0*th) - 2.0*cos(3.0*th) - cos(4.0*th);
                    float pulse = 1.0 + 0.08*sin(t * 2.5);                                    // heartbeat
                    vec2 pos2 = vec2(hx, hy) * 13.0 * fill * pulse;
                    float z = (rb - 0.5) * 70.0 * (1.0 - fill*0.5) * pulse;
                    return vec3(pos2.x, pos2.y + 20.0, z) + rv2 * 4.0;
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
        camera.position.x = artOffsetX + Math.sin(t * 0.025) * 26;
        camera.position.y = Math.sin(t * 0.018) * 14;
        camera.position.z = 460 + Math.cos(t * 0.022) * 22;
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

    // Slow, elegant morph of the soul state after each answer
    gsap.to(customMaterial.uniforms.uChaos, { value: soulState.chaos, duration: 6.5, ease: "sine.inOut" });
    gsap.to(customMaterial.uniforms.uGravity, { value: soulState.gravity, duration: 6.5, ease: "sine.inOut" });
    gsap.to(customMaterial.uniforms.uFluidity, { value: soulState.fluidity, duration: 6.5, ease: "sine.inOut" });
    gsap.to(customMaterial.uniforms.uColorA.value, { r: primaryColor.r, g: primaryColor.g, b: primaryColor.b, duration: 7.5, ease: "sine.inOut" });
    gsap.to(customMaterial.uniforms.uColorB.value, { r: accentColor.r, g: accentColor.g, b: accentColor.b, duration: 7.5, ease: "sine.inOut" });

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
    "Your mind is a network, not a hierarchy. Ideas cluster around each other, forming constellations of meaning that others might not see. You draw connections between disparate things — a piece of music and a mathematical proof, a childhood memory and a political philosophy. These neural clusters are your unique intelligence.",
    "You are a place of creation in permanent motion. Like gas clouds collapsing into stars, your internal chaos is not disorder — it is pre-organization. You hold enormous energy in diffuse form, awaiting the moment of density, of commitment, of collapse into something luminous and defined.",
    "There is a gravity in you that few understand. It is not dominance — it is inevitability. Things are drawn toward you not because you pull, but because your presence curves the space around you. At your center is something so dense with conviction that light itself bends around the edges of what you know.",
    "You impose pattern without imposing will. Like a galaxy that grew a spine — a central bar of crystallized purpose — from which arms of exploration radiate outward, you bring structure to the people and systems around you simply by existing with clarity. Your order is not rigid; it is generative.",
    "You understand patience in a way that others mistake for passivity. Every world that will ever be born is currently waiting in a ring of frozen dust. Your most important things are in formation — rings of intention, of accumulated experience — and the gaps between them are not absence, but necessary space.",
    "You are the architecture no one built intentionally. Like the cosmic web — the largest structure in existence, invisible yet holding everything together — your connections are vast, non-obvious, and load-bearing. You are the thread between ideas, people, and moments that would otherwise drift apart into void.",
    "You carry emotion the way the sky carries light — visibly, dramatically, yet without weight. Your inner life is not hidden; it is displayed in wavelengths others are still learning to read. Like the aurora, you are a collision between what you contain and the invisible forces that move through you.",
    // GAIA · Flora
    "You understand that nothing real is built quickly. Like a tree, you grew from a single seed of an idea about who you might become, and everything you are now — every branch of thought, every root of conviction — extended from that one quiet origin. What shows above the ground is balanced by everything you have buried beneath it.",
    "You bloom on your own terms. Where others force themselves open, you wait for the conditions to be right — for the water to still, for the light to soften — and only then do you unfold, layer by deliberate layer. Your serenity is not passivity; it is the discipline of someone who knows the most beautiful things cannot be rushed.",
    "You live in the space just before arrival. Like the unfurling fern, you are perpetually becoming — never quite finished, never wanting to be. You carry your whole future coiled inside you, releasing it slowly, turn by turn. To others this looks like patience; to you it is simply the pleasure of unfolding.",
    "You hold everything you love with an open hand. You have learned that the surest way to lose something is to grip it too tightly, so you let your seeds go — your ideas, your people, your past selves — trusting the wind to carry them somewhere they can root. This is not detachment. It is the deepest kind of faith.",
    "You find your strength by reaching toward others. You do not stand alone like a pillar; you climb, winding around the people and structures near you, and in doing so you lift yourself higher than you ever could in isolation. What looks like dependence is a quiet genius for connection — you grow by holding on.",
    // GAIA · Fauna
    "You have mastered the art of moving without forcing. Like the jellyfish, you propel yourself through life not by fighting the current but by pulsing gently with it, trusting drift as much as direction. There is a quiet power in your softness — you survive not by being hard, but by being impossible to grip.",
    "You think in crowds. Your mind is less a single voice than a flock of them, each small impulse turning in concert with the others, and out of that swirl a clear shape always emerges — though never the one you predicted. You trust emergence; you know the most beautiful patterns are the ones no single part intended.",
    "You have already died at least once. Not literally — but you have dissolved a former self completely, surrendered to a formless dark, and reassembled into something that could fly. You carry the memory of that transformation lightly, on wings that remember they were once only the dream of a creature that could not yet imagine the sky.",
    "You never tear down what you have outgrown — you seal it off and build the next room a little larger. Your life is a spiral of chambers, each one a former self you have closed but never destroyed, and the whole elegant shell of you is the record of a growth that only ever moved outward, never back.",
    "You build in the dark, slowly, and never alone. What looks like a single structure is in truth a vast collaboration — countless small selves laying down stone over generations until something reef-like and alive emerges. You understand that the most enduring things are not made quickly, or by one hand.",
    "You were never built for subtlety, and you have stopped apologizing for it. You display what others conceal — your colors, your wants, your strange and luminous interior — not from vanity but from a refusal to be small. To be seen fully is, for you, the same as being alive.",
    // GAIA · Elements
    "You are most yourself when you are least fixed. Like fire, you have no permanent shape — you are a process, not a thing: warmth and motion and hunger given form. People reach toward you for heat and light, but they cannot hold you; the moment you stop moving, you stop being. You have made peace with being something that must keep burning to exist.",
    "Everything you release, you release inward. Where others throw their feelings outward, you draw them down into a spiral that funnels toward a single still point at your center. This is not repression — it is concentration. You turn chaos into a single focused pull, and what reaches your center is changed forever.",
    "You gather for a long time before you break. You are not impulsive; you build — drawing energy across great distances, holding it, rising — until the moment arrives and you crest all at once, with a power that surprises even you. Those who mistake your quiet for stillness have never seen you arrive at the shore.",
    "Your understanding does not come gradually — it strikes. You can sit in the dark with a question for a long time, and then, in a single instant, the whole sky lights up and you see everything at once, branching and connected. This clarity is brief and total. You have learned to trust the flash, and to act before the dark returns.",
    "You are calm at the exact center of your own chaos. Around you everything spins — emotions, demands, velocities that would tear another person apart — and yet at your core there is a strange, quiet eye from which you watch it all turn. Your power is not the absence of chaos; it is the stillness you keep inside it.",
    // GAIA · Structure
    "You are unrepeatable, and you know it. Out of the same conditions that shape everyone else, you crystallized into a pattern that has never existed before and will never exist again. Your symmetry is not conformity — it is the precise, intricate order that only you could have made. You are proof that uniqueness and structure are not opposites.",
    "Your richest self is the one you keep hidden. From the outside you can look plain, even rough — easy to overlook. But those who break through the ordinary surface find a cavity lined with crystal, an inner world far more luminous and ordered than anyone expected. You reveal your most beautiful interior only to those willing to look inside.",
    "At your center, everything agrees. However complex your outer life becomes — however many rings of obligation and detail spiral outward — there is a still point at your core where all of it resolves into symmetry. You return to that center again and again, and from it the chaos rearranges itself into a pattern that makes sense.",
    "You have stopped looking for the exit. Long ago you understood that your path was never meant to escape its own turns — that the only way through was further in, winding toward a center you could not see from the edge. You walk your meandering line with a strange peace, trusting that every turn, even the ones that seem to lead away, is carrying you toward the middle of yourself.",
    "You build upward, to hold something larger than yourself. You are not content with the horizontal and the practical; you raise arches, you reach for height, you make space for the vast and the sacred even when no one asks you to. Others live in rooms; you live in a nave. What you construct is meant to make people look up.",
    // GAIA · Soul & Emergence
    "You are living proof that small beginnings make unrepeatable lives. A breath of difference at the start of your story sent you spiraling down a path no one could have predicted — looping between two centers of gravity, never quite settling on either, never once repeating yourself. Your life is deterministic and yet utterly free, and that paradox is the truest thing about you.",
    "You orbit a center you cannot name. Your life spirals around something — a question, a longing, a truth — that you circle endlessly without ever landing on, and the orbit itself has become your shape. You are not lost; you are in motion around a still axis that organizes everything, even though you could never point to exactly what it is.",
    "You have ended before, and chosen to begin again. At least once, something in you burned completely down — and out of that ash you reassembled, not as a restoration but as a new thing entirely, with wings. You carry the strange confidence of someone who has already survived their own ending. Fire, for you, has never been only destruction.",
    "You are the one part of you that watches all the rest. While your other selves feel and react and spin, there is a quiet observer at your center that simply sees — without judging, without interfering, taking everything in. This awareness is your deepest faculty. You are not only the storm; you are also the eye that watches it with perfect, patient attention.",
    "You keep time for everything you feel. You are not ruled by your emotions so much as you are their steady rhythm — the muscle that holds the whole system in time, beating on through joy and grief alike without ever asking to rest. People feel safe near you because you are reliable in the deepest way: whatever happens, you keep beating, and you keep everyone else's time as well as your own."
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
    "You are the thread connecting stars that no one else can see.",
    "You are the cloud that does not know yet it is a star.",
    "You are the point around which everything orbits without touching.",
    "You are the spine that gives the spiral its direction.",
    "You are the patience of matter becoming worlds.",
    "You are the filament between galaxies that no eye has ever traced.",
    "You are the sky made briefly visible by invisible forces.",
    // GAIA · Flora
    "You are the seed that remembered what it could become.",
    "You are the bloom that waited for still water.",
    "You are the spiral that never finishes opening.",
    "You are the open hand that trusts the wind.",
    "You are the reach that becomes a hold.",
    // GAIA · Fauna
    "You are the soft thing the current cannot hold.",
    "You are the shape a thousand impulses agree on.",
    "You are the dream the caterpillar could not picture.",
    "You are every room you sealed but never razed.",
    "You are the slow cathedral built by the smallest hands.",
    "You are the color that refused to stay hidden.",
    // GAIA · Elements
    "You are the shape that exists only while it moves.",
    "You are the still point all the spinning falls toward.",
    "You are the long gathering before the shore.",
    "You are the sky remembering itself all at once.",
    "You are the quiet eye your own storm turns around.",
    // GAIA · Structure
    "You are the pattern that will never be made twice.",
    "You are the plain stone with a sky inside.",
    "You are the still center the spiral resolves into.",
    "You are the path that was always leading inward.",
    "You are the arch raised to hold the vast.",
    // GAIA · Soul & Emergence
    "You are the small difference that became a whole life.",
    "You are the orbit around a center with no name.",
    "You are the thing that learned to rise from its own ash.",
    "You are the quiet watcher at the center of the storm.",
    "You are the steady rhythm beneath everything you feel."
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

    // Shift camera focus to the left for desktop, keep centered and push camera down for mobile (pushes art up)
    artOffsetX = isMobile ? 0 : -140;
    const targetY = isMobile ? -250 : 0;
    const targetZ = isMobile ? 850 : 460;
    gsap.to(camera.position, { x: artOffsetX, y: targetY, z: targetZ, duration: 6, ease: "power3.inOut" });

    const artIndex = getArtIndex();

    // GPU Morph — slow and elegant
    customMaterial.uniforms.uShape2.value = artIndex;
    gsap.to(customMaterial.uniforms.uMorphProgression, { value: 1.0, duration: 8.0, ease: "power2.inOut" });
    // Scale the form to fill the canvas (per-form, so flat disks aren't tiny)
    gsap.to(customMaterial.uniforms.uScaleMultiplier, { value: ART_FILL[artIndex], duration: 8.0, ease: "power2.inOut" });

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

    const marginX = isMobile ? 40 : 60;
    const maxTextWidth = isMobile ? w - 80 : 480;

    ctx.fillStyle = '#1a1a1a';
    ctx.font = isMobile ? '300 32px "Cormorant Garamond", serif' : '300 44px "Cormorant Garamond", serif';
    ctx.fillText(document.getElementById('artTitle').innerText, marginX, isMobile ? h - 280 : h - 280);

    ctx.fillStyle = '#666';
    ctx.font = isMobile ? '300 11px "Inter", sans-serif' : '300 13px "Inter", sans-serif';
    ctx.fillText(document.getElementById('artDescription').innerText.toUpperCase(), marginX, isMobile ? h - 250 : h - 245);

    ctx.fillStyle = '#1a1a1a';
    ctx.font = isMobile ? 'italic 14px "Cormorant Garamond", serif' : 'italic 16px "Cormorant Garamond", serif';
    const words = document.getElementById('artInsight').innerText.split(' ');
    let line = '', y = isMobile ? h - 210 : h - 200;
    for (let i = 0; i < words.length; i++) {
        let test = line + words[i] + ' ';
        if (ctx.measureText(test).width > maxTextWidth && i > 0) {
            ctx.fillText(line, marginX, y); line = words[i] + ' '; y += isMobile ? 20 : 24;
        } else { line = test; }
    }
    ctx.fillText(line, marginX, y);

    const sig = document.getElementById('soulSignature').innerText;
    if (sig) { ctx.font = isMobile ? 'italic 16px "Cormorant Garamond", serif' : 'italic 18px "Cormorant Garamond", serif'; ctx.fillStyle = '#333'; ctx.fillText(sig, marginX, y + (isMobile ? 30 : 40)); }

    ctx.fillStyle = 'rgba(26,26,26,0.15)';
    ctx.font = '300 10px "Inter", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('Soul Canvas — ' + new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), w - marginX, h - 40);

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
    const startZ = isMobile ? 650 : 400;
    gsap.to(camera.position, { x: 0, y: 0, z: startZ, duration: 4, ease: "power2.inOut" });

    updateDrone();
    updateProgress();
    loadQuestion();
});

// ----------------------------------------------------
// 15. INIT
// ----------------------------------------------------
initThree();
