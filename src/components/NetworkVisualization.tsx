import React, { useMemo } from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { random } from "remotion";
import { COLORS, DIMENSIONS } from "../helpers/cubism-styles";

interface NetworkNodeProps {
  nodeCount: number;
  threshold?: number;
  activeNodes?: number[];
  showConnections?: boolean;
  animateSignals?: boolean;
  center?: [number, number, number];
  radius?: number;
}

export const NetworkVisualization: React.FC<NetworkNodeProps> = ({
  nodeCount,
  threshold,
  activeNodes = [],
  showConnections = true,
  animateSignals = false,
  center = [0, 0, 0],
  radius = 2.5,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Generate node positions in a circle
  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }, (_, i) => {
      const angle = (i / nodeCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (random(`node-z-${i}`) - 0.5) * 0.5;
      
      return {
        id: i,
        position: [x, y, z] as [number, number, number],
        isActive: activeNodes.includes(i),
        phase: random(`node-phase-${i}`) * Math.PI * 2,
      };
    });
  }, [nodeCount, activeNodes, radius]);

  // Connection lines between nodes
  const connections = useMemo(() => {
    if (!showConnections) return [];
    
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (threshold && activeNodes.length >= threshold) {
          // Only show connections between active nodes
          if (nodes[i].isActive && nodes[j].isActive) {
            lines.push({ from: nodes[i], to: nodes[j] });
          }
        } else {
          // Show all connections with low opacity
          lines.push({ from: nodes[i], to: nodes[j] });
        }
      }
    }
    return lines;
  }, [nodes, showConnections, threshold, activeNodes]);

  // Animated signals traveling between nodes
  const signals = useMemo(() => {
    if (!animateSignals || connections.length === 0) return [];
    
    return connections.slice(0, 3).map((connection, i) => ({
      ...connection,
      signalPhase: (frame * 0.1 + i * 0.5) % 1,
    }));
  }, [connections, animateSignals, frame]);

  const nodeAnimation = spring({
    frame,
    fps,
    config: { damping: 200, mass: 1 },
  });

  return (
    <group position={center}>
      {/* Render connections */}
      {connections.map((connection, i) => {
        const opacity = connection.from.isActive && connection.to.isActive ? 0.6 : 0.1;
        const color = connection.from.isActive && connection.to.isActive 
          ? COLORS.active 
          : COLORS.connection;
          
        return (
          <line key={`connection-${i}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array([
                  ...connection.from.position,
                  ...connection.to.position,
                ]), 3]}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color={color} transparent opacity={opacity} />
          </line>
        );
      })}

      {/* Render animated signals */}
      {signals.map((signal, i) => {
        const t = signal.signalPhase;
        const signalPos = [
          signal.from.position[0] + (signal.to.position[0] - signal.from.position[0]) * t,
          signal.from.position[1] + (signal.to.position[1] - signal.from.position[1]) * t,
          signal.from.position[2] + (signal.to.position[2] - signal.from.position[2]) * t,
        ] as [number, number, number];

        return (
          <mesh key={`signal-${i}`} position={signalPos}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial
              color={COLORS.electric}
              emissive={COLORS.electric}
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}

      {/* Render nodes */}
      {nodes.map((node) => {
        const scale = node.isActive ? 1.2 : 0.8;
        const pulseIntensity = node.isActive ? 
          0.3 + Math.sin(frame * 0.2 + node.phase) * 0.2 : 0.1;
        
        const nodeColor = node.isActive ? COLORS.active : COLORS.node;
        
        return (
          <mesh 
            key={`node-${node.id}`} 
            position={node.position}
            scale={[scale * nodeAnimation, scale * nodeAnimation, scale * nodeAnimation]}
          >
            <sphereGeometry args={[DIMENSIONS.shapes.small, 16, 16]} />
            <meshStandardMaterial
              color={nodeColor}
              emissive={nodeColor}
              emissiveIntensity={pulseIntensity}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        );
      })}

      {/* Threshold indicator */}
      {threshold && (
        <group position={[0, -radius - 1, 0]}>
          <mesh>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial
              color={activeNodes.length >= threshold ? COLORS.secure : COLORS.vulnerable}
              emissive={activeNodes.length >= threshold ? COLORS.secure : COLORS.vulnerable}
              emissiveIntensity={0.3}
            />
          </mesh>
        </group>
      )}
    </group>
  );
};