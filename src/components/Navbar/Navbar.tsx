import React from 'react';
import s from './Navbar.module.css'
import {NavigLink} from "./NavigLink";



export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavigLink name='Profile' adress={'/profile'}/>
            <NavigLink name='Messages' adress={'/dialogs'}/>
            <NavigLink name='News' adress={'/news'}/>
            <NavigLink name='Music' adress={'/music'}/>
            <NavigLink name='Settings' adress={'/settings'}/>
        </nav>
    );
};

