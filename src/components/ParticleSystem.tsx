import React, { useMemo } from "react";
import { useCurrentFrame } from "remotion";
import { random } from "remotion";
import { COLORS, PARTICLES } from "../helpers/cubism-styles";

interface ParticleSystemProps {
  type: "randomness" | "encryption" | "network" | "threshold";
  intensity?: number;
  color?: string;
  center?: [number, number, number];
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  type,
  intensity = 1,
  color = COLORS.electric,
  center = [0, 0, 0],
}) => {
  const frame = useCurrentFrame();
  const config = PARTICLES[type];
  
  const particles = useMemo(() => {
    return Array.from({ length: Math.floor(config.count * intensity) }, (_, i) => ({
      id: i,
      initialPosition: [
        random(`particle-x-${i}`) * config.spread - config.spread / 2,
        random(`particle-y-${i}`) * config.spread - config.spread / 2,
        random(`particle-z-${i}`) * config.spread - config.spread / 2,
      ] as [number, number, number],
      speed: random(`particle-speed-${i}`) * config.speed + config.speed * 0.5,
      phase: random(`particle-phase-${i}`) * Math.PI * 2,
    }));
  }, [config, intensity]);

  return (
    <group position={center}>
      {particles.map((particle) => {
        const time = frame * particle.speed;
        const x = particle.initialPosition[0] + Math.sin(time + particle.phase) * 0.5;
        const y = particle.initialPosition[1] + Math.cos(time + particle.phase * 1.3) * 0.3;
        const z = particle.initialPosition[2] + Math.sin(time * 0.7 + particle.phase) * 0.2;
        
        const opacity = 0.3 + Math.sin(time * 2 + particle.phase) * 0.2;
        
        return (
          <mesh key={particle.id} position={[x, y, z]}>
            <sphereGeometry args={[config.size, 8, 8]} />
            <meshStandardMaterial
              color={color}
              transparent
              opacity={opacity}
              emissive={color}
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
};