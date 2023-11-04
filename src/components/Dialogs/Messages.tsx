import React, {useState} from 'react';
import s from "./Dialogs.module.css";
import {messagesType} from "../../App";

type MessagesPropsType={
    messages: messagesType
    idN:string
    addMessage:(value:string, id:string)=>void

}

export const Messages = (props:MessagesPropsType) => {

    let [value, setValue]=useState('')

    const addMessageHandler=()=>{
        props.addMessage(value, props.idN)
        setValue('')
    }

    return (
        <>
        <ul className={s.text}>

            {props.messages[props.idN].map((t)=>{
                return <li>{t}</li>
            })}
            <textarea value={value} onChange={(e)=>{setValue(e.currentTarget.value)}}></textarea>
            <button onClick={addMessageHandler}>Send</button>
        </ul>

        </>
    );
};

