import React from 'react';
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <img
                src={'https://fikiwiki.com/uploads/posts/2022-02/1644965580_6-fikiwiki-com-p-kartinki-priroda-na-zastavku-telefona-6.jpg'}
                alt={'main pict'}/>
            <div className={s.photo}>
                <img src={"https://klike.net/uploads/posts/2023-01/1673594987_3-24.jpg"} alt={'photo'}/>
            </div>
            <div>text</div>
           <Posts/>
        </div>
    );
};

