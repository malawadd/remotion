import { Composition } from "remotion";
import { MangaCryptoExplainer, mangaCryptoSchema } from "./MangaCryptoExplainer";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Full manga-style cryptography explainer video */}
      <Composition
        id="MangaCryptoExplainer"
        component={MangaCryptoExplainer}
        durationInFrames={3600} // 2 minutes at 30fps
        fps={30}
        width={1920}
        height={1080}
        schema={mangaCryptoSchema}
        defaultProps={{
          totalDuration: 3600,
        }}
      />
      
      {/* Individual section previews for testing */}
      <Composition
        id="FoundationsPreview"
        component={MangaCryptoExplainer}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        schema={mangaCryptoSchema}
        defaultProps={{
          section: "foundations" as const,
        }}
      />
      
      <Composition
        id="PublicKeyPreview"
        component={MangaCryptoExplainer}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        schema={mangaCryptoSchema}
        defaultProps={{
          section: "publicKey" as const,
        }}
      />
      
      <Composition
        id="RandomnessPreview"
        component={MangaCryptoExplainer}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        schema={mangaCryptoSchema}
        defaultProps={{
          section: "randomness" as const,
        }}
      />
      
      <Composition
        id="ThresholdPreview"
        component={MangaCryptoExplainer}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
        schema={mangaCryptoSchema}
        defaultProps={{
          section: "threshold" as const,
        }}
      />
      
      <Composition
        id="ShamirPreview"
        component={MangaCryptoExplainer}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
        schema={mangaCryptoSchema}
        defaultProps={{
          section: "shamir" as const,
        }}
      />
      
      <Composition
        id="DKGPreview"
        component={MangaCryptoExplainer}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        schema={mangaCryptoSchema}
        defaultProps={{
          section: "dkg" as const,
        }}
      />
      
      <Composition
        id="BLSPreview"
        component={MangaCryptoExplainer}
        durationInFrames={540}
        fps={30}
        width={1920}
        height={1080}
        schema={mangaCryptoSchema}
        defaultProps={{
          section: "bls" as const,
        }}
      />
      
      <Composition
        id="ThresholdBLSPreview"
        component={MangaCryptoExplainer}
        durationInFrames={360}
        fps={30}
        width={1920}
        height={1080}
        schema={mangaCryptoSchema}
        defaultProps={{
          section: "thresholdBls" as const,
        }}
      />
      
      <Composition
        id="EncryptionPreview"
        component={MangaCryptoExplainer}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
        schema={mangaCryptoSchema}
        defaultProps={{
          section: "encryption" as const,
        }}
      />
      
      <Composition
        id="RealWorldPreview"
        component={MangaCryptoExplainer}
        durationInFrames={360}
        fps={30}
        width={1920}
        height={1080}
        schema={mangaCryptoSchema}
        defaultProps={{
          section: "realWorld" as const,
        }}
      />
    </>
  );
};