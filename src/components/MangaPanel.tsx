import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig, Sequence } from "remotion";
import { MangaCharacter } from "./MangaCharacter";
import { MangaText } from "./MangaText";
import { MangaEffect } from "./MangaEffect";
import { MangaShape } from "./MangaShape";
import { MANGA_COLORS, MANGA_TIMING } from "../helpers/manga-styles";

interface MangaPanelProps {
  section: "foundations" | "publicKey" | "randomness" | "threshold" | "shamir" | "dkg" | "bls" | "thresholdBls" | "encryption" | "realWorld";
  startFrame: number;
  endFrame: number;
  width: number;
  height: number;
}

export const MangaPanel: React.FC<MangaPanelProps> = ({
  section,
  startFrame,
  endFrame,
  width,
  height,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Only render if we're in this section's timeframe
  if (frame < startFrame || frame > endFrame) {
    return null;
  }

  const sectionFrame = frame - startFrame;
  const sectionDuration = endFrame - startFrame;

  // Common animation helpers
  const entranceSpring = spring({
    frame: sectionFrame,
    fps,
    config: { damping: 200, mass: 2 },
  });

  const exitSpring = spring({
    frame: sectionFrame - (sectionDuration - 60),
    fps,
    config: { damping: 200, mass: 2 },
  });

  const panelStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `linear-gradient(135deg, ${MANGA_COLORS.background} 0%, ${MANGA_COLORS.panelBg} 100%)`,
    border: `8px solid ${MANGA_COLORS.panelBorder}`,
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  };

  const renderFoundations = () => {
    const panelDuration = 60; // 2 seconds per panel
    const panels = [
      { start: 0, end: 60 },    // Plaintext
      { start: 60, end: 120 },  // Encryption
      { start: 120, end: 180 }, // Ciphertext
      { start: 180, end: 240 }, // Private Key
      { start: 240, end: 300 }, // Public Key
      { start: 300, end: 360 }, // Confidentiality
      { start: 360, end: 420 }, // Integrity
      { start: 420, end: 480 }, // Authenticity
    ];

    return (
      <>
        {/* Panel 1.1: Plaintext */}
        <Sequence from={panels[0].start} durationInFrames={panels[0].end - panels[0].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="happy"
            />
            <MangaShape
              type="scroll"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.plaintext}
              label="SECRET MESSAGE"
            />
            <MangaText
              text="This is my super secret message!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="thoughtBubble"
              position={{ x: width * 0.4, y: height * 0.2 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="whoosh"
              position={{ x: width * 0.6, y: height * 0.3 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 1.2: Encryption */}
        <Sequence from={panels[1].start} durationInFrames={panels[1].end - panels[1].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.2, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="determined"
            />
            <MangaShape
              type="machine"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.machine}
              animated={true}
            />
            <MangaShape
              type="key"
              position={{ x: width * 0.4, y: height * 0.3 }}
              scale={entranceSpring}
              color={MANGA_COLORS.key}
              animated={true}
            />
            <MangaText
              text="Time to make it unreadable!"
              position={{ x: width * 0.2, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="speedLines"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="whirr"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="zap"
              position={{ x: width * 0.7, y: height * 0.6 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 1.3: Ciphertext */}
        <Sequence from={panels[2].start} durationInFrames={panels[2].end - panels[2].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="confused"
            />
            <MangaShape
              type="scroll"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.ciphertext}
              label="GIBBERISH TEXT"
              scrambled={true}
            />
            <MangaText
              text="Whoa! What's this gibberish?!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="sweatDrop"
              position={{ x: width * 0.35, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="beepBoop"
              position={{ x: width * 0.7, y: height * 0.3 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 1.4: Private Key */}
        <Sequence from={panels[3].start} durationInFrames={panels[3].end - panels[3].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="sneaky"
            />
            <MangaShape
              type="key"
              position={{ x: width * 0.7, y: height * 0.6 }}
              scale={entranceSpring}
              color={MANGA_COLORS.privateKey}
              hidden={true}
            />
            <MangaText
              text="This one's MINE! Super secret!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="whisper"
              scale={entranceSpring}
            />
            <MangaEffect
              type="shadows"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="shh"
              position={{ x: width * 0.3, y: height * 0.3 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="glint"
              position={{ x: width * 0.75, y: height * 0.55 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 1.5: Public Key */}
        <Sequence from={panels[4].start} durationInFrames={panels[4].end - panels[4].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="proud"
            />
            <MangaShape
              type="key"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.publicKey}
              glowing={true}
            />
            <MangaCharacter
              type="crowd"
              position={{ x: width * 0.7, y: height * 0.6 }}
              scale={entranceSpring}
              emotion="excited"
            />
            <MangaText
              text="Hey everyone, here's my public key! Use it to send me stuff!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="tada"
              position={{ x: width * 0.5, y: height * 0.3 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="shine"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 1.6: Confidentiality */}
        <Sequence from={panels[5].start} durationInFrames={panels[5].end - panels[5].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="whispering"
            />
            <MangaCharacter
              type="friend"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="listening"
            />
            <MangaCharacter
              type="crowd"
              position={{ x: width * 0.7, y: height * 0.6 }}
              scale={entranceSpring}
              emotion="confused"
            />
            <MangaText
              text="Only for your eyes!"
              position={{ x: width * 0.4, y: height * 0.25 }}
              type="whisper"
              scale={entranceSpring}
            />
            <MangaEffect
              type="lock"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="questionMarks"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 1.7: Integrity */}
        <Sequence from={panels[6].start} durationInFrames={panels[6].end - panels[6].start}>
          <div style={panelStyle}>
            <MangaShape
              type="scroll"
              position={{ x: width * 0.4, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.plaintext}
              label="MESSAGE"
            />
            <MangaCharacter
              type="villain"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
              emotion="evil"
            />
            <MangaShape
              type="shield"
              position={{ x: width * 0.4, y: height * 0.5 }}
              scale={entranceSpring * 1.2}
              color={MANGA_COLORS.secure}
              protective={true}
            />
            <MangaText
              text="Mwahaha! I'll change this!"
              position={{ x: width * 0.6, y: height * 0.25 }}
              type="evil"
              scale={entranceSpring}
            />
            <MangaText
              text="Nuh-uh!"
              position={{ x: width * 0.4, y: height * 0.7 }}
              type="shield"
              scale={entranceSpring * 1.2}
            />
            <MangaEffect
              type="scribble"
              position={{ x: width * 0.5, y: height * 0.45 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="clang"
              position={{ x: width * 0.45, y: height * 0.4 }}
              scale={entranceSpring * 1.2}
            />
          </div>
        </Sequence>

        {/* Panel 1.8: Authenticity */}
        <Sequence from={panels[7].start} durationInFrames={panels[7].end - panels[7].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="proud"
            />
            <MangaShape
              type="document"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.plaintext}
            />
            <MangaShape
              type="stamp"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring * 1.1}
              color={MANGA_COLORS.authentic}
              stamping={true}
            />
            <MangaText
              text="Yep, that's from ME!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="thump"
              position={{ x: width * 0.5, y: height * 0.35 }}
              scale={entranceSpring * 1.1}
            />
            <MangaEffect
              type="confirmed"
              position={{ x: width * 0.6, y: height * 0.3 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>
      </>
    );
  };

  const renderPublicKey = () => {
    const panelDuration = 60;
    const panels = [
      { start: 0, end: 60 },   // Key Pair
      { start: 60, end: 120 }, // Blockchain Context
    ];

    return (
      <>
        {/* Panel 2.1: Key Pair */}
        <Sequence from={panels[0].start} durationInFrames={panels[0].end - panels[0].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="explaining"
            />
            <MangaShape
              type="key"
              position={{ x: width * 0.45, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.privateKey}
              label="Private"
            />
            <MangaShape
              type="key"
              position={{ x: width * 0.55, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.publicKey}
              label="Public"
            />
            <MangaShape
              type="chain"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.connection}
              connecting={true}
            />
            <MangaText
              text="Every pair: Private + Public!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="link"
              position={{ x: width * 0.5, y: height * 0.35 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 2.2: Blockchain Context */}
        <Sequence from={panels[1].start} durationInFrames={panels[1].end - panels[1].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.2, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="signing"
            />
            <MangaShape
              type="transaction"
              position={{ x: width * 0.4, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.transaction}
              signing={true}
            />
            <MangaShape
              type="publicKey"
              position={{ x: width * 0.6, y: height * 0.3 }}
              scale={entranceSpring}
              color={MANGA_COLORS.publicKey}
              glowing={true}
            />
            <MangaCharacter
              type="eyes"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring}
              emotion="watching"
            />
            <MangaText
              text="My SK signs! My PK verifies!"
              position={{ x: width * 0.2, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="scribble"
              position={{ x: width * 0.35, y: height * 0.45 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="verified"
              position={{ x: width * 0.65, y: height * 0.25 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>
      </>
    );
  };

  const renderRandomness = () => {
    const panelDuration = 60;
    const panels = [
      { start: 0, end: 60 },   // Unsafe Randomness
      { start: 60, end: 120 }, // Predictable Leak
      { start: 120, end: 180 }, // CSPRNG Solution
    ];

    return (
      <>
        {/* Panel 3.1: Unsafe Randomness */}
        <Sequence from={panels[0].start} durationInFrames={panels[0].end - panels[0].start}>
          <div style={panelStyle}>
            <MangaShape
              type="dice"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.vulnerable}
              label="math.random"
              predictable={true}
            />
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="frustrated"
            />
            <MangaText
              text="Again?! So predictable!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="clackClack"
              position={{ x: width * 0.5, y: height * 0.3 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="sigh"
              position={{ x: width * 0.35, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="sweatDrop"
              position={{ x: width * 0.35, y: height * 0.4 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 3.2: Predictable Leak */}
        <Sequence from={panels[1].start} durationInFrames={panels[1].end - panels[1].start}>
          <div style={panelStyle}>
            <MangaShape
              type="safe"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.vulnerable}
              cracked={true}
            />
            <MangaCharacter
              type="villain"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring}
              emotion="evil"
            />
            <MangaText
              text="Hehe! Easy pickings!"
              position={{ x: width * 0.7, y: height * 0.25 }}
              type="evil"
              scale={entranceSpring}
            />
            <MangaEffect
              type="crack"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="sneaky"
              position={{ x: width * 0.65, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="villainEye"
              position={{ x: width * 0.55, y: height * 0.45 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 3.3: CSPRNG Solution */}
        <Sequence from={panels[2].start} durationInFrames={panels[2].end - panels[2].start}>
          <div style={panelStyle}>
            <MangaShape
              type="dice"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.secure}
              label="CSPRNG"
              glowing={true}
              random={true}
            />
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="relieved"
            />
            <MangaShape
              type="safe"
              position={{ x: width * 0.7, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.secure}
              solid={true}
            />
            <MangaText
              text="Only CSPRNG for true security!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="sparkle"
              position={{ x: width * 0.5, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="secure"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>
      </>
    );
  };

  const renderThreshold = () => {
    const panelDuration = 60;
    const panels = [
      { start: 0, end: 60 },   // Single Key Problem
      { start: 60, end: 120 }, // Splitting the Secret
      { start: 120, end: 180 }, // Threshold Rule
      { start: 180, end: 240 }, // Shamir Hint
    ];

    return (
      <>
        {/* Panel 4.1: Single Key Problem */}
        <Sequence from={panels[0].start} durationInFrames={panels[0].end - panels[0].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.5, y: height * 0.6 }}
              scale={entranceSpring}
              emotion="crushed"
            />
            <MangaShape
              type="giantKey"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.burden}
              crushing={true}
            />
            <MangaText
              text="Too heavy! Too risky!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="strained"
              scale={entranceSpring}
            />
            <MangaEffect
              type="crunch"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="groan"
              position={{ x: width * 0.45, y: height * 0.7 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="sweat"
              position={{ x: width * 0.48, y: height * 0.55 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 4.2: Splitting the Secret */}
        <Sequence from={panels[1].start} durationInFrames={panels[1].end - panels[1].start}>
          <div style={panelStyle}>
            <MangaShape
              type="shatteredKey"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.keyShards}
              shattering={true}
            />
            <MangaCharacter
              type="participants"
              position={{ x: width * 0.7, y: height * 0.6 }}
              scale={entranceSpring}
              emotion="reaching"
            />
            <MangaText
              text="Split it up!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="thought"
              scale={entranceSpring}
            />
            <MangaEffect
              type="shatter"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="glint"
              position={{ x: width * 0.6, y: height * 0.35 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 4.3: Threshold Rule */}
        <Sequence from={panels[2].start} durationInFrames={panels[2].end - panels[2].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="participantsGroup"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="collaborating"
              highlighted={3}
              total={5}
            />
            <MangaShape
              type="combinedPower"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.power}
              glowing={true}
            />
            <MangaCharacter
              type="participantsGroup"
              position={{ x: width * 0.7, y: height * 0.6 }}
              scale={entranceSpring}
              emotion="confused"
              highlighted={2}
              total={5}
            />
            <MangaText
              text="Any 't' can do it! Fewer than 't'? NADA!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="group"
              scale={entranceSpring}
            />
            <MangaEffect
              type="click"
              position={{ x: width * 0.45, y: height * 0.45 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="whoosh"
              position={{ x: width * 0.6, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="poof"
              position={{ x: width * 0.75, y: height * 0.55 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="questionMarks"
              position={{ x: width * 0.75, y: height * 0.5 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 4.4: Shamir Hint */}
        <Sequence from={panels[3].start} durationInFrames={panels[3].end - panels[3].start}>
          <div style={panelStyle}>
            <MangaShape
              type="polynomialGraph"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.math}
              glowing={true}
            />
            <MangaShape
              type="secretDot"
              position={{ x: width * 0.55, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.secret}
              pulsing={true}
            />
            <MangaText
              text="Built on Shamir's Secret Sharing!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="reveal"
              position={{ x: width * 0.6, y: height * 0.35 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>
      </>
    );
  };

  const renderShamir = () => {
    const panelDuration = 80;
    const panels = [
      { start: 0, end: 80 },   // Polynomial Dealer
      { start: 80, end: 160 }, // Share Distribution
      { start: 160, end: 240 }, // Reconstruction
    ];

    return (
      <>
        {/* Panel 5.1: Polynomial Dealer */}
        <Sequence from={panels[0].start} durationInFrames={panels[0].end - panels[0].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="dealer"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="wise"
            />
            <MangaShape
              type="blackboard"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.blackboard}
            />
            <MangaShape
              type="polynomial"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.curve}
              animated={true}
            />
            <MangaShape
              type="secretStar"
              position={{ x: width * 0.55, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.secret}
              glowing={true}
              label="f(0)"
            />
            <MangaText
              text="My secret is f(0)!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="chalkScrape"
              position={{ x: width * 0.65, y: height * 0.35 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 5.2: Share Distribution */}
        <Sequence from={panels[1].start} durationInFrames={panels[1].end - panels[1].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="dealer"
              position={{ x: width * 0.2, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="distributing"
            />
            <MangaShape
              type="polynomial"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.curve}
            />
            <MangaShape
              type="sharePoints"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.shares}
              flying={true}
              labels={["f(1)", "f(2)", "f(3)"]}
            />
            <MangaCharacter
              type="participants"
              position={{ x: width * 0.7, y: height * 0.6 }}
              scale={entranceSpring}
              emotion="receiving"
            />
            <MangaText
              text="Here's your share!"
              position={{ x: width * 0.2, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="swish"
              position={{ x: width * 0.5, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="pop"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 5.3: Reconstruction */}
        <Sequence from={panels[2].start} durationInFrames={panels[2].end - panels[2].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="participants"
              position={{ x: width * 0.2, y: height * 0.6 }}
              scale={entranceSpring}
              emotion="excited"
              count={3}
            />
            <MangaShape
              type="sharePoints"
              position={{ x: width * 0.4, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.shares}
              connecting={true}
            />
            <MangaShape
              type="polynomial"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.curve}
              reconstructing={true}
            />
            <MangaShape
              type="secretStar"
              position={{ x: width * 0.45, y: height * 0.5 }}
              scale={entranceSpring * 1.2}
              color={MANGA_COLORS.secret}
              glowing={true}
              revealed={true}
            />
            <MangaText
              text="Lagrange magic! Secret REVEALED!"
              position={{ x: width * 0.2, y: height * 0.25 }}
              type="excited"
              scale={entranceSpring}
            />
            <MangaEffect
              type="zing"
              position={{ x: width * 0.4, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="aha"
              position={{ x: width * 0.25, y: height * 0.4 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="glow"
              position={{ x: width * 0.45, y: height * 0.45 }}
              scale={entranceSpring * 1.2}
            />
          </div>
        </Sequence>
      </>
    );
  };

  const renderDKG = () => {
    const panelDuration = 60;
    const panels = [
      { start: 0, end: 60 },   // SSS Dealer Problem
      { start: 60, end: 120 }, // DKG - Everyone's a Dealer
      { start: 120, end: 180 }, // Summing Shares
      { start: 180, end: 240 }, // DKG Property
      { start: 240, end: 300 }, // DKG Recap
    ];

    return (
      <>
        {/* Panel 6.1: SSS Dealer Problem */}
        <Sequence from={panels[0].start} durationInFrames={panels[0].end - panels[0].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="dealer"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="overwhelmed"
            />
            <MangaShape
              type="secretPile"
              position={{ x: width * 0.5, y: height * 0.6 }}
              scale={entranceSpring}
              color={MANGA_COLORS.burden}
              overwhelming={true}
            />
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.3, y: height * 0.4 }}
              scale={entranceSpring}
              emotion="concerned"
            />
            <MangaText
              text="But... the dealer knows everything!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="phew"
              position={{ x: width * 0.55, y: height * 0.4 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="worry"
              position={{ x: width * 0.35, y: height * 0.35 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 6.2: DKG - Everyone's a Dealer */}
        <Sequence from={panels[1].start} durationInFrames={panels[1].end - panels[1].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="participantsGrid"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="active"
              count={5}
            />
            <MangaShape
              type="miniBlackboards"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.blackboard}
              multiple={true}
            />
            <MangaShape
              type="shareNetwork"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.shares}
              flying={true}
              network={true}
            />
            <MangaText
              text="Everyone makes their OWN secret!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="unison"
              scale={entranceSpring}
            />
            <MangaEffect
              type="draw"
              position={{ x: width * 0.4, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="send"
              position={{ x: width * 0.6, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="zap"
              position={{ x: width * 0.5, y: height * 0.6 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 6.3: Summing Shares */}
        <Sequence from={panels[2].start} durationInFrames={panels[2].end - panels[2].start}>
          <div style={panelStyle}>
            <MangaShape
              type="hand"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.hand}
            />
            <MangaShape
              type="receivedShares"
              position={{ x: width * 0.3, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.shares}
              flying={true}
              combining={true}
            />
            <MangaShape
              type="keyShare"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring * 1.1}
              color={MANGA_COLORS.keyShare}
              forming={true}
            />
            <MangaText
              text="My share = sum of ALL shares!"
              position={{ x: width * 0.7, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="add"
              position={{ x: width * 0.4, y: height * 0.45 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="click"
              position={{ x: width * 0.5, y: height * 0.45 }}
              scale={entranceSpring * 1.1}
            />
          </div>
        </Sequence>

        {/* Panel 6.4: DKG Property */}
        <Sequence from={panels[3].start} durationInFrames={panels[3].end - panels[3].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="honestParticipant"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="honest"
              glowing={true}
            />
            <MangaShape
              type="groupSecret"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.groupSecret}
              ethereal={true}
              random={true}
            />
            <MangaText
              text="One honest soul = TRUE randomness!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="shine"
              position={{ x: width * 0.3, y: height * 0.4 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="truth"
              position={{ x: width * 0.6, y: height * 0.3 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 6.5: DKG Recap */}
        <Sequence from={panels[4].start} durationInFrames={panels[4].end - panels[4].start}>
          <div style={panelStyle}>
            <MangaShape
              type="ghostlyKey"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.ghostly}
              ethereal={true}
              outline={true}
            />
            <MangaCharacter
              type="participants"
              position={{ x: width * 0.3, y: height * 0.6 }}
              scale={entranceSpring}
              emotion="confident"
            />
            <MangaCharacter
              type="participants"
              position={{ x: width * 0.7, y: height * 0.6 }}
              scale={entranceSpring}
              emotion="confident"
            />
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.2, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="amazed"
            />
            <MangaText
              text="Group key exists... but nowhere!"
              position={{ x: width * 0.2, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="ghostly"
              position={{ x: width * 0.5, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="mystery"
              position={{ x: width * 0.6, y: height * 0.3 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>
      </>
    );
  };

  const renderBLS = () => {
    const panelDuration = 60;
    const panels = [
      { start: 0, end: 60 },   // BLS Intro
      { start: 60, end: 120 }, // Short & Deterministic
      { start: 120, end: 180 }, // Effortless Aggregation
      { start: 180, end: 240 }, // Math Objects
      { start: 240, end: 300 }, // Bilinear Pairing
      { start: 300, end: 360 }, // KeyGen
      { start: 360, end: 420 }, // Hash-to-curve
      { start: 420, end: 480 }, // Sign
      { start: 480, end: 540 }, // Verify
    ];

    return (
      <>
        {/* Panel 7.1: BLS Intro */}
        <Sequence from={panels[0].start} durationInFrames={panels[0].end - panels[0].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="blsRobot"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="confident"
              pose="cool"
            />
            <MangaText
              text="I am BLS! The signature master!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="confident"
              scale={entranceSpring}
            />
            <MangaEffect
              type="beepBoop"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="pose"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="dynamicLines"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 7.2: Short & Deterministic */}
        <Sequence from={panels[1].start} durationInFrames={panels[1].end - panels[1].start}>
          <div style={panelStyle}>
            <MangaShape
              type="messageScroll"
              position={{ x: width * 0.3, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.message}
              label="Message A"
            />
            <MangaShape
              type="messageScroll"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.message}
              label="Message A"
              identical={true}
            />
            <MangaShape
              type="signature"
              position={{ x: width * 0.3, y: height * 0.6 }}
              scale={entranceSpring}
              color={MANGA_COLORS.signature}
              compact={true}
            />
            <MangaShape
              type="signature"
              position={{ x: width * 0.5, y: height * 0.6 }}
              scale={entranceSpring}
              color={MANGA_COLORS.signature}
              compact={true}
              identical={true}
            />
            <MangaShape
              type="noDice"
              position={{ x: width * 0.7, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.crossed}
            />
            <MangaText
              text="Compact! Always the same!"
              position={{ x: width * 0.4, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="snap"
              position={{ x: width * 0.4, y: height * 0.5 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="nope"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 7.3: Effortless Aggregation */}
        <Sequence from={panels[2].start} durationInFrames={panels[2].end - panels[2].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="signers"
              position={{ x: width * 0.2, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="signing"
              count={3}
            />
            <MangaShape
              type="signatureOrbs"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.signature}
              multiple={true}
              floating={true}
            />
            <MangaShape
              type="aggregatedSignature"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring * 1.2}
              color={MANGA_COLORS.aggregated}
              glowing={true}
              large={true}
            />
            <MangaText
              text="Many signatures? One BIG one!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="glow"
              position={{ x: width * 0.4, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="merge"
              position={{ x: width * 0.55, y: height * 0.4 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="whoosh"
              position={{ x: width * 0.7, y: height * 0.35 }}
              scale={entranceSpring * 1.2}
            />
          </div>
        </Sequence>

        {/* Panel 7.4: Math Objects */}
        <Sequence from={panels[3].start} durationInFrames={panels[3].end - panels[3].start}>
          <div style={panelStyle}>
            <MangaShape
              type="geometricShape"
              position={{ x: width * 0.3, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.g1}
              shape="sphere"
              label="G1"
            />
            <MangaShape
              type="geometricShape"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.g2}
              shape="cube"
              label="G2"
            />
            <MangaShape
              type="geometricShape"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.gt}
              shape="pyramid"
              label="GT"
            />
            <MangaText
              text="Three special groups!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="hummm"
              position={{ x: width * 0.5, y: height * 0.6 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 7.5: Bilinear Pairing */}
        <Sequence from={panels[4].start} durationInFrames={panels[4].end - panels[4].start}>
          <div style={panelStyle}>
            <MangaShape
              type="point"
              position={{ x: width * 0.25, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.point}
              label="P"
            />
            <MangaShape
              type="point"
              position={{ x: width * 0.25, y: height * 0.6 }}
              scale={entranceSpring}
              color={MANGA_COLORS.point}
              label="Q"
            />
            <MangaShape
              type="magicPortal"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.portal}
              label="e"
              magical={true}
            />
            <MangaShape
              type="result"
              position={{ x: width * 0.75, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.result}
              label="GT"
              exponent="ab"
            />
            <MangaText
              text="Magic math! Linear power!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="zap"
              position={{ x: width * 0.4, y: height * 0.45 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="pow"
              position={{ x: width * 0.6, y: height * 0.55 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 7.6: KeyGen */}
        <Sequence from={panels[5].start} durationInFrames={panels[5].end - panels[5].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.2, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="picking"
            />
            <MangaShape
              type="numberPool"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.numbers}
              swirling={true}
              label="sk"
            />
            <MangaShape
              type="generatorPoint"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.generator}
              glowing={true}
              label="G"
            />
            <MangaShape
              type="publicKey"
              position={{ x: width * 0.8, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.publicKey}
              derived={true}
              label="PK"
            />
            <MangaText
              text="Pick secret 'sk'! Get public 'PK'!"
              position={{ x: width * 0.2, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="pick"
              position={{ x: width * 0.3, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="generate"
              position={{ x: width * 0.7, y: height * 0.35 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 7.7: Hash-to-curve */}
        <Sequence from={panels[6].start} durationInFrames={panels[6].end - panels[6].start}>
          <div style={panelStyle}>
            <MangaShape
              type="messageScroll"
              position={{ x: width * 0.2, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.message}
              label="Message"
            />
            <MangaShape
              type="hashMachine"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.machine}
              label="H"
              futuristic={true}
              whirring={true}
            />
            <MangaShape
              type="curvePoint"
              position={{ x: width * 0.8, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.curvePoint}
              glowing={true}
              label="H(m)"
            />
            <MangaText
              text="Message to point!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="hash"
              position={{ x: width * 0.35, y: height * 0.45 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="transform"
              position={{ x: width * 0.65, y: height * 0.45 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 7.8: Sign */}
        <Sequence from={panels[7].start} durationInFrames={panels[7].end - panels[7].start}>
          <div style={panelStyle}>
            <MangaShape
              type="secretKey"
              position={{ x: width * 0.3, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.secretKey}
              label="sk"
              multiplier={true}
            />
            <MangaShape
              type="curvePoint"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.curvePoint}
              label="H(m)"
              transforming={true}
            />
            <MangaShape
              type="signature"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.signature}
              label="σ"
              result={true}
            />
            <MangaText
              text="SK times H(m) = Signature!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="multiply"
              position={{ x: width * 0.4, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="sign"
              position={{ x: width * 0.6, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="dynamicLines"
              position={{ x: width * 0.5, y: height * 0.45 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 7.9: Verify */}
        <Sequence from={panels[8].start} durationInFrames={panels[8].end - panels[8].start}>
          <div style={panelStyle}>
            <MangaShape
              type="splitScreen"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.split}
            />
            <MangaShape
              type="pairingFunction"
              position={{ x: width * 0.25, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.pairing}
              label="e(σ, G)"
            />
            <MangaShape
              type="pairingFunction"
              position={{ x: width * 0.75, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.pairing}
              label="e(H(m), PK)"
            />
            <MangaShape
              type="resultOrb"
              position={{ x: width * 0.25, y: height * 0.6 }}
              scale={entranceSpring}
              color={MANGA_COLORS.result}
            />
            <MangaShape
              type="resultOrb"
              position={{ x: width * 0.75, y: height * 0.6 }}
              scale={entranceSpring}
              color={MANGA_COLORS.result}
            />
            <MangaShape
              type="checkmark"
              position={{ x: width * 0.5, y: height * 0.7 }}
              scale={entranceSpring * 1.2}
              color={MANGA_COLORS.success}
              large={true}
            />
            <MangaText
              text="Do they match? YES!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="compare"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="match"
              position={{ x: width * 0.5, y: height * 0.6 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="ding"
              position={{ x: width * 0.5, y: height * 0.65 }}
              scale={entranceSpring * 1.2}
            />
          </div>
        </Sequence>
      </>
    );
  };

  const renderThresholdBLS = () => {
    const panelDuration = 60;
    const panels = [
      { start: 0, end: 60 },   // DKG Result
      { start: 60, end: 120 }, // Signing a Message
      { start: 120, end: 180 }, // Partial Signatures
      { start: 180, end: 240 }, // Combining Signatures
      { start: 240, end: 300 }, // Key Points - No Group Key
      { start: 300, end: 360 }, // Key Points - Deterministic & Cheap
    ];

    return (
      <>
        {/* Panel 8.1: DKG Result */}
        <Sequence from={panels[0].start} durationInFrames={panels[0].end - panels[0].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="participants"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="confident"
              count={5}
              holding="shares"
            />
            <MangaShape
              type="ghostlyKey"
              position={{ x: width * 0.5, y: height * 0.3 }}
              scale={entranceSpring}
              color={MANGA_COLORS.ghostly}
              ethereal={true}
              outline={true}
            />
            <MangaText
              text="After DKG, everyone has a share!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="remember"
              position={{ x: width * 0.3, y: height * 0.4 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 8.2: Signing a Message */}
        <Sequence from={panels[1].start} durationInFrames={panels[1].end - panels[1].start}>
          <div style={panelStyle}>
            <MangaShape
              type="messageScroll"
              position={{ x: width * 0.5, y: height * 0.3 }}
              scale={entranceSpring}
              color={MANGA_COLORS.message}
              label="Message"
              central={true}
            />
            <MangaCharacter
              type="participantsCircle"
              position={{ x: width * 0.5, y: height * 0.6 }}
              scale={entranceSpring}
              emotion="thinking"
              count={5}
              synchronized={true}
            />
            <MangaShape
              type="hashPoints"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.hash}
              multiple={true}
              label="H(m)"
              synchronized={true}
            />
            <MangaText
              text="Same message, same H(m)!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="thought"
              scale={entranceSpring}
            />
            <MangaEffect
              type="think"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="calculate"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 8.3: Partial Signatures */}
        <Sequence from={panels[2].start} durationInFrames={panels[2].end - panels[2].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="participants"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="producing"
              count={3}
              highlighted={true}
            />
            <MangaShape
              type="partialSignatures"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.partialSig}
              multiple={true}
              glowing={true}
              label="σᵢ"
            />
            <MangaText
              text="My share, my partial signature!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="pop"
              position={{ x: width * 0.5, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="spark"
              position={{ x: width * 0.65, y: height * 0.35 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 8.4: Combining Signatures */}
        <Sequence from={panels[3].start} durationInFrames={panels[3].end - panels[3].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="combiner"
              position={{ x: width * 0.2, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="combining"
              multiArmed={true}
            />
            <MangaShape
              type="partialSignatures"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.partialSig}
              multiple={true}
              gathering={true}
            />
            <MangaShape
              type="lagrangeCoefficients"
              position={{ x: width * 0.5, y: height * 0.3 }}
              scale={entranceSpring}
              color={MANGA_COLORS.coefficients}
              glowing={true}
              label="λᵢ"
            />
            <MangaShape
              type="finalSignature"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring * 1.2}
              color={MANGA_COLORS.finalSig}
              powerful={true}
              label="σ"
            />
            <MangaText
              text="Lagrange magic! One final signature!"
              position={{ x: width * 0.2, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="gather"
              position={{ x: width * 0.35, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="fuse"
              position={{ x: width * 0.55, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="whoosh"
              position={{ x: width * 0.7, y: height * 0.35 }}
              scale={entranceSpring * 1.2}
            />
          </div>
        </Sequence>

        {/* Panel 8.5: Key Points - No Group Key */}
        <Sequence from={panels[4].start} durationInFrames={panels[4].end - panels[4].start}>
          <div style={panelStyle}>
            <MangaShape
              type="ghostlyKey"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.ghostly}
              ethereal={true}
              outline={true}
              notForming={true}
            />
            <MangaShape
              type="bigX"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring * 1.2}
              color={MANGA_COLORS.crossed}
              large={true}
            />
            <MangaText
              text="Group key? Never fully formed!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="poof"
              position={{ x: width * 0.45, y: height * 0.45 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="illusion"
              position={{ x: width * 0.55, y: height * 0.45 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 8.6: Key Points - Deterministic & Cheap */}
        <Sequence from={panels[5].start} durationInFrames={panels[5].end - panels[5].start}>
          <div style={panelStyle}>
            <MangaShape
              type="finalSignature"
              position={{ x: width * 0.3, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.finalSig}
              sleek={true}
              compact={true}
            />
            <MangaShape
              type="regularAccount"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.regular}
              identical={true}
            />
            <MangaShape
              type="priceTag"
              position={{ x: width * 0.7, y: height * 0.3 }}
              scale={entranceSpring}
              color={MANGA_COLORS.cheap}
              low={true}
            />
            <MangaShape
              type="privacyShield"
              position={{ x: width * 0.7, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.privacy}
              protective={true}
            />
            <MangaShape
              type="multisigComplex"
              position={{ x: width * 0.3, y: height * 0.6 }}
              scale={entranceSpring}
              color={MANGA_COLORS.complex}
              multiPart={true}
              crossed={true}
            />
            <MangaText
              text="Cheap! Private! Looks normal!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="smooth"
              position={{ x: width * 0.4, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="stealth"
              position={{ x: width * 0.6, y: height * 0.35 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>
      </>
    );
  };

  const renderEncryption = () => {
    const panelDuration = 80;
    const panels = [
      { start: 0, end: 80 },   // Encrypt to Group PK
      { start: 80, end: 160 }, // Partial Decryptions
      { start: 160, end: 240 }, // Reconstruction & Use Cases
    ];

    return (
      <>
        {/* Panel 9.1: Encrypt to Group PK */}
        <Sequence from={panels[0].start} durationInFrames={panels[0].end - panels[0].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.2, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="sending"
            />
            <MangaShape
              type="encryptedMessage"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.encrypted}
              locked={true}
              traveling={true}
            />
            <MangaShape
              type="groupPublicKeys"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.groupPK}
              distributed={true}
              glowing={true}
              cloud={true}
            />
            <MangaText
              text="Encrypt to the whole group!"
              position={{ x: width * 0.2, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="send"
              position={{ x: width * 0.3, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="lock"
              position={{ x: width * 0.4, y: height * 0.35 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 9.2: Partial Decryptions */}
        <Sequence from={panels[1].start} durationInFrames={panels[1].end - panels[1].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="participants"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="decrypting"
              count={3}
              highlighted={true}
            />
            <MangaShape
              type="partialDecryptions"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.partialDecrypt}
              multiple={true}
              pieces={true}
              unreadable={true}
            />
            <MangaText
              text="My share, my partial decryption!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="unscramble"
              position={{ x: width * 0.5, y: height * 0.35 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 9.3: Reconstruction & Use Cases */}
        <Sequence from={panels[2].start} durationInFrames={panels[2].end - panels[2].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="combiner"
              position={{ x: width * 0.2, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="reconstructing"
            />
            <MangaShape
              type="partialDecryptions"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.partialDecrypt}
              pieces={true}
              snapping={true}
            />
            <MangaShape
              type="plaintextScroll"
              position={{ x: width * 0.6, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.plaintext}
              readable={true}
              revealed={true}
            />
            
            {/* Use Cases Vignettes */}
            <MangaShape
              type="sealedEnvelope"
              position={{ x: width * 0.15, y: height * 0.7 }}
              scale={entranceSpring * 0.6}
              color={MANGA_COLORS.auction}
              label="Sealed Bid"
            />
            <MangaShape
              type="timedDocument"
              position={{ x: width * 0.35, y: height * 0.7 }}
              scale={entranceSpring * 0.6}
              color={MANGA_COLORS.timed}
              ticking={true}
            />
            <MangaCharacter
              type="friends"
              position={{ x: width * 0.55, y: height * 0.7 }}
              scale={entranceSpring * 0.6}
              emotion="helping"
              count={3}
            />
            <MangaShape
              type="wallet"
              position={{ x: width * 0.75, y: height * 0.7 }}
              scale={entranceSpring * 0.6}
              color={MANGA_COLORS.wallet}
              recovering={true}
            />

            <MangaText
              text="Lagrange magic! Plaintext REVEALED!"
              position={{ x: width * 0.2, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaText
              text="Auctions! Time locks! Social recovery!"
              position={{ x: width * 0.5, y: height * 0.85 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="reassemble"
              position={{ x: width * 0.5, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="aha"
              position={{ x: width * 0.65, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="tickTock"
              position={{ x: width * 0.35, y: height * 0.65 }}
              scale={entranceSpring * 0.6}
            />
            <MangaEffect
              type="friends"
              position={{ x: width * 0.65, y: height * 0.65 }}
              scale={entranceSpring * 0.6}
            />
          </div>
        </Sequence>
      </>
    );
  };

  const renderRealWorld = () => {
    const panelDuration = 60;
    const panels = [
      { start: 0, end: 60 },   // Single Key Problems
      { start: 60, end: 120 }, // Operational Risk
      { start: 120, end: 180 }, // Basic Multisig Problems - Cost & UX
      { start: 180, end: 240 }, // Basic Multisig Problems - Privacy & Compatibility
      { start: 240, end: 300 }, // Threshold Advantages
      { start: 300, end: 360 }, // Real World Usage
    ];

    return (
      <>
        {/* Panel 10.1: Single Key Problems */}
        <Sequence from={panels[0].start} durationInFrames={panels[0].end - panels[0].start}>
          <div style={panelStyle}>
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.3, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="despairing"
            />
            <MangaShape
              type="key"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.key}
              shattering={true}
            />
            <MangaText
              text="FUNDS GONE!"
              position={{ x: width * 0.6, y: height * 0.3 }}
              type="dramatic"
              scale={entranceSpring * 1.2}
              large={true}
            />
            <MangaText
              text="Lose it? Funds GONE!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="speech"
              scale={entranceSpring}
            />
            <MangaEffect
              type="crash"
              position={{ x: width * 0.5, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="ohNo"
              position={{ x: width * 0.35, y: height * 0.4 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 10.2: Operational Risk */}
        <Sequence from={panels[1].start} durationInFrames={panels[1].end - panels[1].start}>
          <div style={panelStyle}>
            {/* Hardware smoking */}
            <MangaShape
              type="hardware"
              position={{ x: width * 0.25, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.hardware}
              smoking={true}
              sparking={true}
            />
            {/* Admin running away */}
            <MangaCharacter
              type="admin"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              emotion="running"
              holding="resignation"
            />
            {/* Device being seized */}
            <MangaShape
              type="device"
              position={{ x: width * 0.75, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.device}
              seized={true}
            />
            <MangaShape
              type="shadowyHand"
              position={{ x: width * 0.75, y: height * 0.3 }}
              scale={entranceSpring}
              color={MANGA_COLORS.shadow}
              grabbing={true}
            />
            <MangaText
              text="Hardware dies! Admins leave! Seized!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="smoke"
              position={{ x: width * 0.25, y: height * 0.3 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="run"
              position={{ x: width * 0.45, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="grab"
              position={{ x: width * 0.75, y: height * 0.4 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 10.3: Basic Multisig Problems - Cost & UX */}
        <Sequence from={panels[2].start} durationInFrames={panels[2].end - panels[2].start}>
          <div style={panelStyle}>
            <MangaShape
              type="document"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.document}
            />
            <MangaShape
              type="stamps"
              position={{ x: width * 0.4, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.stamps}
              multiple={true}
              slow={true}
              laborious={true}
            />
            <MangaShape
              type="cashRegister"
              position={{ x: width * 0.6, y: height * 0.3 }}
              scale={entranceSpring}
              color={MANGA_COLORS.expensive}
              highFees={true}
            />
            <MangaCharacter
              type="cryptoKun"
              position={{ x: width * 0.2, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="bored"
              tapping={true}
            />
            <MangaText
              text="Slow! Expensive!"
              position={{ x: width * 0.2, y: height * 0.25 }}
              type="annoyed"
              scale={entranceSpring}
            />
            <MangaEffect
              type="stampStamp"
              position={{ x: width * 0.4, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="chaChing"
              position={{ x: width * 0.6, y: height * 0.25 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="yawn"
              position={{ x: width * 0.25, y: height * 0.4 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 10.4: Basic Multisig Problems - Privacy & Compatibility */}
        <Sequence from={panels[3].start} durationInFrames={panels[3].end - panels[3].start}>
          <div style={panelStyle}>
            <MangaShape
              type="magnifyingGlass"
              position={{ x: width * 0.3, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.magnifying}
              examining={true}
            />
            <MangaShape
              type="multisigTransaction"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.transaction}
              revealing={true}
            />
            <MangaShape
              type="signerIcons"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring}
              color={MANGA_COLORS.signers}
              multiple={true}
              exposed={true}
            />
            
            <MangaShape
              type="singleSlot"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.slot}
            />
            <MangaCharacter
              type="multisigGroup"
              position={{ x: width * 0.8, y: height * 0.5 }}
              scale={entranceSpring}
              emotion="frustrated"
              bumping={true}
              notFitting={true}
            />
            
            <MangaText
              text="Everyone sees who signed!"
              position={{ x: width * 0.3, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaText
              text="Doesn't fit everywhere!"
              position={{ x: width * 0.8, y: height * 0.25 }}
              type="group"
              scale={entranceSpring}
            />
            <MangaEffect
              type="peek"
              position={{ x: width * 0.25, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="exposed"
              position={{ x: width * 0.55, y: height * 0.45 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="clunk"
              position={{ x: width * 0.75, y: height * 0.45 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="noFit"
              position={{ x: width * 0.85, y: height * 0.45 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 10.5: Threshold Advantages */}
        <Sequence from={panels[4].start} durationInFrames={panels[4].end - panels[4].start}>
          <div style={panelStyle}>
            <MangaShape
              type="thresholdGroup"
              position={{ x: width * 0.3, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.threshold}
              collaborative={true}
            />
            <MangaShape
              type="singleSignature"
              position={{ x: width * 0.5, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.signature}
              sleek={true}
              compact={true}
            />
            <MangaShape
              type="regularAccount"
              position={{ x: width * 0.7, y: height * 0.4 }}
              scale={entranceSpring}
              color={MANGA_COLORS.regular}
              identical={true}
              indistinguishable={true}
            />
            
            <MangaShape
              type="vault"
              position={{ x: width * 0.5, y: height * 0.6 }}
              scale={entranceSpring}
              color={MANGA_COLORS.vault}
              secure={true}
              glowing={true}
            />
            <MangaCharacter
              type="villain"
              position={{ x: width * 0.3, y: height * 0.6 }}
              scale={entranceSpring}
              emotion="thwarted"
              failing={true}
            />
            
            <MangaText
              text="One signature, looks normal!"
              position={{ x: width * 0.5, y: height * 0.25 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaText
              text="Need 't' to break in, not one!"
              position={{ x: width * 0.5, y: height * 0.75 }}
              type="narrator"
              scale={entranceSpring}
            />
            <MangaEffect
              type="smooth"
              position={{ x: width * 0.6, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="perfect"
              position={{ x: width * 0.7, y: height * 0.35 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="clang"
              position={{ x: width * 0.25, y: height * 0.55 }}
              scale={entranceSpring}
            />
            <MangaEffect
              type="secure"
              position={{ x: width * 0.55, y: height * 0.55 }}
              scale={entranceSpring}
            />
          </div>
        </Sequence>

        {/* Panel 10.6: Real World Usage */}
        <Sequence from={panels[5].start} durationInFrames={panels[5].end - panels[5].start}>
          <div style={panelStyle}>
            {/* Ethereum section */}
            <MangaShape
              type="ethereumLogo"
              position={{ x: width * 0.15, y: height * 0.3 }}
              scale={entranceSpring * 0.8}
              color={MANGA_COLORS.ethereum}
            />
            <MangaCharacter
              type="validators"
              position={{ x: width * 0.25, y: height * 0.4 }}
              scale={entranceSpring * 0.6}
              emotion="validating"
              count={5}
            />
            <MangaShape
              type="beaconLight"
              position={{ x: width * 0.25, y: height * 0.2 }}
              scale={entranceSpring * 0.8}
              color={MANGA_COLORS.beacon}
              beaming={true}
            />
            
            {/* drand section */}
            <MangaShape
              type="drandLogo"
              position={{ x: width * 0.45, y: height * 0.3 }}
              scale={entranceSpring * 0.8}
              color={MANGA_COLORS.drand}
            />
            <MangaShape
              type="randomnessOrb"
              position={{ x: width * 0.45, y: height * 0.5 }}
              scale={entranceSpring * 0.8}
              color={MANGA_COLORS.randomness}
              glowing={true}
              unpredictable={true}
            />
            
            {/* Filecoin/Chia section */}
            <MangaShape
              type="filecoinLogo"
              position={{ x: width * 0.65, y: height * 0.25 }}
              scale={entranceSpring * 0.6}
              color={MANGA_COLORS.filecoin}
            />
            <MangaShape
              type="chiaLogo"
              position={{ x: width * 0.65, y: height * 0.35 }}
              scale={entranceSpring * 0.6}
              color={MANGA_COLORS.chia}
            />
            <MangaShape
              type="blockStack"
              position={{ x: width * 0.75, y: height * 0.4 }}
              scale={entranceSpring * 0.8}
              color={MANGA_COLORS.blocks}
              efficient={true}
              stacking={true}
            />
            
            {/* Custody section */}
            <MangaShape
              type="secureVault"
              position={{ x: width * 0.85, y: height * 0.4 }}
              scale={entranceSpring * 0.8}
              color={MANGA_COLORS.custody}
            />
            <MangaCharacter
              type="operators"
              position={{ x: width * 0.85, y: height * 0.5 }}
              scale={entranceSpring * 0.6}
              emotion="synchronized"
              count={3}
              uniforms={true}
            />
            
            <MangaText
              text="Ethereum: Validator aggregation!"
              position={{ x: width * 0.25, y: height * 0.6 }}
              type="narrator"
              scale={entranceSpring * 0.8}
            />
            <MangaText
              text="drand: Verifiable randomness!"
              position={{ x: width * 0.45, y: height * 0.6 }}
              type="narrator"
              scale={entranceSpring * 0.8}
            />
            <MangaText
              text="Filecoin, Chia: Efficient blocks!"
              position={{ x: width * 0.7, y: height * 0.6 }}
              type="narrator"
              scale={entranceSpring * 0.8}
            />
            <MangaText
              text="Custody: Multi-operator approval!"
              position={{ x: width * 0.85, y: height * 0.6 }}
              type="narrator"
              scale={entranceSpring * 0.8}
            />
            
            <MangaEffect
              type="beam"
              position={{ x: width * 0.25, y: height * 0.15 }}
              scale={entranceSpring * 0.8}
            />
            <MangaEffect
              type="collect"
              position={{ x: width * 0.25, y: height * 0.25 }}
              scale={entranceSpring * 0.8}
            />
            <MangaEffect
              type="shimmer"
              position={{ x: width * 0.45, y: height * 0.45 }}
              scale={entranceSpring * 0.8}
            />
            <MangaEffect
              type="random"
              position={{ x: width * 0.5, y: height * 0.5 }}
              scale={entranceSpring * 0.8}
            />
            <MangaEffect
              type="stack"
              position={{ x: width * 0.75, y: height * 0.35 }}
              scale={entranceSpring * 0.8}
            />
            <MangaEffect
              type="fast"
              position={{ x: width * 0.8, y: height * 0.35 }}
              scale={entranceSpring * 0.8}
            />
            <MangaEffect
              type="clickClick"
              position={{ x: width * 0.85, y: height * 0.45 }}
              scale={entranceSpring * 0.8}
            />
            <MangaEffect
              type="secure"
              position={{ x: width * 0.9, y: height * 0.45 }}
              scale={entranceSpring * 0.8}
            />
          </div>
        </Sequence>
      </>
    );
  };

  // Render appropriate section
  switch (section) {
    case "foundations":
      return renderFoundations();
    case "publicKey":
      return renderPublicKey();
    case "randomness":
      return renderRandomness();
    case "threshold":
      return renderThreshold();
    case "shamir":
      return renderShamir();
    case "dkg":
      return renderDKG();
    case "bls":
      return renderBLS();
    case "thresholdBls":
      return renderThresholdBLS();
    case "encryption":
      return renderEncryption();
    case "realWorld":
      return renderRealWorld();
    default:
      return (
        <div style={panelStyle}>
          <MangaText
            text={`Section: ${section}`}
            position={{ x: width * 0.5, y: height * 0.5 }}
            type="title"
            scale={entranceSpring}
          />
        </div>
      );
  }
};