import { Composition } from "remotion";
import { Scene, myCompSchema } from "./Scene";

// Cubism Interfaces Cryptography Explainer Video
// An informative video explaining cryptographic concepts using Cubist visual design

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Full cryptography explainer video */}
      <Composition
        id="CryptographyExplainer"
        component={Scene}
        durationInFrames={1800} // 60 seconds at 30fps
        fps={30}
        width={1280}
        height={720}
        schema={myCompSchema}
        defaultProps={{
          totalDuration: 1800,
        }}
      />
      
      {/* Individual section previews for testing */}
      <Composition
        id="FoundationsPreview"
        component={Scene}
        durationInFrames={300}
        fps={30}
        width={1280}
        height={720}
        schema={myCompSchema}
        defaultProps={{
          section: "foundations" as const,
        }}
      />
      
      <Composition
        id="RandomnessPreview"
        component={Scene}
        durationInFrames={300}
        fps={30}
        width={1280}
        height={720}
        schema={myCompSchema}
        defaultProps={{
          section: "randomness" as const,
        }}
      />
      
      <Composition
        id="ThresholdPreview"
        component={Scene}
        durationInFrames={300}
        fps={30}
        width={1280}
        height={720}
        schema={myCompSchema}
        defaultProps={{
          section: "threshold" as const,
        }}
      />
    </>
  );
};
