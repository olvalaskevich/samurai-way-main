import React from 'react';
import s from "./Dialogs.module.css";

type MessagesPropsType={
    messages:Array<string>
}

export const Messages = (props:MessagesPropsType) => {
    return (
        <ul className={s.text}>
            {props.messages.map((t)=>{
                return <li>{t}</li>
            })}
        </ul>
    );
};

