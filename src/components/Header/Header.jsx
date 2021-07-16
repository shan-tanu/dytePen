import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={Logo} alt="Pen" className="logo" />
        <p className="logo-text">DytePen</p>
      </div>
      <div className="header-right">
        <a
          href="https://shan-tanu.github.io/portfolio/#/"
          target="_blank"
          className="portfolio-link"
          rel="noreferrer"
        >
          My Portfolio
        </a>
      </div>
    </div>
  );
};

export default Header;
