import React from 'react';
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {MyProfile} from "./Posts/MyProfile";




export const Profile = () => {

    return (
        <div className={s.content}>
            <MyProfile/>
            <Posts/>
        </div>
    );
};

