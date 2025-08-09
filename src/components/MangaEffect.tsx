import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { MANGA_COLORS } from "../helpers/manga-styles";

interface MangaEffectProps {
  type: "whoosh" | "whirr" | "zap" | "beepBoop" | "sweatDrop" | "shadows" | "shh" | "glint" | "tada" | "shine" | "lock" | "questionMarks" | "scribble" | "clang" | "thump" | "confirmed" | "link" | "verified" | "clackClack" | "sigh" | "crack" | "sneaky" | "villainEye" | "sparkle" | "secure" | "crunch" | "groan" | "sweat" | "shatter" | "click" | "poof" | "reveal" | "chalkScrape" | "swish" | "pop" | "zing" | "aha" | "glow" | "phew" | "worry" | "draw" | "send" | "add" | "shine" | "truth" | "ghostly" | "mystery" | "beepBoop" | "pose" | "dynamicLines" | "snap" | "nope" | "merge" | "hummm" | "pow" | "pick" | "generate" | "hash" | "transform" | "multiply" | "sign" | "compare" | "match" | "ding" | "remember" | "think" | "calculate" | "spark" | "gather" | "fuse" | "illusion" | "smooth" | "stealth" | "unscramble" | "reassemble" | "tickTock" | "friends" | "crash" | "ohNo" | "smoke" | "run" | "grab" | "stampStamp" | "chaChing" | "yawn" | "peek" | "exposed" | "clunk" | "noFit" | "perfect" | "beam" | "collect" | "shimmer" | "random" | "stack" | "fast" | "clickClick" | "speedLines" | "thoughtBubble";
  position: { x: number; y: number };
  scale?: number;
  color?: string;
}

export const MangaEffect: React.FC<MangaEffectProps> = ({
  type,
  position,
  scale = 1,
  color = MANGA_COLORS.effect,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animation helpers
  const bounce = Math.sin(frame * 0.3) * 3;
  const rotate = frame * 2;
  const pulse = interpolate(Math.sin(frame * 0.2), [-1, 1], [0.8, 1.2]);
  const fade = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  const effectStyle: React.CSSProperties = {
    position: "absolute",
    left: position.x,
    top: position.y,
    transform: `translate(-50%, -50%) scale(${scale})`,
    fontSize: "24px",
    fontWeight: "bold",
    color,
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    zIndex: 15,
    opacity: fade,
    pointerEvents: "none",
  };

  const getEffectContent = () => {
    switch (type) {
      case "whoosh":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateX(${bounce}px)` }}>
            💨
          </div>
        );
      case "whirr":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg)` }}>
            ⚙️
          </div>
        );
      case "zap":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            ⚡
          </div>
        );
      case "beepBoop":
        return (
          <div style={effectStyle}>
            🔊
          </div>
        );
      case "sweatDrop":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateY(${Math.abs(bounce)}px)` }}>
            💧
          </div>
        );
      case "shadows":
        return (
          <div style={{ ...effectStyle, color: "#333", opacity: 0.6 }}>
            🌑
          </div>
        );
      case "shh":
        return (
          <div style={effectStyle}>
            🤫
          </div>
        );
      case "glint":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            ✨
          </div>
        );
      case "tada":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            🎉
          </div>
        );
      case "shine":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg)` }}>
            ⭐
          </div>
        );
      case "lock":
        return (
          <div style={effectStyle}>
            🔒
          </div>
        );
      case "questionMarks":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateY(${bounce}px)` }}>
            ❓❓❓
          </div>
        );
      case "scribble":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${Math.sin(frame * 0.5) * 10}deg)` }}>
            ✏️
          </div>
        );
      case "clang":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            💥
          </div>
        );
      case "thump":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            👊
          </div>
        );
      case "confirmed":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            ✅
          </div>
        );
      case "link":
        return (
          <div style={effectStyle}>
            🔗
          </div>
        );
      case "verified":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            ✅
          </div>
        );
      case "clackClack":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateX(${Math.sin(frame * 0.4) * 5}px)` }}>
            🎲
          </div>
        );
      case "sigh":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateY(${bounce}px)` }}>
            😮‍💨
          </div>
        );
      case "crack":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            💥
          </div>
        );
      case "sneaky":
        return (
          <div style={effectStyle}>
            👁️
          </div>
        );
      case "villainEye":
        return (
          <div style={{ ...effectStyle, color: "#FF0000" }}>
            👁️
          </div>
        );
      case "sparkle":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg) scale(${pulse})` }}>
            ✨
          </div>
        );
      case "secure":
        return (
          <div style={{ ...effectStyle, color: "#00FF00" }}>
            🛡️
          </div>
        );
      case "crunch":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            💥
          </div>
        );
      case "groan":
        return (
          <div style={effectStyle}>
            😩
          </div>
        );
      case "sweat":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateY(${Math.abs(bounce)}px)` }}>
            💦
          </div>
        );
      case "shatter":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            💥
          </div>
        );
      case "click":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            👆
          </div>
        );
      case "poof":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            💨
          </div>
        );
      case "reveal":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            🎭
          </div>
        );
      case "chalkScrape":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateX(${Math.sin(frame * 0.3) * 3}px)` }}>
            ✏️
          </div>
        );
      case "swish":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateX(${bounce}px)` }}>
            💨
          </div>
        );
      case "pop":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            🎈
          </div>
        );
      case "zing":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg)` }}>
            ⚡
          </div>
        );
      case "aha":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            💡
          </div>
        );
      case "glow":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})`, filter: "drop-shadow(0 0 10px #FFD700)" }}>
            ✨
          </div>
        );
      case "phew":
        return (
          <div style={effectStyle}>
            😮‍💨
          </div>
        );
      case "worry":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateY(${bounce}px)` }}>
            😰
          </div>
        );
      case "draw":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${Math.sin(frame * 0.3) * 10}deg)` }}>
            ✏️
          </div>
        );
      case "send":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateX(${bounce}px)` }}>
            📤
          </div>
        );
      case "add":
        return (
          <div style={effectStyle}>
            ➕
          </div>
        );
      case "truth":
        return (
          <div style={{ ...effectStyle, color: "#FFD700", transform: `${effectStyle.transform} scale(${pulse})` }}>
            ✨
          </div>
        );
      case "ghostly":
        return (
          <div style={{ ...effectStyle, opacity: 0.5, transform: `${effectStyle.transform} translateY(${bounce}px)` }}>
            👻
          </div>
        );
      case "mystery":
        return (
          <div style={effectStyle}>
            🔮
          </div>
        );
      case "pose":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            💪
          </div>
        );
      case "dynamicLines":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg)` }}>
            ⚡
          </div>
        );
      case "snap":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            👌
          </div>
        );
      case "nope":
        return (
          <div style={effectStyle}>
            ❌
          </div>
        );
      case "merge":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            🔄
          </div>
        );
      case "hummm":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateY(${bounce}px)` }}>
            🎵
          </div>
        );
      case "pow":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            💥
          </div>
        );
      case "pick":
        return (
          <div style={effectStyle}>
            🤏
          </div>
        );
      case "generate":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg)` }}>
            ⚙️
          </div>
        );
      case "hash":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg)` }}>
            #️⃣
          </div>
        );
      case "transform":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            🔄
          </div>
        );
      case "multiply":
        return (
          <div style={effectStyle}>
            ✖️
          </div>
        );
      case "sign":
        return (
          <div style={effectStyle}>
            ✍️
          </div>
        );
      case "compare":
        return (
          <div style={effectStyle}>
            ⚖️
          </div>
        );
      case "match":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            🎯
          </div>
        );
      case "ding":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            🔔
          </div>
        );
      case "remember":
        return (
          <div style={effectStyle}>
            🧠
          </div>
        );
      case "think":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateY(${bounce}px)` }}>
            💭
          </div>
        );
      case "calculate":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg)` }}>
            🧮
          </div>
        );
      case "spark":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            ⚡
          </div>
        );
      case "gather":
        return (
          <div style={effectStyle}>
            🤲
          </div>
        );
      case "fuse":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            🔥
          </div>
        );
      case "illusion":
        return (
          <div style={{ ...effectStyle, opacity: 0.5 }}>
            🎭
          </div>
        );
      case "smooth":
        return (
          <div style={effectStyle}>
            🌊
          </div>
        );
      case "stealth":
        return (
          <div style={{ ...effectStyle, opacity: 0.7 }}>
            🥷
          </div>
        );
      case "unscramble":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg)` }}>
            🔓
          </div>
        );
      case "reassemble":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            🧩
          </div>
        );
      case "tickTock":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg)` }}>
            ⏰
          </div>
        );
      case "friends":
        return (
          <div style={effectStyle}>
            🤝
          </div>
        );
      case "crash":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            💥
          </div>
        );
      case "ohNo":
        return (
          <div style={effectStyle}>
            😱
          </div>
        );
      case "smoke":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateY(${-Math.abs(bounce)}px)` }}>
            💨
          </div>
        );
      case "run":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateX(${bounce}px)` }}>
            💨
          </div>
        );
      case "grab":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            ✋
          </div>
        );
      case "stampStamp":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateY(${Math.sin(frame * 0.5) * 5}px)` }}>
            📝
          </div>
        );
      case "chaChing":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            💰
          </div>
        );
      case "yawn":
        return (
          <div style={effectStyle}>
            😴
          </div>
        );
      case "peek":
        return (
          <div style={effectStyle}>
            👀
          </div>
        );
      case "exposed":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            🔍
          </div>
        );
      case "clunk":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            🔨
          </div>
        );
      case "noFit":
        return (
          <div style={effectStyle}>
            ❌
          </div>
        );
      case "perfect":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            👌
          </div>
        );
      case "beam":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateY(${-Math.abs(bounce)}px)` }}>
            📡
          </div>
        );
      case "collect":
        return (
          <div style={effectStyle}>
            🤲
          </div>
        );
      case "shimmer":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})`, filter: "drop-shadow(0 0 5px #FFD700)" }}>
            ✨
          </div>
        );
      case "random":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg)` }}>
            🎲
          </div>
        );
      case "stack":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateY(${-Math.abs(bounce)}px)` }}>
            📚
          </div>
        );
      case "fast":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} translateX(${bounce}px)` }}>
            💨
          </div>
        );
      case "clickClick":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            👆👆
          </div>
        );
      case "speedLines":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} rotate(${rotate}deg)` }}>
            💨💨💨
          </div>
        );
      case "thoughtBubble":
        return (
          <div style={{ ...effectStyle, transform: `${effectStyle.transform} scale(${pulse})` }}>
            💭
          </div>
        );
      default:
        return (
          <div style={effectStyle}>
            ✨
          </div>
        );
    }
  };

  return getEffectContent();
};