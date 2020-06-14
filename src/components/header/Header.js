import React, { useState } from "react";
import logo from "./logo.png";
import MenuNav from "../menu-nav/MenuNav";

function Header() {
  // need null for the inital menu state
  const [menuOpen, setMenuOpen] = useState(null); 
  const toggleMenuDrawer = () => {
    setMenuOpen((state) => !state);
  };

  const items = [
    { title: "Home", link: "/home" },
    { title: "About us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Projects", link: "/projects" },
    { title: "Price guide", link: "/price-guide" },
    { title: "Contact us", link: "/contact" },
  ];

  return (
    <div className="header-component">
      <div className="items">
        <div className="spacer"></div>
        <div className="logo-wrap">
          <img
            className="logo"
            src={logo}
            width="400px"
            alt="logo-marsh-hall"
          />
          <p className="subtitle is-3">Painting &amp; Decorating</p>
        </div>
        <button
          className={`is-hidden-tablet hamburger hamburger--squeeze ${menuOpen ? 'is-active' : ''}`}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          onClick={toggleMenuDrawer}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className="menu-bar-container">
        <MenuNav items={items} shown={menuOpen} close={toggleMenuDrawer}/>
      </div>
    </div>
  );
}

export default Header;
