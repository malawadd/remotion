import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { z } from "zod";
import { MangaPanel } from "./components/MangaPanel";
import { MANGA_COLORS } from "./helpers/manga-styles";

export const mangaCryptoSchema = z.object({
  section: z.enum([
    "foundations", 
    "publicKey", 
    "randomness", 
    "threshold", 
    "shamir", 
    "dkg", 
    "bls", 
    "thresholdBls", 
    "encryption", 
    "realWorld"
  ]).optional(),
});

type MangaCryptoSchemaType = z.infer<typeof mangaCryptoSchema>;

const container: React.CSSProperties = {
  backgroundColor: MANGA_COLORS.background,
  fontFamily: "'Comic Sans MS', cursive, sans-serif",
};

export const MangaCryptoExplainer: React.FC<
  {
    readonly totalDuration?: number;
  } & MangaCryptoSchemaType
> = ({ section, totalDuration = 3600 }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  
  // Define sections with their frame ranges
  const sections = [
    { name: "foundations" as const, start: 0, end: 480 },      // 16 seconds
    { name: "publicKey" as const, start: 480, end: 600 },     // 4 seconds  
    { name: "randomness" as const, start: 600, end: 780 },    // 6 seconds
    { name: "threshold" as const, start: 780, end: 1020 },    // 8 seconds
    { name: "shamir" as const, start: 1020, end: 1260 },      // 8 seconds
    { name: "dkg" as const, start: 1260, end: 1560 },        // 10 seconds
    { name: "bls" as const, start: 1560, end: 2100 },        // 18 seconds
    { name: "thresholdBls" as const, start: 2100, end: 2460 }, // 12 seconds
    { name: "encryption" as const, start: 2460, end: 2700 },  // 8 seconds
    { name: "realWorld" as const, start: 2700, end: 3600 },  // 30 seconds
  ];

  return (
    <AbsoluteFill style={container}>
      {section ? (
        // Single section mode (for testing)
        <MangaPanel
          section={section}
          startFrame={0}
          endFrame={300}
          width={width}
          height={height}
        />
      ) : (
        // Full video mode
        sections.map((sectionData) => (
          <MangaPanel
            key={sectionData.name}
            section={sectionData.name}
            startFrame={sectionData.start}
            endFrame={sectionData.end}
            width={width}
            height={height}
          />
        ))
      )}
    </AbsoluteFill>
  );
};