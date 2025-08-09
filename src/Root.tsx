import { Composition } from "remotion";
import { Scene, myCompSchema } from "./Scene";
import { TIMING } from "./helpers/cubism-styles";

// Calculate total duration from all sections
const totalDuration = Object.values(TIMING.sections).reduce((sum, duration) => sum + duration, 0);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Full dynamic cryptography explainer video */}
      <Composition
        id="CryptographyExplainer"
        component={Scene}
        durationInFrames={totalDuration}
        fps={30}
        width={1920}  // 16:9 for social media
        height={1080}
        schema={myCompSchema}
        defaultProps={{}}
      />
      
      {/* Individual section previews for testing and social media clips */}
      <Composition
        id="IntroPreview"
        component={Scene}
        durationInFrames={TIMING.sections.intro}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema}
        defaultProps={{
          section: "intro" as const,
        }}
      />
      
      <Composition
        id="FoundationsPreview"
        component={Scene}
        durationInFrames={TIMING.sections.foundations}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema}
        defaultProps={{
          section: "foundations" as const,
        }}
      />
      
      <Composition
        id="RandomnessPreview"
        component={Scene}
        durationInFrames={TIMING.sections.randomness}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema}
        defaultProps={{
          section: "randomness" as const,
        }}
      />
      
      <Composition
        id="ThresholdPreview"
        component={Scene}
        durationInFrames={TIMING.sections.threshold}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema}
        defaultProps={{
          section: "threshold" as const,
        }}
      />
      
      <Composition
        id="ShamirPreview"
        component={Scene}
        durationInFrames={TIMING.sections.shamir}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema}
        defaultProps={{
          section: "shamir" as const,
        }}
      />
      
      {/* Square format for Instagram/TikTok */}
      <Composition
        id="CryptographyExplainerSquare"
        component={Scene}
        durationInFrames={totalDuration}
        fps={30}
        width={1080}
        height={1080}
        schema={myCompSchema}
        defaultProps={{}}
      />
      
      {/* Vertical format for TikTok/Instagram Stories */}
      <Composition
        id="CryptographyExplainerVertical"
        component={Scene}
        durationInFrames={totalDuration}
        fps={30}
        width={1080}
        height={1920}
        schema={myCompSchema}
        defaultProps={{}}
      />
    </>
  );
};
