import React, { useState } from "react";
import logo from "./logo.png";
import MenuNav from "../menu-nav/MenuNav";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuDrawer = () => {
    setMenuOpen((state) => !state);
  };

  const menuClass = menuOpen
    ? "animate__animated animate__slideInDown"
    : "is-hidden-mobile";
  return (
    <div className="header-component">
      <div className="items">
        <div className="spacer"></div>
        <div className="logo-wrap">
          <img className="logo" src={logo} width="400px" alt="logo-marsh-hall" />
          <p className="subtitle is-3">Painting &amp; Decorating</p>
        </div>
        <i
          className="menu-burger fas fa-bars fa-2x is-hidden-tablet"
          onClick={toggleMenuDrawer}
        />
      </div>
      <div style={{ overflow: "hidden" }}>
        <div className={menuClass}>
          <MenuNav />
        </div>
      </div>
    </div>
  );
}

export default Header;
