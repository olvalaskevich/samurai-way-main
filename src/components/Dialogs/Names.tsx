import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {NameType} from "./Dialogs";
import {message} from "antd";

type NamesPropsType={
    names:Array<NameType>
}

export const Names = (props:NamesPropsType) => {
    return (
        <ul className={s.name}>
            {props.names.map((t)=>{
                return <li><NavLink to={'/dialogs/'+ t.id} activeClassName={s.active} className={s.message}>{t.name}</NavLink></li>
            })}

        </ul>
    );
};

