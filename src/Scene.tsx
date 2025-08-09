import { ThreeCanvas } from "@remotion/three";
import React, { useEffect } from "react";
import { AbsoluteFill, useVideoConfig, useCurrentFrame } from "remotion";
import { z } from "zod";
import { useThree } from "@react-three/fiber";
import { CryptoSection } from "./components/CryptoSection";
import { CUBIST_COLORS, CUBIST_TIMING, CAMERA_POSITIONS } from "./helpers/cubism-styles";

const container: React.CSSProperties = {
  backgroundColor: CUBIST_COLORS.light,
};

export const myCompSchema = z.object({
  section: z.enum(["foundations", "publicKey", "randomness", "threshold", "shamir", "dkg", "bls", "thresholdBls", "encryption", "realWorld"]).optional(),
});

type MyCompSchemaType = z.infer<typeof myCompSchema>;

// Camera component to control 3D camera
const CameraController: React.FC = () => {
  const camera = useThree((state) => state.camera);
  
  useEffect(() => {
    camera.position.set(...CAMERA_POSITIONS.overview);
    camera.near = 0.1;
    camera.far = 1000;
    camera.lookAt(0, 0, 0);
  }, [camera]);
  
  return null;
};

export const Scene: React.FC<
  {
    readonly totalDuration?: number;
  } & MyCompSchemaType
> = ({ section, totalDuration = 1800 }) => { // 60 seconds at 30fps
  const { width, height } = useVideoConfig();
  const frame = useCurrentFrame();
  
  // Define sections with their frame ranges
  const sections = [
    { name: "foundations" as const, start: 0, end: 300 },
    { name: "publicKey" as const, start: 300, end: 450 },
    { name: "randomness" as const, start: 450, end: 600 },
    { name: "threshold" as const, start: 600, end: 750 },
    { name: "shamir" as const, start: 750, end: 900 },
    { name: "dkg" as const, start: 900, end: 1050 },
    { name: "bls" as const, start: 1050, end: 1200 },
    { name: "thresholdBls" as const, start: 1200, end: 1350 },
    { name: "encryption" as const, start: 1350, end: 1500 },
    { name: "realWorld" as const, start: 1500, end: 1800 },
  ];

  return (
    <AbsoluteFill style={container}>
      <ThreeCanvas linear width={width} height={height}>
        <CameraController />
        
        {/* Lighting setup for Cubist aesthetic */}
        <ambientLight intensity={0.6} color={CUBIST_COLORS.light} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8} 
          color={CUBIST_COLORS.light}
          castShadow
        />
        <pointLight 
          position={[-5, 3, 2]} 
          intensity={0.4} 
          color={CUBIST_COLORS.highlight} 
        />
        
        {/* TEMPORARY TEST CUBE */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="blue" />
        </mesh>
        
        {/* Render sections */}
        {section ? (
          // Single section mode (for testing)
          <CryptoSection
            section={section}
            startFrame={0}
            endFrame={300}
          />
        ) : (
          // Full video mode
          sections.map((sectionData) => (
            <CryptoSection
              key={sectionData.name}
              section={sectionData.name}
              startFrame={sectionData.start}
              endFrame={sectionData.end}
            />
          ))
        )}
      </ThreeCanvas>
    </AbsoluteFill>
  );
};
