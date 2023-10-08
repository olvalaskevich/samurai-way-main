import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "./NavLink";



export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavLink name='Profile'/>
            <NavLink name='Messages'/>
            <NavLink name='News'/>
            <NavLink name='Music'/>
            <NavLink name='Settings'/>
        </nav>
    );
};

