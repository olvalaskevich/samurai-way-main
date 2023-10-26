import React, {useState} from 'react';
import s from './Dialogs.module.css';
import {Names} from "./Names";
import {Messages} from "./Messages";

export type NameType={
    id:string,
    name:string
}
export type messagesType={
    [key:string]:Array<string>
}


export const Dialogs = () => {

    let [sendMessages, setSendMessages]=useState<Array<string>>([])

    let names=[
        {id:'1', name:'Alice'},
        {id:'2', name:'Olga'},
        {id:'3', name:'Anna'},
        {id:'4', name:'Helen'},
        {id:'5', name:'Ivan'},
    ]
    let messages:messagesType={
        '1': ['Hello','How are you 1 ?'],
        '2': ['Hello','How are you 2 ?'],
        '3': ['Hello','How are you 3 ?'],
        '4': ['Hello','How are you 4 ?'],
        '5': ['Hello','How are you 5 ?'],

    }

    const onClickChecked=(id:string)=>{
        let checkedMessages=messages[id]
        setSendMessages(checkedMessages)
    }



    return (
        <div className={s.dialogs}>
            <Names names={names} onClickChecked={onClickChecked}/>
            <Messages messages={sendMessages}/>
        </div>
    );
};

