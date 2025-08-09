import React from "react";
import { Vector3 } from "@react-three/fiber";
import { COLORS, MATERIALS, FRAGMENTATION_PATTERNS } from "../helpers/cubism-styles";

interface CubistShapeProps {
  type: "cube" | "plane" | "sphere" | "cylinder";
  position?: Vector3;
  size?: number | [number, number] | [number, number, number];
  color?: string;
  material?: "neon" | "glossy" | "holographic" | "matte" | "plasma" | "crystal";
  fragmented?: boolean;
  opacity?: number;
  rotation?: Vector3;
}

export const CubistShape: React.FC<CubistShapeProps> = ({
  type,
  position = [0, 0, 0],
  size = 1,
  color = COLORS.primary,
  material = "neon",
  fragmented = false,
  opacity = 1,
  rotation = [0, 0, 0],
}) => {
  // Safe access to material properties with fallback
  const materialProps = MATERIALS[material] || MATERIALS.neon;

  const renderGeometry = () => {
    switch (type) {
      case "cube": {
        const cubeSize = Array.isArray(size) ? size[0] : size;
        return <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />;
      }
      case "plane": {
        const planeSize = Array.isArray(size) ? size as [number, number] : [size, size];
        return <planeGeometry args={[planeSize[0], planeSize[1]]} />;
      }
      case "sphere": {
        const sphereSize = Array.isArray(size) ? size[0] : size;
        return <sphereGeometry args={[sphereSize, 16, 16]} />;
      }
      case "cylinder": {
        const cylinderSize = Array.isArray(size) ? size[0] : size;
        return <cylinderGeometry args={[cylinderSize, cylinderSize, cylinderSize * 2, 8]} />;
      }
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  const renderMaterial = () => (
    <meshStandardMaterial
      color={color}
      transparent
      opacity={opacity}
      roughness={materialProps.roughness}
      metalness={materialProps.metalness}
      emissive={materialProps.emissive ? color : "#000000"}
      emissiveIntensity={
        'emissiveIntensity' in materialProps ? materialProps.emissiveIntensity : 0
      }
    />
  );

  if (fragmented) {
    const pattern = FRAGMENTATION_PATTERNS.simple;
    return (
      <group position={position} rotation={rotation as [number, number, number]}>
        {pattern.map((fragment, index: number) => (
          <mesh
            key={index}
            position={fragment.offset as [number, number, number]}
            rotation={fragment.rotation as [number, number, number]}
          >
            {renderGeometry()}
            {renderMaterial()}
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <mesh position={position} rotation={rotation as [number, number, number]}>
      {renderGeometry()}
      {renderMaterial()}
    </mesh>
  );
};