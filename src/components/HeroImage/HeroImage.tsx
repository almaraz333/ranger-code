import { HeroImageProps } from "./types";
import "./HeroImage.scss";

export const HeroImage: React.FC<HeroImageProps> = () => {
  return (
    <div className="hero-container">
      <div className="hero-title">
        <h1>Custom Website Creation</h1>

        <p>Years of experience, modern technology, the online presence your business deserves</p>
      </div>
    </div>
  );
};
