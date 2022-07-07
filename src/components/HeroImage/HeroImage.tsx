import { HeroImageProps } from "./types";
import "./HeroImage.scss";
import Logo from "../../assets/images/logo.png";

export const HeroImage: React.FC<HeroImageProps> = () => {
  return (
    <section className="hero-container">
      <h1>Custom Website Creation</h1>
      <p>The online presence your business deserves</p>
      <img className="logo" src={Logo} alt="" />
    </section>
  );
};
