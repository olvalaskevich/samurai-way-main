import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {NameType} from "./Dialogs";


type NamesPropsType={
    names:Array<NameType>
    onClickChecked:(id:string)=>void
}

export const Names = (props:NamesPropsType) => {
    return (
        <ul className={s.name}>
            {props.names.map((t)=>{
                return <li><NavLink onClick={()=>{props.onClickChecked(t.id)}} to={'/dialogs/'+ t.id} activeClassName={s.active} className={s.message}>{t.name}</NavLink></li>
            })}

        </ul>
    );
};

