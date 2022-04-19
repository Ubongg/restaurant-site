import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const removeLinks = () => {
    if (showLinks) {
      setShowLinks(false);
    }
  };

  const changeNav = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <div className={navbar ? "nav sticky" : "nav"}>
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="toggleLinks">
        <div className="menuToggle" onClick={() => setShowLinks(!showLinks)}>
          <span className="menuIconCont">
            <span className="menuIcon"></span>
            <span className="menuIcon"></span>
            <span className="menuIcon"></span>
          </span>
          <span className="menuToggleText">OPEN MENU</span>
        </div>
        <ul className={showLinks ? "links show" : "links"}>
          <li>home</li>
          <li>about</li>
          <li>menu</li>
          <li>reservations</li>
          <li>catering</li>
          <li>gallery</li>
          <li>blog</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
