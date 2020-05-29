import React, { useState } from "react";
import logo from "./logo.png";
import MenuNav from "../menu-nav/Menu-nav";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuDrawer = () => {
    setMenuOpen((state) => !state);
  };

  const menuClass = menuOpen ? "animate__animated animate__slideInDown" : "is-hidden-mobile";
  return (
    <div className="header-component">
      <div className="items">
        <img className="logo" src={logo} width="400px" alt="logo-marsh-hall" />
        <p className="subtitle">Painting & Decorating</p>
        <i
          className="menu-burger fas fa-bars fa-3x is-hidden-tablet"
          onClick={toggleMenuDrawer}
        />
      </div>
      <div className={menuClass}>
        <MenuNav />
      </div>
    </div>
  );
}

export default Header;
