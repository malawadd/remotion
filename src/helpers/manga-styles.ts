// Manga-style color palette and styling constants
export const MANGA_COLORS = {
  // Background and panel colors
  background: "#F5F5F5",
  panelBg: "#FFFFFF",
  panelBorder: "#333333",
  
  // Character colors
  character: "#2C3E50",
  
  // Text bubble colors
  speechBubble: "#FFFFFF",
  thoughtBubble: "#E8F4FD",
  narratorBox: "#FFF9C4",
  whisperBubble: "#F0F0F0",
  evilBubble: "#FFE6E6",
  shieldBubble: "#E6FFE6",
  strainedBubble: "#FFEECC",
  groupBubble: "#E6F3FF",
  unisonBubble: "#FFE6F3",
  excitedBubble: "#FFFACD",
  confidentBubble: "#E6FFFA",
  annoyedBubble: "#FFE4E1",
  dramaticBubble: "#FF6B6B",
  
  // Text colors
  text: "#2C3E50",
  narratorText: "#8B4513",
  whisperText: "#666666",
  evilText: "#8B0000",
  shieldText: "#006400",
  strainedText: "#B8860B",
  groupText: "#1E90FF",
  unisonText: "#FF1493",
  excitedText: "#FF8C00",
  confidentText: "#20B2AA",
  annoyedText: "#DC143C",
  dramaticText: "#FFFFFF",
  
  // Border colors
  bubbleBorder: "#333333",
  narratorBorder: "#DAA520",
  whisperBorder: "#999999",
  evilBorder: "#8B0000",
  shieldBorder: "#228B22",
  strainedBorder: "#DEB887",
  groupBorder: "#4169E1",
  unisonBorder: "#FF69B4",
  excitedBorder: "#FF4500",
  confidentBorder: "#008B8B",
  annoyedBorder: "#B22222",
  dramaticBorder: "#8B0000",
  
  // Crypto-specific colors
  plaintext: "#3498DB",
  ciphertext: "#9B59B6",
  key: "#E67E22",
  privateKey: "#8B4513",
  publicKey: "#32CD32",
  secure: "#27AE60",
  vulnerable: "#E74C3C",
  machine: "#95A5A6",
  connection: "#F39C12",
  transaction: "#2980B9",
  hash: "#16A085",
  signature: "#8E44AD",
  partialSig: "#AF7AC5",
  finalSig: "#6C3483",
  aggregated: "#BB8FCE",
  coefficients: "#F7DC6F",
  
  // Shape and effect colors
  shape: "#34495E",
  effect: "#E74C3C",
  label: "#2C3E50",
  
  // Specialized colors
  burden: "#A0522D",
  keyShards: "#FFD700",
  power: "#FF6347",
  math: "#4169E1",
  secret: "#FFD700",
  blackboard: "#2F4F4F",
  curve: "#FF69B4",
  shares: "#87CEEB",
  keyShare: "#DDA0DD",
  groupSecret: "#E6E6FA",
  ghostly: "#D3D3D3",
  hand: "#FDBCB4",
  
  // BLS-specific colors
  g1: "#FF6B6B",
  g2: "#4ECDC4",
  gt: "#45B7D1",
  portal: "#9B59B6",
  point: "#E67E22",
  result: "#F39C12",
  numbers: "#3498DB",
  generator: "#2ECC71",
  curvePoint: "#E74C3C",
  secretKey: "#8B4513",
  pairing: "#9B59B6",
  success: "#27AE60",
  
  // Real-world application colors
  ethereum: "#627EEA",
  beacon: "#FFD700",
  drand: "#FF6B6B",
  randomness: "#9B59B6",
  filecoin: "#0090FF",
  chia: "#3AAC59",
  blocks: "#95A5A6",
  custody: "#8B4513",
  
  // UI element colors
  split: "#BDC3C7",
  regular: "#95A5A6",
  cheap: "#27AE60",
  privacy: "#3498DB",
  complex: "#E74C3C",
  crossed: "#8B0000",
  
  // Encryption colors
  encrypted: "#9B59B6",
  groupPK: "#3498DB",
  partialDecrypt: "#AF7AC5",
  auction: "#F39C12",
  timed: "#E67E22",
  wallet: "#2ECC71",
  
  // Problem colors
  hardware: "#95A5A6",
  device: "#34495E",
  shadow: "#2C3E50",
  stamps: "#E67E22",
  expensive: "#E74C3C",
  magnifying: "#F39C12",
  signers: "#3498DB",
  slot: "#BDC3C7",
  vault: "#8B4513",
  threshold: "#3498DB",
} as const;

// Animation timing constants
export const MANGA_TIMING = {
  panelDuration: 60, // 2 seconds at 30fps
  transitionDuration: 15, // 0.5 seconds
  effectDuration: 30, // 1 second
  textAppearDelay: 10, // 0.33 seconds
} as const;

// Typography settings
export const MANGA_TYPOGRAPHY = {
  title: {
    fontSize: "48px",
    fontWeight: "900",
    textTransform: "uppercase" as const,
  },
  subtitle: {
    fontSize: "32px",
    fontWeight: "700",
  },
  body: {
    fontSize: "24px",
    fontWeight: "600",
  },
  effect: {
    fontSize: "20px",
    fontWeight: "800",
  },
} as const;

// Panel layout constants
export const MANGA_LAYOUT = {
  panelPadding: 20,
  characterSize: 60,
  shapeSize: 50,
  effectSize: 30,
  textMaxWidth: 400,
} as const;