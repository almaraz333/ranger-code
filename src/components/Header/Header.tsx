import { HeaderProps } from "./types";
import "./Header.scss";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";

export const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="dog logo" />
        <div>ranger code</div>
      </div>
      <div className="header-links">
        <a href="#whoWeAre">Who We Are</a>
        <a href="#philosophy">Our Philosophy</a>
        <a href="#whatWeDo">What We Do</a>
        <a href="#WhyItWorks">Why It Works</a>
        <a href="#contact">
          <span>Contact</span>
        </a>
      </div>
      <nav className={`mobile-nav-bar ${isMobileMenuOpen && "mobile-nav-bar-open"}`}>
        <div className="mobile-header-links">
          <a onClick={handleMobileMenuClose} href="#whoWeAre">
            Who We Are
          </a>
          <a onClick={handleMobileMenuClose} href="#philosophy">
            Our Philosophy
          </a>
          <a onClick={handleMobileMenuClose} href="#whatWeDo">
            What We Do
          </a>
          <a onClick={handleMobileMenuClose} href="#WhyItWorks">
            WhyItWorks
          </a>
          <a onClick={handleMobileMenuClose} href="#contact">
            <span>Contact</span>
          </a>
        </div>
      </nav>
      <div
        className={`mobile-nav-button ${isMobileMenuOpen && "mobile-nav-button-open"}`}
        data-mdb-toggle="collapse"
        aria-controls="navbarToggleExternalContent9"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <div className={`animated-icon1 ${isMobileMenuOpen && "open"}`}>
          <span className={`${isMobileMenuOpen && "open"}`}></span>
          <span className={`${isMobileMenuOpen && "open"}`}></span>
          <span className={`${isMobileMenuOpen && "open"}`}></span>
        </div>
      </div>
    </header>
  );
};
