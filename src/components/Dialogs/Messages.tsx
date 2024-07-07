import React, {ChangeEvent, useState} from 'react';
import s from "./Dialogs.module.css";
import {messagesType} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {messagesAC} from "../../state/messages-reducer";

type MessagesPropsType={

    idN:string

}

export const Messages = (props:MessagesPropsType) => {

    let [value, setValue]=useState('')

    let dispatch=useDispatch()

    let messages=useSelector<RootStateType,messagesType>((state)=>state.messages)

    const addMessageHandler=()=>{
        dispatch(messagesAC(props.idN,value))
        setValue('')
    }

    const onChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setValue(e.currentTarget.value)
    }

    return (
        <>
        <ul className={s.text}>

            {messages[props.idN].map((t)=>{
                return <li>{t}</li>
            })}
            <div className={s.fieldText}>
                <textarea className={s.textMessages} value={value} onChange={onChangeHandler} placeholder={'Enter new message'}></textarea>
                <button onClick={addMessageHandler}>Send</button>
            </div>

        </ul>

        </>
    );
};

