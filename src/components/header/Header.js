import React, { useState } from "react";
import logo from "./logo.png";
import MenuNav from "../menu-nav/MenuNav";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <i
          className="menu-burger fas fa-bars fa-2x is-hidden-tablet"
          onClick={toggleMenuDrawer}
        />
      </div>
      <div className="menu-bar-container">
        <MenuNav items={items} shown={menuOpen} />
      </div>
    </div>
  );
}

export default Header;
