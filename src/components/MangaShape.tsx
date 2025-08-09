import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { MANGA_COLORS } from "../helpers/manga-styles";

interface MangaShapeProps {
  type: "scroll" | "machine" | "key" | "shield" | "document" | "stamp" | "chain" | "transaction" | "publicKey" | "dice" | "safe" | "giantKey" | "shatteredKey" | "combinedPower" | "polynomialGraph" | "secretDot" | "blackboard" | "polynomial" | "secretStar" | "sharePoints" | "secretPile" | "miniBlackboards" | "shareNetwork" | "hand" | "receivedShares" | "keyShare" | "groupSecret" | "ghostlyKey" | "messageScroll" | "signature" | "noDice" | "signatureOrbs" | "aggregatedSignature" | "geometricShape" | "point" | "magicPortal" | "result" | "numberPool" | "generatorPoint" | "hashMachine" | "curvePoint" | "secretKey" | "splitScreen" | "pairingFunction" | "resultOrb" | "checkmark" | "partialSignatures" | "lagrangeCoefficients" | "finalSignature" | "bigX" | "regularAccount" | "priceTag" | "privacyShield" | "multisigComplex" | "encryptedMessage" | "groupPublicKeys" | "partialDecryptions" | "plaintextScroll" | "sealedEnvelope" | "timedDocument" | "wallet" | "hardware" | "device" | "shadowyHand" | "stamps" | "cashRegister" | "magnifyingGlass" | "multisigTransaction" | "signerIcons" | "singleSlot" | "singleSignature" | "vault" | "thresholdGroup" | "secureVault" | "ethereumLogo" | "beaconLight" | "drandLogo" | "randomnessOrb" | "filecoinLogo" | "chiaLogo" | "blockStack";
  position: { x: number; y: number };
  scale?: number;
  color?: string;
  label?: string;
  animated?: boolean;
  hidden?: boolean;
  glowing?: boolean;
  scrambled?: boolean;
  protective?: boolean;
  stamping?: boolean;
  connecting?: boolean;
  signing?: boolean;
  predictable?: boolean;
  cracked?: boolean;
  solid?: boolean;
  random?: boolean;
  crushing?: boolean;
  shattering?: boolean;
  highlighted?: number;
  total?: number;
  pulsing?: boolean;
  flying?: boolean;
  labels?: string[];
  connecting?: boolean;
  reconstructing?: boolean;
  revealed?: boolean;
  overwhelming?: boolean;
  multiple?: boolean;
  network?: boolean;
  combining?: boolean;
  forming?: boolean;
  ethereal?: boolean;
  outline?: boolean;
  compact?: boolean;
  identical?: boolean;
  floating?: boolean;
  large?: boolean;
  shape?: "sphere" | "cube" | "pyramid";
  magical?: boolean;
  exponent?: string;
  swirling?: boolean;
  derived?: boolean;
  futuristic?: boolean;
  whirring?: boolean;
  transforming?: boolean;
  result?: boolean;
  multiplier?: boolean;
  sleek?: boolean;
  notForming?: boolean;
  deterministic?: boolean;
  cheap?: boolean;
  private?: boolean;
  multiPart?: boolean;
  crossed?: boolean;
  powerful?: boolean;
  locked?: boolean;
  traveling?: boolean;
  distributed?: boolean;
  cloud?: boolean;
  pieces?: boolean;
  unreadable?: boolean;
  snapping?: boolean;
  readable?: boolean;
  ticking?: boolean;
  recovering?: boolean;
  smoking?: boolean;
  sparking?: boolean;
  seized?: boolean;
  grabbing?: boolean;
  slow?: boolean;
  laborious?: boolean;
  highFees?: boolean;
  examining?: boolean;
  revealing?: boolean;
  exposed?: boolean;
  bumping?: boolean;
  notFitting?: boolean;
  indistinguishable?: boolean;
  failing?: boolean;
  beaming?: boolean;
  unpredictable?: boolean;
  efficient?: boolean;
  stacking?: boolean;
}

export const MangaShape: React.FC<MangaShapeProps> = ({
  type,
  position,
  scale = 1,
  color = MANGA_COLORS.shape,
  label,
  animated = false,
  hidden = false,
  glowing = false,
  scrambled = false,
  protective = false,
  stamping = false,
  connecting = false,
  signing = false,
  predictable = false,
  cracked = false,
  solid = false,
  random = false,
  crushing = false,
  shattering = false,
  highlighted,
  total,
  pulsing = false,
  flying = false,
  labels,
  reconstructing = false,
  revealed = false,
  overwhelming = false,
  multiple = false,
  network = false,
  combining = false,
  forming = false,
  ethereal = false,
  outline = false,
  compact = false,
  identical = false,
  floating = false,
  large = false,
  shape,
  magical = false,
  exponent,
  swirling = false,
  derived = false,
  futuristic = false,
  whirring = false,
  transforming = false,
  result = false,
  multiplier = false,
  sleek = false,
  notForming = false,
  deterministic = false,
  cheap = false,
  multiPart = false,
  crossed = false,
  powerful = false,
  locked = false,
  traveling = false,
  distributed = false,
  cloud = false,
  pieces = false,
  unreadable = false,
  snapping = false,
  readable = false,
  ticking = false,
  recovering = false,
  smoking = false,
  sparking = false,
  seized = false,
  grabbing = false,
  slow = false,
  laborious = false,
  highFees = false,
  examining = false,
  revealing = false,
  exposed = false,
  bumping = false,
  notFitting = false,
  indistinguishable = false,
  failing = false,
  beaming = false,
  unpredictable = false,
  efficient = false,
  stacking = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animation helpers
  const bounce = Math.sin(frame * 0.2) * 5;
  const rotate = frame * 2;
  const pulse = interpolate(Math.sin(frame * 0.15), [-1, 1], [0.9, 1.1]);
  const wiggle = Math.sin(frame * 0.4) * 3;
  const float = Math.sin(frame * 0.1) * 10;

  const shapeStyle: React.CSSProperties = {
    position: "absolute",
    left: position.x,
    top: position.y,
    transform: `translate(-50%, -50%) scale(${scale}) ${animated ? `rotate(${rotate}deg)` : ""} ${pulsing ? `scale(${pulse})` : ""} ${flying ? `translateY(${float}px)` : ""} ${floating ? `translateY(${bounce}px)` : ""} ${shattering ? `rotate(${wiggle}deg)` : ""} ${transforming ? `scale(${pulse}) rotate(${rotate}deg)` : ""} ${traveling ? `translateX(${bounce}px)` : ""} ${bumping ? `translateX(${wiggle}px)` : ""}`,
    fontSize: large ? "80px" : "60px",
    color,
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    filter: glowing ? "drop-shadow(0 0 15px currentColor)" : hidden ? "brightness(0.3)" : "none",
    opacity: ethereal ? 0.6 : outline ? 0.4 : 1,
    zIndex: 5,
    textAlign: "center",
  };

  const getShapeEmoji = () => {
    switch (type) {
      case "scroll":
        return scrambled ? "📜❓" : "📜";
      case "machine":
        return animated ? "⚙️🔧" : "🏭";
      case "key":
        if (hidden) return "🗝️🫥";
        if (glowing) return "🗝️✨";
        return "🗝️";
      case "shield":
        return protective ? "🛡️⚡" : "🛡️";
      case "document":
        return "📄";
      case "stamp":
        return stamping ? "📝💥" : "📝";
      case "chain":
        return connecting ? "🔗⚡" : "🔗";
      case "transaction":
        return signing ? "📋✍️" : "📋";
      case "publicKey":
        return glowing ? "🔑✨" : "🔑";
      case "dice":
        if (predictable) return "🎲3️⃣";
        if (random) return "🎲🌟";
        return "🎲";
      case "safe":
        if (cracked) return "🔓💥";
        if (solid) return "🔒✨";
        return "🔒";
      case "giantKey":
        return crushing ? "🗝️💥" : "🗝️";
      case "shatteredKey":
        return shattering ? "🗝️💥" : "🔑🔑🔑";
      case "combinedPower":
        return glowing ? "⚡✨" : "⚡";
      case "polynomialGraph":
        return glowing ? "📈✨" : "📈";
      case "secretDot":
        return pulsing ? "⭐💫" : "⭐";
      case "blackboard":
        return "⬛";
      case "polynomial":
        return animated ? "📈⚡" : reconstructing ? "📈🔄" : "📈";
      case "secretStar":
        if (revealed) return "⭐✨";
        return glowing ? "⭐💫" : "⭐";
      case "sharePoints":
        if (flying) return "🔵💨";
        if (connecting) return "🔵🔗";
        return "🔵🔵🔵";
      case "secretPile":
        return overwhelming ? "📚💥" : "📚";
      case "miniBlackboards":
        return multiple ? "⬛⬛⬛" : "⬛";
      case "shareNetwork":
        return network ? "🕸️⚡" : "🕸️";
      case "hand":
        return "✋";
      case "receivedShares":
        return combining ? "🔵🔄" : flying ? "🔵💨" : "🔵";
      case "keyShare":
        return forming ? "🔑✨" : "🔑";
      case "groupSecret":
        return ethereal ? "👻🔑" : random ? "🔑🌟" : "🔑";
      case "ghostlyKey":
        return outline ? "👻🔑" : notForming ? "👻❌" : "👻🔑";
      case "messageScroll":
        return identical ? "📜📜" : "📜";
      case "signature":
        if (compact) return "📝✨";
        if (sleek) return "📝🌟";
        if (result) return "📝✅";
        return "📝";
      case "noDice":
        return "🎲❌";
      case "signatureOrbs":
        return floating ? "🔮💨" : multiple ? "🔮🔮🔮" : "🔮";
      case "aggregatedSignature":
        return large ? "🔮✨" : glowing ? "🔮💫" : "🔮";
      case "geometricShape":
        switch (shape) {
          case "sphere": return "🔵";
          case "cube": return "🟦";
          case "pyramid": return "🔺";
          default: return "🔵";
        }
      case "point":
        return "📍";
      case "magicPortal":
        return magical ? "🌀✨" : "🌀";
      case "result":
        return exponent ? `🎯${exponent}` : "🎯";
      case "numberPool":
        return swirling ? "🔢🌀" : "🔢";
      case "generatorPoint":
        return glowing ? "📍✨" : "📍";
      case "hashMachine":
        return whirring ? "🏭⚙️" : futuristic ? "🏭✨" : "🏭";
      case "curvePoint":
        return transforming ? "📍🔄" : glowing ? "📍✨" : "📍";
      case "secretKey":
        return multiplier ? "🔑✖️" : "🔑";
      case "splitScreen":
        return "📱";
      case "pairingFunction":
        return "🔗";
      case "resultOrb":
        return "🔮";
      case "checkmark":
        return large ? "✅✨" : "✅";
      case "partialSignatures":
        if (gathering) return "📝🤲";
        return multiple ? "📝📝📝" : "📝";
      case "lagrangeCoefficients":
        return glowing ? "🔢✨" : "🔢";
      case "finalSignature":
        return powerful ? "📝⚡" : sleek ? "📝🌟" : "📝";
      case "bigX":
        return large ? "❌💥" : "❌";
      case "regularAccount":
        return identical ? "👤👤" : indistinguishable ? "👤✨" : "👤";
      case "priceTag":
        return cheap ? "💰⬇️" : "💰";
      case "privacyShield":
        return protective ? "🛡️🔒" : "🛡️";
      case "multisigComplex":
        return crossed ? "🔗❌" : multiPart ? "🔗🔗🔗" : "🔗";
      case "encryptedMessage":
        return traveling ? "📨💨" : locked ? "📨🔒" : "📨";
      case "groupPublicKeys":
        return cloud ? "☁️🔑" : distributed ? "🔑🔑🔑" : glowing ? "🔑✨" : "🔑";
      case "partialDecryptions":
        if (snapping) return "🧩🔄";
        return pieces ? "🧩🧩🧩" : unreadable ? "🧩❓" : "🧩";
      case "plaintextScroll":
        return revealed ? "📜✨" : readable ? "📜✅" : "📜";
      case "sealedEnvelope":
        return "✉️🔒";
      case "timedDocument":
        return ticking ? "📄⏰" : "📄";
      case "wallet":
        return recovering ? "👛🔄" : "👛";
      case "hardware":
        return smoking ? "💻💨" : sparking ? "💻⚡" : "💻";
      case "device":
        return seized ? "📱✋" : "📱";
      case "shadowyHand":
        return grabbing ? "🖤✋" : "🖤";
      case "stamps":
        return slow ? "📝⏳" : laborious ? "📝💪" : multiple ? "📝📝📝" : "📝";
      case "cashRegister":
        return highFees ? "💰⬆️" : "💰";
      case "magnifyingGlass":
        return examining ? "🔍👀" : "🔍";
      case "multisigTransaction":
        return revealing ? "📋🔍" : "📋";
      case "signerIcons":
        return exposed ? "👤👤👤" : multiple ? "👤👤👤" : "👤";
      case "singleSlot":
        return "🔲";
      case "singleSignature":
        return compact ? "📝✨" : sleek ? "📝🌟" : "📝";
      case "vault":
        return glowing ? "🏦✨" : "🏦";
      case "thresholdGroup":
        return "👥";
      case "secureVault":
        return "🏦🔒";
      case "ethereumLogo":
        return "Ξ";
      case "beaconLight":
        return beaming ? "📡⬆️" : "📡";
      case "drandLogo":
        return "🎲";
      case "randomnessOrb":
        return unpredictable ? "🔮🌀" : glowing ? "🔮✨" : "🔮";
      case "filecoinLogo":
        return "📁";
      case "chiaLogo":
        return "🌱";
      case "blockStack":
        return stacking ? "🧱⬆️" : efficient ? "🧱✨" : "🧱";
      default:
        return "⭐";
    }
  };

  const getLabelElement = () => {
    if (!label) return null;
    
    return (
      <div
        style={{
          position: "absolute",
          top: "70px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "16px",
          fontWeight: "bold",
          color: MANGA_COLORS.label,
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "4px 8px",
          borderRadius: "8px",
          border: "2px solid #333",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </div>
    );
  };

  const getMultipleLabels = () => {
    if (!labels || !multiple) return null;
    
    return labels.map((lbl, index) => (
      <div
        key={index}
        style={{
          position: "absolute",
          top: `${70 + index * 25}px`,
          left: `${(index - labels.length/2) * 60}px`,
          transform: "translateX(-50%)",
          fontSize: "14px",
          fontWeight: "bold",
          color: MANGA_COLORS.label,
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "2px 6px",
          borderRadius: "6px",
          border: "1px solid #333",
          whiteSpace: "nowrap",
        }}
      >
        {lbl}
      </div>
    ));
  };

  return (
    <div style={shapeStyle}>
      {getShapeEmoji()}
      {getLabelElement()}
      {getMultipleLabels()}
    </div>
  );
};