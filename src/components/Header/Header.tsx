import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { HeaderProps } from "./types";
import "./Header.scss";
import { useState } from "react";

export const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
    // document.body.style.overflow = "hidden";
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    // document.body.style.overflow = "visible";
  };
  return (
    <header className="header">
      <div>ranger code</div>

      {/* <FontAwesomeIcon onClick={handleMobileMenuOpen} size="2x" className="mobile-menu-icon" icon={faBars} /> */}
      <div className="header-links">
        <a href="#whoWeAre">Who We Are</a>
        <a href="#whatWeDo">What We Do</a>
        <a href="#philosophy">Our Philosophy</a>
        <a href="#contact">
          <span>Contact</span>
        </a>
      </div>
      <nav className={`mobile-nav-bar ${isMobileMenuOpen && "mobile-nav-bar-open"}`}>
        {/* <FontAwesomeIcon
          onClick={handleMobileMenuClose}
          size="2x"
          className="mobile-menu-close-icon"
          icon={faXmark}
          color="#fff"
        /> */}

        <div className="mobile-header-links">
          <a onClick={handleMobileMenuClose} href="#whoWeAre">
            Who We Are
          </a>
          <a onClick={handleMobileMenuClose} href="#whatWeDo">
            What We Do
          </a>
          <a onClick={handleMobileMenuClose} href="#philosophy">
            Our Philosophy
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
