import { HeaderProps } from "./types";
import "./Header.scss";

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div>ranger code</div>
      <div className="header-links">
        <a href="#whoWeAre">Who We Are</a>
        <a href="#whatWeDo">What We Do</a>
        <a href="#philosophy">Our Philosophy</a>
        <a href="#contact">
          <span>Contact</span>
        </a>
      </div>
    </header>
  );
};
