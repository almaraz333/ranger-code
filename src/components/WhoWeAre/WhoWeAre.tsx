import { WhoWeAreProps } from "./types";
import Headshot from "../../assets/images/headshot.jpg";

import "./WhoWeAre.scss";

export const WhoWeAre: React.FC<WhoWeAreProps> = () => {
  return (
    <section className="who-we-are" id="whoWeAre">
      <h2>Who Are We</h2>
      <div className="who-we-are-items-container">
        <img className="headshot" src={Headshot} alt="" />
        <h3>Lead Developer</h3>
        <p>
          I am an experienced developer with years of experience focused on creating digital experiences. With a
          background in customer facing services and an extensive knowledge of UX Design and accessibility I have the
          ability to create a product that is intuitive, user friendly, and accessible to all.
        </p>
      </div>
    </section>
  );
};
