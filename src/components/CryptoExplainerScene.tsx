import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { Text } from "@react-three/drei";
import { CubistShape } from "./CubistShape";
import { ParticleSystem } from "./ParticleSystem";
import { NetworkVisualization } from "./NetworkVisualization";
import { COLORS, DIMENSIONS, TIMING, FORMULAS } from "../helpers/cubism-styles";

interface CryptoExplainerSceneProps {
  currentSection: string;
  sectionStartFrame: number;
}

export const CryptoExplainerScene: React.FC<CryptoExplainerSceneProps> = ({
  currentSection,
  sectionStartFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Calculate section-specific progress
  const sectionFrame = frame - sectionStartFrame;
  const sectionDuration = TIMING.sections[currentSection as keyof typeof TIMING.sections] || 240;
  const sectionProgress = Math.min(sectionFrame / sectionDuration, 1);
  
  // Smooth entrance animation for each section
  const entranceSpring = spring({
    frame: sectionFrame,
    fps,
    config: TIMING.easing.smooth,
  });

  // Dynamic text reveal animation
  const textReveal = (delay: number = 0) => {
    return spring({
      frame: Math.max(0, sectionFrame - delay),
      fps,
      config: TIMING.easing.bounce,
    });
  };

  // Render intro section with hero animation
  const renderIntro = () => (
    <group>
      <Text
        position={[0, 2, 0]}
        fontSize={DIMENSIONS.text.hero}
        color={COLORS.textPrimary}
        anchorX="center"
        anchorY="middle"
      >
        <meshStandardMaterial
          color={COLORS.textPrimary}
          emissive={COLORS.electric}
          emissiveIntensity={0.2}
        />
        Cryptography Explained
      </Text>
      
      <Text
        position={[0, 1.2, 0]}
        fontSize={DIMENSIONS.text.subtitle}
        color={COLORS.textAccent}
        anchorX="center"
        anchorY="middle"
      >
        <meshStandardMaterial
          color={COLORS.textAccent}
          emissive={COLORS.textAccent}
          emissiveIntensity={0.1}
        />
        From Basics to Threshold BLS
      </Text>

      <ParticleSystem
        type="network"
        intensity={entranceSpring}
        color={COLORS.electric}
        center={[0, 0, 0]}
      />
    </group>
  );

  // Render foundations with animated transformation
  const renderFoundations = () => {
    const transformProgress = interpolate(sectionProgress, [0.3, 0.8], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    return (
      <group>
        <Text
          position={[0, 3, 0]}
          fontSize={DIMENSIONS.text.title}
          color={COLORS.accent}
          anchorX="center"
          anchorY="middle"
        >
          <meshStandardMaterial
            color={COLORS.accent}
            emissive={COLORS.accent}
            emissiveIntensity={0.2}
          />
          Foundations of Cryptography
        </Text>
        
        {/* Plaintext to Ciphertext transformation */}
        <group position={[-3, 0, 0]} scale={textReveal(30)}>
          <CubistShape
            type="cube"
            size={DIMENSIONS.shapes.large}
            color={COLORS.plaintext}
            material="neon"
            opacity={entranceSpring}
            position={[0, 0, 0]}
          />
          <Text
            position={[0, -1.5, 0]}
            fontSize={DIMENSIONS.text.body}
            color={COLORS.plaintext}
            anchorX="center"
            anchorY="middle"
          >
            Plaintext
          </Text>
        </group>

        {/* Animated arrow showing encryption process */}
        <group position={[0, 0, 0]} scale={textReveal(60)}>
          <CubistShape
            type="cylinder"
            size={[0.05, 0.05, 2]}
            color={COLORS.textSecondary}
            material="glossy"
            rotation={[0, 0, Math.PI / 2]}
            opacity={entranceSpring}
          />
          <Text
            position={[0, 0.5, 0]}
            fontSize={DIMENSIONS.text.label}
            color={COLORS.textWarm}
            anchorX="center"
            anchorY="middle"
          >
            Encryption
          </Text>
        </group>

        <group position={[3, 0, 0]} scale={textReveal(90)}>
          <CubistShape
            type="cube"
            size={DIMENSIONS.shapes.large}
            color={COLORS.ciphertext}
            material="holographic"
            fragmented={transformProgress > 0.5}
            opacity={entranceSpring}
            rotation={[
              transformProgress * 0.3,
              transformProgress * 0.2,
              transformProgress * 0.1
            ]}
          />
          <Text
            position={[0, -1.5, 0]}
            fontSize={DIMENSIONS.text.body}
            color={COLORS.ciphertext}
            anchorX="center"
            anchorY="middle"
          >
            Ciphertext
          </Text>
        </group>

        {/* Key visualization */}
        <group position={[0, -2.5, 0]} scale={textReveal(120)}>
          <CubistShape
            type="sphere"
            size={DIMENSIONS.shapes.medium}
            color={COLORS.key}
            material="neon"
            position={[-1.5, 0, 0]}
            opacity={entranceSpring}
          />
          <Text
            position={[-1.5, -1, 0]}
            fontSize={DIMENSIONS.text.label}
            color={COLORS.key}
            anchorX="center"
            anchorY="middle"
          >
            Private Key
          </Text>
          
          <CubistShape
            type="sphere"
            size={DIMENSIONS.shapes.medium}
            color={COLORS.key}
            material="holographic"
            position={[1.5, 0, 0]}
            opacity={entranceSpring * 0.8}
          />
          <Text
            position={[1.5, -1, 0]}
            fontSize={DIMENSIONS.text.label}
            color={COLORS.key}
            anchorX="center"
            anchorY="middle"
          >
            Public Key
          </Text>
        </group>
      </group>
    );
  };

  // Render randomness with dynamic particle effects
  const renderRandomness = () => {
    const predictableNodes = [0, 1, 2, 3];

    return (
      <group>
        <Text
          position={[0, 3.5, 0]}
          fontSize={DIMENSIONS.text.title}
          color={COLORS.accent}
          anchorX="center"
          anchorY="middle"
        >
          Why Randomness Matters
        </Text>
        
        {/* Predictable (unsafe) pattern */}
        <group position={[-3, 1, 0]} scale={textReveal(30)}>
          <Text
            position={[0, 1.5, 0]}
            fontSize={DIMENSIONS.text.subtitle}
            color={COLORS.vulnerable}
            anchorX="center"
            anchorY="middle"
          >
            Predictable (Unsafe)
          </Text>
          
          {predictableNodes.map((i) => (
            <CubistShape
              key={i}
              type="cube"
              size={DIMENSIONS.shapes.small}
              color={COLORS.vulnerable}
              material="glossy"
              position={[i * 0.4 - 0.6, 0, 0]}
              opacity={entranceSpring}
            />
          ))}
        </group>

        {/* Cryptographically secure pattern with particles */}
        <group position={[3, 1, 0]} scale={textReveal(60)}>
          <Text
            position={[0, 1.5, 0]}
            fontSize={DIMENSIONS.text.subtitle}
            color={COLORS.secure}
            anchorX="center"
            anchorY="middle"
          >
            Cryptographically Secure
          </Text>
          
          <ParticleSystem
            type="randomness"
            intensity={sectionProgress}
            color={COLORS.secure}
            center={[0, 0, 0]}
          />
        </group>

        {/* Warning message */}
        <group position={[0, -1.5, 0]} scale={textReveal(90)}>
          <Text
            position={[0, 0, 0]}
            fontSize={DIMENSIONS.text.body}
            color={COLORS.textWarm}
            anchorX="center"
            anchorY="middle"
          >
            Never use Math.random() for cryptography!
          </Text>
        </group>
      </group>
    );
  };

  // Render threshold cryptography with network visualization
  const renderThreshold = () => {
    const thresholdValue = 3;
    const totalNodes = 5;
    const activeNodes = sectionProgress > 0.6 ? [0, 1, 2] : [];

    return (
      <group>
        <Text
          position={[0, 3.5, 0]}
          fontSize={DIMENSIONS.text.title}
          color={COLORS.accent}
          anchorX="center"
          anchorY="middle"
        >
          Threshold Cryptography
        </Text>
        
        <NetworkVisualization
          nodeCount={totalNodes}
          threshold={thresholdValue}
          activeNodes={activeNodes}
          showConnections={true}
          animateSignals={sectionProgress > 0.8}
          center={[0, 0, 0]}
          radius={2.5}
        />
        
        <Text
          position={[0, -3.5, 0]}
          fontSize={DIMENSIONS.text.body}
          color={COLORS.textPrimary}
          anchorX="center"
          anchorY="middle"
        >
          Any {thresholdValue} of {totalNodes} participants can reconstruct the secret
        </Text>
      </group>
    );
  };

  // Render Shamir's Secret Sharing with mathematical formulas
  const renderShamir = () => {
    const showFormula = sectionProgress > 0.3;
    const showShares = sectionProgress > 0.6;

    return (
      <group>
        <Text
          position={[0, 3.5, 0]}
          fontSize={DIMENSIONS.text.title}
          color={COLORS.accent}
          anchorX="center"
          anchorY="middle"
        >
          Shamir's Secret Sharing
        </Text>
        
        {/* Central secret */}
        <CubistShape
          type="sphere"
          size={DIMENSIONS.shapes.large}
          color={COLORS.secret}
          material="neon"
          position={[0, 1, 0]}
          opacity={entranceSpring * (1 - sectionProgress * 0.7)}
        />
        
        {/* Polynomial formula */}
        {showFormula && (
          <Text
            position={[0, 0, 0]}
            fontSize={DIMENSIONS.text.body}
            color={COLORS.textAccent}
            anchorX="center"
            anchorY="middle"
          >
            {FORMULAS.shamir.polynomial}
          </Text>
        )}
        
        {/* Animated shares distribution */}
        {showShares && FORMULAS.shamir.shares.map((share, i) => {
          const angle = (i / 3) * Math.PI * 2;
          const radius = 2.5;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <group key={i} position={[x, y, 0]} scale={textReveal(90 + i * 20)}>
              <CubistShape
                type="cube"
                size={DIMENSIONS.shapes.small}
                color={COLORS.share}
                material="holographic"
                opacity={entranceSpring}
              />
              <Text
                position={[0, -0.8, 0]}
                fontSize={DIMENSIONS.text.tiny}
                color={COLORS.share}
                anchorX="center"
                anchorY="middle"
              >
                {share}
              </Text>
            </group>
          );
        })}
      </group>
    );
  };

  // Main section renderer
  const renderCurrentSection = () => {
    switch (currentSection) {
      case "intro":
        return renderIntro();
      case "foundations":
        return renderFoundations();
      case "randomness":
        return renderRandomness();
      case "threshold":
        return renderThreshold();
      case "shamir":
        return renderShamir();
      // Add more sections here...
      default:
        return (
          <Text
            position={[0, 0, 0]}
            fontSize={DIMENSIONS.text.title}
            color={COLORS.textPrimary}
            anchorX="center"
            anchorY="middle"
          >
            {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
          </Text>
        );
    }
  };

  return (
    <group>
      {renderCurrentSection()}
      
      {/* Section progress indicator */}
      <group position={[4, -3, 0]}>
        <mesh>
          <boxGeometry args={[sectionProgress * 2, 0.1, 0.1]} />
          <meshStandardMaterial
            color={COLORS.textAccent}
            emissive={COLORS.textAccent}
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </group>
  );
};