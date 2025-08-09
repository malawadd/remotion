import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { Vector3 } from "@react-three/fiber";
import { CubistText } from "./CubistText";
import { CubistShape } from "./CubistShape";
import { CUBIST_COLORS, CUBIST_TIMING } from "../helpers/cubism-styles";

interface CryptoSectionProps {
  section: "foundations" | "publicKey" | "randomness" | "threshold" | "shamir" | "dkg" | "bls" | "thresholdBls" | "encryption" | "realWorld";
  startFrame: number;
  endFrame: number;
}

export const CryptoSection: React.FC<CryptoSectionProps> = ({
  section,
  startFrame,
  endFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Calculate section progress
  const sectionProgress = interpolate(
    frame,
    [startFrame, endFrame],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Spring animation for entrance
  const entranceSpring = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 200, mass: 2 },
  });

  // Only render if we're in this section's timeframe
  if (frame < startFrame || frame > endFrame) {
    return null;
  }

  const renderFoundations = () => (
    <group>
      <CubistText
        text="Foundations of Cryptography"
        position={[0, 2, 0]}
        size="title"
        color={CUBIST_COLORS.accent}
      />
      
      {/* Plaintext representation */}
      <group position={[-2, 0, 0]}>
        <CubistShape
          type="cube"
          size={0.8}
          color={CUBIST_COLORS.plaintext}
          material="matte"
          opacity={entranceSpring}
        />
        <CubistText
          text="Plaintext"
          position={[0, -1.2, 0]}
          size="subtitle"
          color={CUBIST_COLORS.plaintext}
        />
      </group>

      {/* Arrow */}
      <CubistShape
        type="cylinder"
        position={[0, 0, 0]}
        size={[0.05, 0.05, 1]}
        rotation={[0, 0, Math.PI / 2]}
        color={CUBIST_COLORS.medium}
        opacity={entranceSpring}
      />

      {/* Ciphertext representation */}
      <group position={[2, 0, 0]}>
        <CubistShape
          type="cube"
          size={0.8}
          color={CUBIST_COLORS.ciphertext}
          material="semiGloss"
          fragmented={sectionProgress > 0.5}
          opacity={entranceSpring}
        />
        <CubistText
          text="Ciphertext"
          position={[0, -1.2, 0]}
          size="subtitle"
          color={CUBIST_COLORS.ciphertext}
          fragmented={sectionProgress > 0.5}
        />
      </group>

      {/* Keys */}
      <group position={[0, -2.5, 0]}>
        <CubistShape
          type="sphere"
          position={[-1, 0, 0]}
          size={0.4}
          color={CUBIST_COLORS.key}
          material="metallic"
          opacity={entranceSpring * 0.7}
        />
        <CubistText
          text="Private Key"
          position={[-1, -0.8, 0]}
          size="body"
          color={CUBIST_COLORS.key}
        />
        
        <CubistShape
          type="sphere"
          position={[1, 0, 0]}
          size={0.4}
          color={CUBIST_COLORS.key}
          material="matte"
          opacity={entranceSpring}
        />
        <CubistText
          text="Public Key"
          position={[1, -0.8, 0]}
          size="body"
          color={CUBIST_COLORS.key}
        />
      </group>
    </group>
  );

  const renderRandomness = () => (
    <group>
      <CubistText
        text="Why Randomness Matters"
        position={[0, 2, 0]}
        size="title"
        color={CUBIST_COLORS.accent}
      />
      
      {/* Predictable pattern */}
      <group position={[-2, 0, 0]}>
        <CubistText
          text="Predictable (Unsafe)"
          position={[0, 1, 0]}
          size="subtitle"
          color={CUBIST_COLORS.vulnerable}
        />
        {[0, 1, 2, 3].map((i) => (
          <CubistShape
            key={i}
            type="cube"
            position={[i * 0.3 - 0.45, 0, 0]}
            size={0.2}
            color={CUBIST_COLORS.vulnerable}
            opacity={entranceSpring}
          />
        ))}
      </group>

      {/* Random pattern */}
      <group position={[2, 0, 0]}>
        <CubistText
          text="Cryptographically Secure"
          position={[0, 1, 0]}
          size="subtitle"
          color={CUBIST_COLORS.secure}
        />
        {[0, 1, 2, 3].map((i) => (
          <CubistShape
            key={i}
            type="cube"
            position={[
              (Math.sin(i * 2.3) * 0.4),
              (Math.cos(i * 1.7) * 0.3),
              (Math.sin(i * 3.1) * 0.1)
            ]}
            size={0.15 + Math.sin(i * 1.5) * 0.05}
            color={CUBIST_COLORS.secure}
            rotation={[
              Math.sin(i * 2.1) * 0.5,
              Math.cos(i * 1.9) * 0.5,
              Math.sin(i * 2.7) * 0.3
            ]}
            opacity={entranceSpring}
          />
        ))}
      </group>
    </group>
  );

  const renderThreshold = () => (
    <group>
      <CubistText
        text="Threshold Cryptography"
        position={[0, 2.5, 0]}
        size="title"
        color={CUBIST_COLORS.accent}
      />
      
      {/* Central secret */}
      <CubistShape
        type="sphere"
        position={[0, 1, 0]}
        size={0.6}
        color={CUBIST_COLORS.key}
        material="metallic"
        opacity={entranceSpring * (1 - sectionProgress * 0.7)}
      />
      
      {/* Shares distributed around */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        const radius = 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <group key={i}>
            <CubistShape
              type="cube"
              position={[x, y, 0]}
              size={0.3}
              color={CUBIST_COLORS.secondary}
              opacity={entranceSpring * sectionProgress}
            />
            <CubistText
              text={`Share ${i + 1}`}
              position={[x, y - 0.6, 0]}
              size="body"
              color={CUBIST_COLORS.secondary}
              opacity={sectionProgress}
            />
          </group>
        );
      })}
      
      <CubistText
        text="Any 3 of 5 shares can reconstruct the secret"
        position={[0, -2, 0]}
        size="subtitle"
        color={CUBIST_COLORS.primary}
        opacity={sectionProgress}
      />
    </group>
  );

  // Render appropriate section
  switch (section) {
    case "foundations":
      return renderFoundations();
    case "randomness":
      return renderRandomness();
    case "threshold":
      return renderThreshold();
    default:
      return (
        <CubistText
          text={`Section: ${section}`}
          position={[0, 0, 0]}
          size="title"
          color={CUBIST_COLORS.accent}
        />
      );
  }
};