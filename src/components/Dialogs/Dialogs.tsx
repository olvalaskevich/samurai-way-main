import React from 'react';
import s from './Dialogs.module.css';
import {Messages} from "./Messages";
import {NameType} from "../../App";
import {NavLink} from "react-router-dom";



type DialogsPropsType={
    names:Array<NameType>,
    onClickChecked:(id:string)=>void
}


export const Dialogs = (props:DialogsPropsType) => {


    return (
        <div className={s.dialogs}>
            <ul className={s.name}>
                {props.names.map((t)=>{
                    const onClickCheckedHandler=()=>{
                        props.onClickChecked(t.id)
                    }


                    return <li><NavLink onClick={onClickCheckedHandler}
                                        to={'/dialogs/' + t.id}
                                        activeClassName={t.isActive? s.active:''}
                                        className={s.message}>{t.name}
                    </NavLink>
                        {t.isActive && <Messages idN={t.id}/>}
                    </li>
                })}

            </ul>

        </div>
    );
};

