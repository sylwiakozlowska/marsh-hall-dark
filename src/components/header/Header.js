import React, {useState} from 'react';
import logo from './logo.png';
import MenuNav from '../menu-nav/Menu-nav';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenuDrawer = () => {    
       setMenuOpen(state => !state);
    }

    const menuClass = menuOpen ? '' : 'is-hidden';
    return (
        <div className="header">
            <img className="logo" src={logo} width="400px" alt="logo-marsh-hall"/>
            <p className="header-subtitle">Painting & Decorating</p>
            <i className="menu-burger fas fa-bars fa-3x" onClick={toggleMenuDrawer}/>
            <div className={menuClass}>
                <MenuNav/> 
            </div>
        </div>
    )
}

export default Header;