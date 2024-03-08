import React from 'react';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink} from 'react-router-dom'

import Logo from '../../assets/logo-anime-png-2-1400x359.png';
import './Navbar.css';
import { MenuItems } from './MenuItems';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const handleMenuToggle = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/">
                    <img src={Logo} alt="" />
                </NavLink>
            </div>
            <div className="menu-icon" onClick={handleMenuToggle}>
                {open ? <IoCloseSharp /> : <TiThMenu />}
            </div>
            <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink className={item.cName} to={item.url}>
                                {item.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
