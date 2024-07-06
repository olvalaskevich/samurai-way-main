import React from 'react';
import s from "../Profile/Profile.module.css";

type BtnPropsType={
    title:string
    onChangePost?:()=>void
}

export const Btn = (props:BtnPropsType) => {
    return (
        <div className={s.postsButton}>
            <button onClick={props.onChangePost}>{props.title}</button>
        </div>
    );
};

