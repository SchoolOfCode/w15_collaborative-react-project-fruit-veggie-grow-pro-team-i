import React, {Component}  from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'


const Navbar = () => {
    return (
        <>
        <div className="color-border"></div> 
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Logo<i className="navbar-icon"></i></h1>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.className} href={item.link}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    );
   }

export default Navbar;