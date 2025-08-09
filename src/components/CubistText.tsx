import React from "react";
import { Text } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { CUBIST_COLORS, CUBIST_DIMENSIONS } from "../helpers/cubism-styles";

interface CubistTextProps {
  text: string;
  position?: Vector3;
  size?: "title" | "subtitle" | "body";
  color?: string;
  fragmented?: boolean;
  opacity?: number;
}

export const CubistText: React.FC<CubistTextProps> = ({
  text,
  position = [0, 0, 0],
  size = "body",
  color = CUBIST_COLORS.primary,
  fragmented = false,
  opacity = 1,
}) => {
  const fontSize = CUBIST_DIMENSIONS.text[size];

  if (fragmented) {
    // Split text into fragments for Cubist effect
    const words = text.split(" ");
    return (
      <group position={position}>
        {words.map((word, index) => (
          <Text
            key={index}
            position={[
              (index - words.length / 2) * 0.3,
              Math.sin(index * 0.5) * 0.1,
              Math.cos(index * 0.3) * 0.05,
            ]}
            rotation={[
              (Math.random() - 0.5) * 0.2,
              (Math.random() - 0.5) * 0.2,
              (Math.random() - 0.5) * 0.1,
            ]}
            fontSize={fontSize}
            color={color}
            anchorX="center"
            anchorY="middle"
            font="/fonts/inter-bold.woff"
          >
            <meshStandardMaterial
              color={color}
              transparent
              opacity={opacity}
              roughness={0.8}
            />
            {word}
          </Text>
        ))}
      </group>
    );
  }

  return (
    <Text
      position={position}
      fontSize={fontSize}
      color={color}
      anchorX="center"
      anchorY="middle"
      font="/fonts/inter-bold.woff"
    >
      <meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        roughness={0.8}
      />
      {text}
    </Text>
  );
};