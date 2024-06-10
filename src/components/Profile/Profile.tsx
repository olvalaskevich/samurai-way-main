import React from 'react';
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {MyProfile} from "./Posts/MyProfile";




const Profile = () => {

    return (
        <div className={s.content}>
            <MyProfile/>
            <Posts/>
        </div>
    );
};

export default Profile