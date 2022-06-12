import { WhoWeAreProps } from "./types";
import Headshot from "../../assets/images/headshot.jpg";
import Ranger from "../../assets/images/ranger1.jpg";

import "./WhoWeAre.scss";
import { Employee } from "../Employee";

export const WhoWeAre: React.FC<WhoWeAreProps> = () => {
  return (
    <section className="who-we-are" id="whoWeAre">
      <h2>Who Are We</h2>
      <div className="employees-container">
        <Employee
          name="Colton Almaraz"
          title="Lead Engineer"
          description="I am an experienced developer with years of experience focused on creating websites and digital experiences. With a
          background in customer facing services and an extensive knowledge of UX Design and accessibility I have the
          ability to create a product that is intuitive, user friendly, and accessible to all."
          headshot={Headshot}
        />
        <Employee name="Ranger" title="Lead Pet" description="Bark" headshot={Ranger} />
      </div>
    </section>
  );
};
