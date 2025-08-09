import { Vector3 } from "@react-three/fiber";

// Enhanced Social Media Color Palette with more variety
export const COLORS = {
  // Primary brand colors
  primary: "#FF6B6B",        // Coral red
  secondary: "#4ECDC4",      // Teal
  accent: "#45B7D1",         // Sky blue
  highlight: "#FFA726",      // Orange
  
  // Neon/Electric colors for crypto elements
  electric: "#00F5FF",       // Electric cyan
  neon: "#FF1744",          // Neon red
  plasma: "#E91E63",        // Hot pink
  cyber: "#00E676",         // Neon green
  violet: "#9C27B0",        // Purple
  gold: "#FFD700",          // Gold
  
  // Background gradients (dynamic)
  darkPrimary: "#0A0A0F",   // Very dark navy
  darkSecondary: "#16213E", // Dark blue
  darkAccent: "#0F3460",    // Deep blue
  midTone: "#1A237E",       // Medium blue
  
  // Text colors (high contrast)
  textPrimary: "#FFFFFF",   // White
  textSecondary: "#E0E0E0", // Light gray
  textAccent: "#00F5FF",    // Electric cyan
  textWarm: "#FFB74D",      // Warm orange
  
  // Crypto-specific vibrant colors
  plaintext: "#00E676",     // Neon green 
  ciphertext: "#E91E63",    // Hot pink
  key: "#FFA726",           // Bright orange
  secret: "#9C27B0",        // Purple
  share: "#03DAC6",         // Teal
  signature: "#FF5722",     // Deep orange
  secure: "#4CAF50",        // Vibrant green
  vulnerable: "#FF1744",    // Bright red
  
  // Network/distributed colors
  node: "#42A5F5",          // Blue
  connection: "#26C6DA",    // Cyan
  active: "#66BB6A",        // Green
  inactive: "#78909C",      // Gray
} as const;

// Enhanced material properties for various effects
export const MATERIALS = {
  neon: {
    roughness: 0.1,
    metalness: 0.9,
    emissive: true,
    emissiveIntensity: 0.4,
  },
  holographic: {
    roughness: 0.0,
    metalness: 1.0,
    emissive: true,
    emissiveIntensity: 0.3,
  },
  glossy: {
    roughness: 0.2,
    metalness: 0.8,
    emissive: false,
    emissiveIntensity: 0,
  },
  matte: {
    roughness: 0.8,
    metalness: 0.1,
    emissive: false,
    emissiveIntensity: 0,
  },
  plasma: {
    roughness: 0.0,
    metalness: 0.5,
    emissive: true,
    emissiveIntensity: 0.6,
  },
  crystal: {
    roughness: 0.1,
    metalness: 0.9,
    emissive: true,
    emissiveIntensity: 0.2,
  },
} as const;

// Comprehensive sizing system
export const DIMENSIONS = {
  // Shapes for better visibility
  shapes: {
    tiny: 0.2,
    small: 0.4,
    medium: 0.7,
    large: 1.0,
    huge: 1.5,
    massive: 2.0,
  },
  // Text hierarchy
  text: {
    hero: 0.35,        // Main titles
    title: 0.25,       // Section titles
    subtitle: 0.18,    // Subtitles
    body: 0.14,        // Body text
    label: 0.1,        // Small labels
    tiny: 0.08,        // Tiny text
  },
  // Spacing system
  spacing: {
    tight: 0.5,
    normal: 1.0,
    loose: 1.5,
    wide: 2.0,
    extraWide: 3.0,
  },
} as const;

// Animation timing system
export const TIMING = {
  // Section durations (in frames at 30fps)
  sections: {
    intro: 120,           // 4 seconds
    foundations: 240,     // 8 seconds
    publicKey: 180,       // 6 seconds
    randomness: 210,      // 7 seconds
    threshold: 270,       // 9 seconds
    shamir: 300,          // 10 seconds
    dkg: 240,            // 8 seconds
    bls: 270,            // 9 seconds
    thresholdBls: 300,   // 10 seconds
    encryption: 240,     // 8 seconds
    realWorld: 180,      // 6 seconds
    outro: 90,           // 3 seconds
  },
  // Transition speeds
  transitions: {
    instant: 5,
    fast: 15,
    medium: 30,
    slow: 60,
    veryFast: 8,
  },
  // Animation easing
  easing: {
    ease: { damping: 200, mass: 1 },
    bounce: { damping: 100, mass: 2 },
    smooth: { damping: 300, mass: 1 },
    elastic: { damping: 80, mass: 3 },
  },
} as const;

// Dynamic camera positions and movements
export const CAMERA_PATHS = {
  intro: {
    start: [0, 5, 8] as Vector3,
    end: [0, 0, 5] as Vector3,
  },
  foundations: {
    start: [0, 0, 5] as Vector3,
    end: [-2, 1, 4] as Vector3,
  },
  publicKey: {
    start: [-2, 1, 4] as Vector3,
    end: [3, -1, 6] as Vector3,
  },
  randomness: {
    start: [3, -1, 6] as Vector3,
    end: [0, 3, 4] as Vector3,
  },
  threshold: {
    start: [0, 3, 4] as Vector3,
    end: [-4, 0, 7] as Vector3,
  },
  shamir: {
    start: [-4, 0, 7] as Vector3,
    end: [2, 2, 5] as Vector3,
  },
  dkg: {
    start: [2, 2, 5] as Vector3,
    end: [0, -2, 8] as Vector3,
  },
  bls: {
    start: [0, -2, 8] as Vector3,
    end: [4, 1, 4] as Vector3,
  },
  thresholdBls: {
    start: [4, 1, 4] as Vector3,
    end: [-1, 4, 6] as Vector3,
  },
  encryption: {
    start: [-1, 4, 6] as Vector3,
    end: [3, -3, 5] as Vector3,
  },
  realWorld: {
    start: [3, -3, 5] as Vector3,
    end: [0, 0, 10] as Vector3,
  },
} as const;

// Particle system configurations
export const PARTICLES = {
  randomness: {
    count: 100,
    spread: 5,
    speed: 0.02,
    size: 0.05,
  },
  encryption: {
    count: 50,
    spread: 3,
    speed: 0.015,
    size: 0.03,
  },
  network: {
    count: 30,
    spread: 4,
    speed: 0.01,
    size: 0.04,
  },
  threshold: {
    count: 20,
    spread: 2,
    speed: 0.008,
    size: 0.06,
  },
} as const;

// Mathematical formula positions and animations
export const FORMULAS = {
  shamir: {
    polynomial: "f(x) = s + a₁x + a₂x²",
    shares: ["P₁ = f(1)", "P₂ = f(2)", "P₃ = f(3)"],
    reconstruction: "Lagrange Interpolation → f(0)",
  },
  bls: {
    keygen: "PK = sk · G",
    sign: "σ = sk · H(m)",
    verify: "e(σ, G) = e(H(m), PK)",
  },
  threshold: {
    combine: "σ = Σ λᵢ · σᵢ",
    shares: "σᵢ = skᵢ · H(m)",
  },
} as const;

// Fragmentation patterns for Cubist effect
export const FRAGMENTATION_PATTERNS = {
  simple: [
    { offset: [-0.1, 0.1, 0], rotation: [0, 0, 0.1] },
    { offset: [0.1, -0.1, 0], rotation: [0, 0, -0.1] },
  ],
  complex: [
    { offset: [-0.15, 0.15, 0.05], rotation: [0.1, 0, 0.15] },
    { offset: [0.15, -0.15, -0.05], rotation: [-0.1, 0, -0.15] },
    { offset: [0, 0.2, 0.1], rotation: [0, 0.1, 0] },
    { offset: [0.2, 0, -0.1], rotation: [0, -0.1, 0.2] },
  ],
} as const;