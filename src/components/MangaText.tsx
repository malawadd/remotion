import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { MANGA_COLORS } from "../helpers/manga-styles";

interface MangaTextProps {
  text: string;
  position: { x: number; y: number };
  type?: "speech" | "thought" | "narrator" | "whisper" | "evil" | "shield" | "strained" | "group" | "unison" | "excited" | "confident" | "annoyed" | "dramatic";
  scale?: number;
  large?: boolean;
  opacity?: number;
}

export const MangaText: React.FC<MangaTextProps> = ({
  text,
  position,
  type = "speech",
  scale = 1,
  large = false,
  opacity = 1,
}) => {
  const frame = useCurrentFrame();
  
  // Animation effects
  const shake = type === "dramatic" ? Math.sin(frame * 0.5) * 2 : 0;
  const pulse = type === "excited" ? interpolate(Math.sin(frame * 0.2), [-1, 1], [0.9, 1.1]) : 1;

  const getBubbleStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: "absolute",
      left: position.x,
      top: position.y,
      transform: `translate(-50%, -50%) scale(${scale * pulse}) translateX(${shake}px)`,
      padding: "15px 25px",
      borderRadius: "20px",
      fontSize: large ? "32px" : "24px",
      fontWeight: "bold",
      textAlign: "center",
      maxWidth: "400px",
      wordWrap: "break-word",
      zIndex: 20,
      opacity,
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    };

    switch (type) {
      case "speech":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.speechBubble,
          color: MANGA_COLORS.text,
          border: `3px solid ${MANGA_COLORS.bubbleBorder}`,
        };
      case "thought":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.thoughtBubble,
          color: MANGA_COLORS.text,
          border: `3px dashed ${MANGA_COLORS.bubbleBorder}`,
          borderRadius: "50px",
        };
      case "narrator":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.narratorBox,
          color: MANGA_COLORS.narratorText,
          border: `2px solid ${MANGA_COLORS.narratorBorder}`,
          borderRadius: "10px",
          fontStyle: "italic",
        };
      case "whisper":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.whisperBubble,
          color: MANGA_COLORS.whisperText,
          border: `2px solid ${MANGA_COLORS.whisperBorder}`,
          fontSize: "18px",
          opacity: 0.8,
        };
      case "evil":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.evilBubble,
          color: MANGA_COLORS.evilText,
          border: `3px solid ${MANGA_COLORS.evilBorder}`,
          borderRadius: "15px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        };
      case "shield":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.shieldBubble,
          color: MANGA_COLORS.shieldText,
          border: `4px solid ${MANGA_COLORS.shieldBorder}`,
          fontWeight: "900",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
        };
      case "strained":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.strainedBubble,
          color: MANGA_COLORS.strainedText,
          border: `3px solid ${MANGA_COLORS.strainedBorder}`,
          fontStyle: "italic",
          transform: `${baseStyle.transform} rotate(${Math.sin(frame * 0.3) * 2}deg)`,
        };
      case "group":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.groupBubble,
          color: MANGA_COLORS.groupText,
          border: `3px solid ${MANGA_COLORS.groupBorder}`,
          fontWeight: "800",
        };
      case "unison":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.unisonBubble,
          color: MANGA_COLORS.unisonText,
          border: `3px solid ${MANGA_COLORS.unisonBorder}`,
          fontWeight: "800",
          textTransform: "uppercase",
        };
      case "excited":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.excitedBubble,
          color: MANGA_COLORS.excitedText,
          border: `4px solid ${MANGA_COLORS.excitedBorder}`,
          fontWeight: "900",
          textShadow: "2px 2px 4px rgba(255,215,0,0.3)",
        };
      case "confident":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.confidentBubble,
          color: MANGA_COLORS.confidentText,
          border: `3px solid ${MANGA_COLORS.confidentBorder}`,
          fontWeight: "800",
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
        };
      case "annoyed":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.annoyedBubble,
          color: MANGA_COLORS.annoyedText,
          border: `3px solid ${MANGA_COLORS.annoyedBorder}`,
          fontWeight: "700",
        };
      case "dramatic":
        return {
          ...baseStyle,
          backgroundColor: MANGA_COLORS.dramaticBubble,
          color: MANGA_COLORS.dramaticText,
          border: `5px solid ${MANGA_COLORS.dramaticBorder}`,
          fontWeight: "900",
          fontSize: large ? "48px" : "36px",
          textShadow: "3px 3px 6px rgba(0,0,0,0.5)",
          textTransform: "uppercase",
        };
      default:
        return baseStyle;
    }
  };

  const getTail = () => {
    if (type === "thought") {
      return (
        <div
          style={{
            position: "absolute",
            bottom: "-15px",
            left: "30px",
            width: "0",
            height: "0",
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: `15px solid ${MANGA_COLORS.thoughtBubble}`,
            borderRadius: "50%",
          }}
        />
      );
    } else if (type === "speech") {
      return (
        <div
          style={{
            position: "absolute",
            bottom: "-12px",
            left: "40px",
            width: "0",
            height: "0",
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            borderTop: `15px solid ${MANGA_COLORS.speechBubble}`,
          }}
        />
      );
    }
    return null;
  };

  return (
    <div style={getBubbleStyle()}>
      {text}
      {getTail()}
    </div>
  );
};