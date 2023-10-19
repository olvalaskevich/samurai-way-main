import React from 'react';
import s from './Dialogs.module.css';
import {Names} from "./Names";
import {Messages} from "./Messages";

export type NameType={
    id:string,
    name:string
}


export const Dialogs = () => {
    let names=[
        {id:'1', name:'Alice'},
        {id:'2', name:'Olga'},
        {id:'3', name:'Anna'},
        {id:'4', name:'Helen'},
        {id:'5', name:'Ivan'},
    ]
    let messages=['Hello','How are you?']


    return (
        <div className={s.dialogs}>
            <Names names={names}/>
            <Messages messages={messages}/>
        </div>
    );
};

