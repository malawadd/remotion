import { ThreeCanvas } from "@remotion/three";
import React, { useEffect } from "react";
import { AbsoluteFill, useVideoConfig, useCurrentFrame } from "remotion";
import { z } from "zod";
import { useThree } from "@react-three/fiber";
import { CryptoExplainerScene } from "./components/CryptoExplainerScene";
import { COLORS, TIMING, CAMERA_PATHS } from "./helpers/cubism-styles";

// Dynamic gradient background that changes throughout the video
const getDynamicBackground = (progress: number) => {
  const section = Math.floor(progress * 10); // 10 sections
  const sectionProgress = (progress * 10) % 1;
  
  const gradients = [
    [COLORS.darkPrimary, COLORS.darkSecondary, COLORS.darkAccent], // Intro
    [COLORS.darkSecondary, COLORS.midTone, COLORS.darkPrimary],    // Foundations
    [COLORS.midTone, COLORS.darkAccent, COLORS.darkSecondary],     // Public Key
    [COLORS.darkAccent, COLORS.darkPrimary, COLORS.midTone],       // Randomness
    [COLORS.darkPrimary, COLORS.darkAccent, COLORS.darkSecondary], // Threshold
    [COLORS.darkSecondary, COLORS.darkPrimary, COLORS.midTone],    // Shamir
    [COLORS.midTone, COLORS.darkSecondary, COLORS.darkAccent],     // DKG
    [COLORS.darkAccent, COLORS.midTone, COLORS.darkPrimary],       // BLS
    [COLORS.darkPrimary, COLORS.darkSecondary, COLORS.darkAccent], // Threshold BLS
    [COLORS.darkSecondary, COLORS.darkAccent, COLORS.midTone],     // Encryption
  ];
  
  const currentGradient = gradients[Math.min(section, gradients.length - 1)];
  const nextGradient = gradients[Math.min(section + 1, gradients.length - 1)];
  
  // Smooth transition between gradients
  const color1 = interpolateColor(currentGradient[0], nextGradient[0], sectionProgress);
  const color2 = interpolateColor(currentGradient[1], nextGradient[1], sectionProgress);
  const color3 = interpolateColor(currentGradient[2], nextGradient[2], sectionProgress);
  
  return `linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`;
};

// Helper function to interpolate between colors
const interpolateColor = (color1: string, color2: string, t: number): string => {
  const hex1 = color1.replace('#', '');
  const hex2 = color2.replace('#', '');
  
  const r1 = parseInt(hex1.substr(0, 2), 16);
  const g1 = parseInt(hex1.substr(2, 2), 16);
  const b1 = parseInt(hex1.substr(4, 2), 16);
  
  const r2 = parseInt(hex2.substr(0, 2), 16);
  const g2 = parseInt(hex2.substr(2, 2), 16);
  const b2 = parseInt(hex2.substr(4, 2), 16);
  
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

export const myCompSchema = z.object({
  section: z.enum([
    "intro", "foundations", "publicKey", "randomness", "threshold", 
    "shamir", "dkg", "bls", "thresholdBls", "encryption", "realWorld"
  ]).optional(),
});

type MyCompSchemaType = z.infer<typeof myCompSchema>;

// Dynamic camera controller with smooth movements between sections
const CinematicCamera: React.FC<{ section: string }> = ({ section }) => {
  const frame = useCurrentFrame();
  const camera = useThree((state) => state.camera);
  
  useEffect(() => {
    // Get camera path for current section
    const path = CAMERA_PATHS[section as keyof typeof CAMERA_PATHS] || CAMERA_PATHS.intro;
    
    // Smooth camera movement within section
    const [x, y, z] = path.start as [number, number, number];
    
    camera.position.set(
      x + Math.sin(frame * 0.005) * 0.2,
      y + Math.cos(frame * 0.007) * 0.15,
      z + Math.sin(frame * 0.003) * 0.1
    );
    
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, section, frame]);
  
  return null;
};

// Calculate total video duration
const totalDuration = Object.values(TIMING.sections).reduce((sum, duration) => sum + duration, 0);

export const Scene: React.FC<MyCompSchemaType> = ({ section }) => {
  const { width, height } = useVideoConfig();
  const frame = useCurrentFrame();
  
  // Calculate which section we're in and overall progress
  let currentSection = "intro";
  let sectionStartFrame = 0;
  const overallProgress = frame / totalDuration;
  
  if (section) {
    // Single section mode
    currentSection = section;
    sectionStartFrame = 0;
  } else {
    // Full video mode - calculate current section
    let accumulatedFrames = 0;
    for (const [sectionName, duration] of Object.entries(TIMING.sections)) {
      if (frame >= accumulatedFrames && frame < accumulatedFrames + duration) {
        currentSection = sectionName;
        sectionStartFrame = accumulatedFrames;
        break;
      }
      accumulatedFrames += duration;
    }
  }

  return (
    <AbsoluteFill 
      style={{ 
        background: getDynamicBackground(overallProgress),
        overflow: 'hidden',
      }}
    >
      <ThreeCanvas 
        linear 
        width={width} 
        height={height}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <CinematicCamera section={currentSection} />
        
        {/* Enhanced dynamic lighting that changes with sections */}
        <ambientLight intensity={0.3} color={COLORS.textPrimary} />
        <directionalLight 
          position={[8, 8, 5]} 
          intensity={1.5} 
          color={COLORS.electric}
          castShadow
        />
        <pointLight 
          position={[-6, 4, 3]} 
          intensity={0.8} 
          color={COLORS.plasma} 
        />
        <pointLight 
          position={[4, -3, 4]} 
          intensity={0.6} 
          color={COLORS.cyber} 
        />
        <spotLight
          position={[0, 10, 5]}
          angle={0.3}
          penumbra={0.5}
          intensity={0.8}
          color={COLORS.gold}
          target-position={[0, 0, 0]}
        />
        
        {/* Main explainer scene */}
        <CryptoExplainerScene
          currentSection={currentSection}
          sectionStartFrame={sectionStartFrame}
        />
      </ThreeCanvas>
    </AbsoluteFill>
  );
};
