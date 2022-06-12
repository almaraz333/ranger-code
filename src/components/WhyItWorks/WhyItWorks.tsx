import { WhyItWorksProps } from "./types";
import "./WhyItWorks.scss";

export const WhyItWorks: React.FC<WhyItWorksProps> = () => {
  return (
    <section className="why-it-works" id="WhyItWorks">
      <h2>Why It Works</h2>
      <div className="why-it-works-container">
        <div className="why-it-works-item">
          <h3>
            <a href="https://www.thehartford.com/business-insurance/strategy/building-website/10-reasons-need-website">
              Online Visibility
            </a>
          </h3>
          <p>
            <span>80%</span> of people search a business online before visiting it or buying something. That means
            <span> 8/10 </span>
            potential customers could be lost without an online presence.
          </p>
        </div>
        <div className="why-it-works-item">
          <h3>
            <a href="https://www.forbes.com/sites/theyec/2020/02/03/why-every-business-needs-a-website/?sh=7c0912716e75">
              Credibility
            </a>
          </h3>
          <p>
            Having an online presence like a website adds credibility to your business. To potential customers this
            makes your business seem more legitimate, increasing the chances they follow thought with a purchase.
          </p>
        </div>
        <div className="why-it-works-item">
          <h3>
            <a href="https://www.godaddy.com/garage/why-need-small-business-website/">Free Advertising</a>
          </h3>
          <p>
            We optimize our custom created sites to ensure good search results. When potential customers search for
            services your name will come up. This is free advertising.
          </p>
        </div>
      </div>
    </section>
  );
};
