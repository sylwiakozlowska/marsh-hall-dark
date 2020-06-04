import React from "react";
import { Link } from "react-router-dom";

function MenuNav() {
  const items = [
    { title: "Home", link: "/home" },
    { title: "About us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Projects", link: "/projects" },
    { title: "Price guide", link: "/price-guide" },
    { title: "Contact us", link: "/contact" },
  ];

  const li = items.map(({ link, title }) => (
    <li key={link} className="nav-list">
      <Link to={link} className="nav-link">
        {title}
      </Link>
    </li>
  ));
  return (
    <nav className="menu-nav-component">
      <ul className="menu">{li}</ul>
    </nav>
  );
}

export default MenuNav;
