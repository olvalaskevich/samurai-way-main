import React from 'react';
import s from '../Profile.module.css'
import {Btn} from "../../Button/Btn";
import {PostType} from "../../../state/profile-reducer";


type PostPropsType={
    text:Array<PostType>
}

export const Post = (props:PostPropsType) => {
    return (
        <div>
            {props.text.map((p,index)=>{
                return (
                    <div key={index}>
                        <div className={s.avatar}>
                            <img src={'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'}
                                 alt={'avatar1'}/>
                            <span>{p.message}</span>
                        </div>
                        <Btn title='Like'/>
                    </div>
                )
            })}

        </div>
    );
};

