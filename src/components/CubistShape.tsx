import React from "react";
import { Vector3 } from "@react-three/fiber";
import { CUBIST_COLORS, CUBIST_MATERIALS, FRAGMENTATION_PATTERNS } from "../helpers/cubism-styles";

interface CubistShapeProps {
  type: "cube" | "plane" | "sphere" | "cylinder";
  position?: Vector3;
  size?: number | [number, number] | [number, number, number];
  color?: string;
  material?: "matte" | "semiGloss" | "metallic";
  fragmented?: boolean;
  opacity?: number;
  rotation?: Vector3;
}

export const CubistShape: React.FC<CubistShapeProps> = ({
  type,
  position = [0, 0, 0],
  size = 1,
  color = CUBIST_COLORS.primary,
  material = "matte",
  fragmented = false,
  opacity = 1,
  rotation = [0, 0, 0],
}) => {
  const materialProps = CUBIST_MATERIALS[material];

  const renderGeometry = () => {
    switch (type) {
      case "cube":
        const cubeSize = Array.isArray(size) ? size[0] : size;
        return <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />;
      case "plane":
        const planeSize = Array.isArray(size) ? size : [size, size];
        return <planeGeometry args={planeSize} />;
      case "sphere":
        const sphereSize = Array.isArray(size) ? size[0] : size;
        return <sphereGeometry args={[sphereSize, 16, 16]} />;
      case "cylinder":
        const cylinderSize = Array.isArray(size) ? size[0] : size;
        return <cylinderGeometry args={[cylinderSize, cylinderSize, cylinderSize * 2, 8]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  const renderMaterial = () => (
    <meshStandardMaterial
      color={color}
      transparent
      opacity={opacity}
      {...materialProps}
    />
  );

  if (fragmented) {
    const pattern = FRAGMENTATION_PATTERNS.simple;
    return (
      <group position={position} rotation={rotation}>
        {pattern.map((fragment, index) => (
          <mesh
            key={index}
            position={fragment.offset}
            rotation={fragment.rotation}
          >
            {renderGeometry()}
            {renderMaterial()}
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <mesh position={position} rotation={rotation}>
      {renderGeometry()}
      {renderMaterial()}
    </mesh>
  );
};