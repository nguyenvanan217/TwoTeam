import React from 'react';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';

import Logo from '../../assets/logo.png';
import './Navbar.css';
import { MenuItems } from './MenuItems';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    //     const video = document.getElementById('myVideo');
    //     video.play();
    // }, []);

    const handleMenuToggle = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="">
                    <img src={Logo} alt="" />
                </a>
            </div>
            <div className="menu-icon" onClick={handleMenuToggle}>
                {open ? <IoCloseSharp /> : <TiThMenu />}
            </div>
            <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href="">
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
