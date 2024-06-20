import React, {useState} from 'react';
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {MyProfile} from "./Posts/MyProfile";
import {ProfileForm} from "./ProfileForm";




const Profile = () => {

    let [mode, setMode]=useState(true)
    const сhangeProfile=()=>{
        setMode(false)
    }
    const closeForm=()=>{
        setMode(true)
    }
    if (!mode) return <ProfileForm closeForm={closeForm}/>
    return (
        <div className={s.content}>
            <MyProfile сhangeProfile={сhangeProfile}/>
            <Posts/>
        </div>
    );
};

export default Profile