import React, {useState} from 'react';
import s from './Profile.module.css';
import {MyProfile} from "./Posts/MyProfile";
import {ProfileForm} from "./ProfileForm";




const Profile = () => {

    let [mode, setMode]=useState(true)
    const changeProfile=()=>{
        setMode(false)
    }
    const closeForm=()=>{

        setMode(true)
    }

    return (
        <div>
            {!mode && <div className={s.form}><ProfileForm closeForm={closeForm}/></div>}
            <MyProfile mode={mode} changeProfile={changeProfile}/>
        </div>
    );
};

export default Profile