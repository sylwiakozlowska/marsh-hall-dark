import React from "react";
import { Link } from "react-router-dom";

function MenuNav() {
  const items = [
    { title: "Home", link: "/home" },
    { title: "About us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Project", link: "/projects" },
    { title: "Contact us", link: "/contact" },
  ];

  const li = items.map(({ link, title }) => (
    <li className="">
      <Link to={link} className="menu-nav-link">
        {title}
      </Link>
    </li>
  ));
  return (
    <nav className="menu-nav">
      <ul className="menu">{li}</ul>
    </nav>
  );
}

export default MenuNav;
