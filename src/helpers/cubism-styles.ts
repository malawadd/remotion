import { Vector3 } from "@react-three/fiber";

// Cubist Color Palette
export const CUBIST_COLORS = {
  // Primary geometric colors
  primary: "#2C3E50",      // Dark blue-gray
  secondary: "#34495E",    // Medium blue-gray
  accent: "#E74C3C",       // Sharp red accent
  highlight: "#F39C12",    // Warm orange
  
  // Neutral tones
  light: "#ECF0F1",        // Light gray
  medium: "#95A5A6",       // Medium gray
  dark: "#2C2C2C",         // Dark gray
  
  // Crypto-specific colors
  plaintext: "#3498DB",    // Clear blue
  ciphertext: "#9B59B6",   // Purple (encrypted)
  key: "#E67E22",          // Orange (keys)
  secure: "#27AE60",       // Green (secure)
  vulnerable: "#E74C3C",   // Red (vulnerable)
} as const;

// Material properties for Cubist aesthetic
export const CUBIST_MATERIALS = {
  matte: {
    roughness: 0.8,
    metalness: 0.1,
  },
  semiGloss: {
    roughness: 0.4,
    metalness: 0.3,
  },
  metallic: {
    roughness: 0.2,
    metalness: 0.8,
  },
} as const;

// Standard geometric dimensions
export const CUBIST_DIMENSIONS = {
  // Basic shapes
  cube: {
    small: 0.3,
    medium: 0.5,
    large: 0.8,
  },
  plane: {
    small: [0.5, 0.5],
    medium: [1.0, 1.0],
    large: [1.5, 1.5],
  },
  // Text sizing
  text: {
    title: 0.15,
    subtitle: 0.1,
    body: 0.08,
  },
} as const;

// Animation timing constants
export const CUBIST_TIMING = {
  sectionDuration: 180, // 6 seconds at 30fps
  transitionDuration: 30, // 1 second transition
  animationSpeed: {
    slow: 0.5,
    medium: 1.0,
    fast: 2.0,
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

// Camera positions for different scenes
export const CAMERA_POSITIONS = {
  overview: [0, 0, 4] as Vector3,
  closeup: [0, 0, 2] as Vector3,
  side: [3, 0, 2] as Vector3,
  top: [0, 3, 2] as Vector3,
} as const;