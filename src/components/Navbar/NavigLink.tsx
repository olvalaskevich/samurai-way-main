import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

type NavLinkPropsType={
    name:string,
    adress:string
}

export const NavigLink = (props:NavLinkPropsType) => {
    return (
        <span className={s.link}>
            <NavLink to={props.adress} activeClassName={s.active}>{props.name}</NavLink>
        </span>
    );
};

