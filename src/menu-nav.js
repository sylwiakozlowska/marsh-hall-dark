import React from 'react';


function MenuNav() {
    const items = [
        {title: 'Home', link: '/home'},
        {title: 'About us', link: '/About us'},
        {title: 'Services', link: '/Services'},
        {title: 'Project', link: '/Projects'},
        {title: 'Contact us', link: '/Contact us'},

        ];
       const li = items.map(({link, title}) => (
          <a className="menu-nav-link" href={link}>
            <li>{title}</li>
          </a>
        ));
return(
     <nav className="main-wrapper">
    <ul className="menu-nav">{li}</ul>
  </nav>
)
}

export default MenuNav;