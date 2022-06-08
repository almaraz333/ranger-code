import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faPeopleLine, faWheelchair, faCode } from "@fortawesome/free-solid-svg-icons";

import { MyPhilosophyProps } from "./types";
import "./MyPhilosophy.scss";

export const MyPhilosophy: React.FC<MyPhilosophyProps> = () => {
  return (
    <section className="my-philosophy" id="philosophy">
      <h2>Our Philosophy</h2>
      <div className="my-philosophy-grid">
        <div className="my-philosophy-grid-item">
          <div className="title-container">
            <h3>
              Efficiency
              <FontAwesomeIcon icon={faBolt} style={{ paddingLeft: "1.5rem" }} />
            </h3>
          </div>

          <p>
            Giving users the power to find what they need, when they need it, is the most important thing we do. A
            frustrated user is a user less likely to be converted to a customer.
          </p>
        </div>
        <div className="my-philosophy-grid-item">
          <div className="title-container">
            <h3>
              Simplicity
              <FontAwesomeIcon icon={faCode} style={{ paddingLeft: "1.5rem" }} />
            </h3>
          </div>
          <p>
            Over-clutter online is a real problem. The shortest way to convey to your users the needed information the
            more likely they are to have a good experience. This reflects highly on your brand and converts more users
            to customers.
          </p>
        </div>
        <div className="my-philosophy-grid-item">
          <div className="title-container">
            <h3>
              Client Centered
              <FontAwesomeIcon icon={faPeopleLine} style={{ paddingLeft: "1.5rem" }} />
            </h3>
          </div>
          <p>
            No one knows your business better than you. By making the client (you) the center of our business model we
            create products you will be happy with for years to come.
          </p>
        </div>
        <div className="my-philosophy-grid-item">
          <div className="title-container">
            <h3>
              Accessible
              <FontAwesomeIcon icon={faWheelchair} style={{ paddingLeft: "1.5rem" }} />
            </h3>
          </div>
          <p>
            Everyone deserves to access the internet equally. I believe this not only from a personal view but also a
            business view. The more people that can access your site the more potential customers you will have.
          </p>
        </div>
      </div>
    </section>
  );
};
