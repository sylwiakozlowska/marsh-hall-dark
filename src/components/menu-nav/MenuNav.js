import React from "react";
import { NavLink } from "react-router-dom";

function MenuNav({ items, shown, close}) {
  const animationClass = shown
    ? "animate__animated animate__slideInDown"
    : "animate__animated animate__slideOutUp";

  const li = items.map(({ link, title }) => (
    <li key={link} className="nav-item">
      <NavLink
        to={link}
        activeClassName="active"
        className={"nav-link"}
        onClick={close}
      >
        {title}
      </NavLink>
    </li>
  ));

  return (
    <nav className="menu-bar-component">
      <div className="animation-wrapper">
        <div className={animationClass}>
          <ul className="menu is-hidden-tablet">{li}</ul>
        </div>
      </div>
      <ul className="menu is-hidden-mobile">{li}</ul>
    </nav>
  );
}

export default MenuNav;
