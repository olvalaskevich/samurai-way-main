import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../Profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {DispatchActionType, RootStateType} from "../../../state/store";
import {Redirect} from "react-router-dom";
import {EditSpan} from "../EditSpan";
import {
    ChangeProfilePhotoTC,
    changeStatusTC,
    getStatusTC,
    ProfileStateType,
    setCheckedUserTC
} from "../../../state/profile-reducer";
import {ProfileForm} from "../ProfileForm";
import {Posts} from "./Posts";

type MyProfilePropsType={
    changeProfile:()=>void
    mode:boolean
}
export const MyProfile = (props:MyProfilePropsType) => {
    let isAuth=  useSelector<RootStateType, boolean>((state) => state.auth.isAuth)
    let myUserId=useSelector<RootStateType, number|null>((state) => state.auth.authData.id)
    // let editSpanTitle=  useSelector<RootStateType, string>((state) => state.profile.status)
    let profile=useSelector<RootStateType, ProfileStateType>((state) => state.profile)
    let editSpanTitle=profile.status

    let dispatch=useDispatch<DispatchActionType>()
    const changeEditSpan=(value:string)=>{
        dispatch(changeStatusTC(value))
    }
    useEffect(() => {
        dispatch(setCheckedUserTC(myUserId))
        dispatch(getStatusTC(myUserId))
    }, []);
    const ChangeFileHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files?.length){
            dispatch(ChangeProfilePhotoTC(e.target.files[0]))
        }

    }



    if (!isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={props.mode ? s.wrapper : s.edit}>

            <div className={s.photo}>
                <img src={profile.profile.photos.large} alt={'photo'}/>
                <div>
                    <EditSpan title={editSpanTitle} changeEditSpan={changeEditSpan}/>
                </div>
            </div>

            <div className={s.container}>
                <input className={s.inputFile} type={"file"} onChange={(e) => ChangeFileHandler(e)}/>
                <span className={s.pencil}>edit</span>
            </div>
            <div className={s.info}>
                <div className={s.description}>
                    <div>
                        About me: {profile.profile.aboutMe}
                    </div>
                    <div>
                        Looking for a job: {profile.profile.lookingForAJob ? 'Yes' : 'No'}
                    </div>
                    <div>
                        Looking for a job description: {profile.profile.lookingForAJobDescription}
                    </div>
                    <div>
                        Contacts:
                        <div>
                            <a href={`${profile.profile.contacts.github}`}>GitHub</a>
                            <a href={`${profile.profile.contacts.instagram}`}>Instagram</a>
                        </div>
                    </div>
                    <button onClick={props.changeProfile}>✏️</button>
                </div>
                <Posts/>
            </div>
        </div>
    );
};

