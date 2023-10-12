import React from 'react';
import s from '../Profile.module.css'
import {Btn} from "../../Button/Btn";

type PostPropsType={
    text:string
}

export const Post = (props:PostPropsType) => {
    return (
        <div>
            <div className={s.avatar}>
                <img src={'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'} alt={'avatar1'}/>
                <span>{props.text}</span>
            </div>
            <Btn title='Like'/>
        </div>
    );
};

