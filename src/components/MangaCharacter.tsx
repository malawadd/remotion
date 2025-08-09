import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { MANGA_COLORS } from "../helpers/manga-styles";

interface MangaCharacterProps {
  type: "cryptoKun" | "friend" | "crowd" | "villain" | "dealer" | "participants" | "participantsGroup" | "participantsGrid" | "participantsCircle" | "honestParticipant" | "blsRobot" | "signers" | "combiner" | "eyes" | "admin" | "multisigGroup" | "thresholdGroup" | "validators" | "operators" | "friends";
  position: { x: number; y: number };
  scale?: number;
  emotion?: "happy" | "confused" | "determined" | "sneaky" | "proud" | "whispering" | "listening" | "crushed" | "reaching" | "collaborating" | "wise" | "distributing" | "receiving" | "excited" | "overwhelmed" | "concerned" | "active" | "honest" | "confident" | "amazed" | "explaining" | "signing" | "watching" | "frustrated" | "relieved" | "sending" | "decrypting" | "reconstructing" | "helping" | "despairing" | "running" | "bored" | "annoyed" | "thwarted" | "failing" | "validating" | "synchronized" | "picking" | "producing" | "combining";
  count?: number;
  highlighted?: number | boolean;
  total?: number;
  glowing?: boolean;
  holding?: string;
  multiArmed?: boolean;
  tapping?: boolean;
  bumping?: boolean;
  notFitting?: boolean;
  collaborative?: boolean;
  failing?: boolean;
  uniforms?: boolean;
  pose?: "cool";
}

export const MangaCharacter: React.FC<MangaCharacterProps> = ({
  type,
  position,
  scale = 1,
  emotion = "happy",
  count = 1,
  highlighted,
  total,
  glowing = false,
  holding,
  multiArmed = false,
  tapping = false,
  bumping = false,
  notFitting = false,
  collaborative = false,
  failing = false,
  uniforms = false,
  pose,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animation helpers
  const bounce = Math.sin(frame * 0.2) * 5;
  const wiggle = Math.sin(frame * 0.3) * 2;
  const pulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.9, 1.1]);

  const characterStyle: React.CSSProperties = {
    position: "absolute",
    left: position.x,
    top: position.y,
    transform: `translate(-50%, -50%) scale(${scale}) ${tapping ? `translateY(${bounce}px)` : ""} ${bumping ? `translateX(${wiggle}px)` : ""}`,
    fontSize: "60px",
    fontWeight: "bold",
    color: MANGA_COLORS.character,
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    filter: glowing ? "drop-shadow(0 0 10px #FFD700)" : "none",
    zIndex: 10,
  };

  const getCharacterEmoji = () => {
    switch (type) {
      case "cryptoKun":
        switch (emotion) {
          case "happy": return "😊";
          case "confused": return "😕";
          case "determined": return "😤";
          case "sneaky": return "😏";
          case "proud": return "😎";
          case "whispering": return "🤫";
          case "crushed": return "😵";
          case "amazed": return "😲";
          case "explaining": return "🤓";
          case "signing": return "✍️";
          case "frustrated": return "😤";
          case "relieved": return "😌";
          case "sending": return "📤";
          case "despairing": return "😱";
          case "bored": return "😴";
          case "annoyed": return "😒";
          case "picking": return "🤏";
          default: return "😊";
        }
      case "friend":
        return emotion === "listening" ? "👂" : "👥";
      case "crowd":
        switch (emotion) {
          case "excited": return "🎉";
          case "confused": return "❓";
          case "watching": return "👀";
          default: return "👥";
        }
      case "villain":
        switch (emotion) {
          case "evil": return "😈";
          case "thwarted": return "😡";
          case "failing": return "🤕";
          default: return "😈";
        }
      case "dealer":
        switch (emotion) {
          case "wise": return "🧙‍♂️";
          case "distributing": return "🎯";
          case "overwhelmed": return "😰";
          default: return "🧙‍♂️";
        }
      case "participants":
        if (count && count > 1) {
          return "👥".repeat(Math.min(count, 3));
        }
        switch (emotion) {
          case "reaching": return "🙋‍♂️";
          case "receiving": return "🤲";
          case "excited": return "🎉";
          case "confident": return "💪";
          case "active": return "⚡";
          case "decrypting": return "🔓";
          default: return "👤";
        }
      case "participantsGroup":
        return `👥${highlighted ? "✨" : ""}`;
      case "participantsGrid":
        return "🏢";
      case "participantsCircle":
        return "⭕";
      case "honestParticipant":
        return "😇";
      case "blsRobot":
        return pose === "cool" ? "🤖✨" : "🤖";
      case "signers":
        return "✍️".repeat(Math.min(count || 1, 3));
      case "combiner":
        return multiArmed ? "🐙" : "🔧";
      case "eyes":
        return "👀";
      case "admin":
        return emotion === "running" ? "🏃‍♂️💨" : "👨‍💼";
      case "multisigGroup":
        return notFitting ? "👥❌" : "👥";
      case "thresholdGroup":
        return collaborative ? "👥🤝" : "👥";
      case "validators":
        return "⚡".repeat(Math.min(count || 1, 3));
      case "operators":
        return uniforms ? "👮‍♂️".repeat(Math.min(count || 1, 3)) : "👨‍💼".repeat(Math.min(count || 1, 3));
      case "friends":
        return emotion === "helping" ? "🤝" : "👫";
      default:
        return "😊";
    }
  };

  const getAdditionalElements = () => {
    const elements = [];
    
    if (holding === "shares") {
      elements.push(
        <div
          key="shares"
          style={{
            position: "absolute",
            right: "-20px",
            top: "10px",
            fontSize: "20px",
            transform: `scale(${pulse})`,
          }}
        >
          🔑
        </div>
      );
    }
    
    if (holding === "resignation") {
      elements.push(
        <div
          key="resignation"
          style={{
            position: "absolute",
            right: "-30px",
            top: "0px",
            fontSize: "30px",
          }}
        >
          📄
        </div>
      );
    }

    if (highlighted && typeof highlighted === "number" && total) {
      // Show highlighted participants
      for (let i = 0; i < total; i++) {
        elements.push(
          <div
            key={`participant-${i}`}
            style={{
              position: "absolute",
              left: `${(i - total/2) * 40}px`,
              top: "60px",
              fontSize: "30px",
              filter: i < highlighted ? "drop-shadow(0 0 5px #FFD700)" : "grayscale(100%)",
            }}
          >
            👤
          </div>
        );
      }
    }

    return elements;
  };

  return (
    <div style={characterStyle}>
      {getCharacterEmoji()}
      {getAdditionalElements()}
    </div>
  );
};