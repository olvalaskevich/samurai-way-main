import React from "react";
import s from "../Profile/Profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {DispatchActionType, RootStateType} from "../../state/store";
import {setCheckedUserTC} from "../../state/profile-reducer";

export type UserProfileType={
    userId: number|null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    }
    photos: {
    small: string
    large: string
    }
}

export const UsersProfile = () =>{

    let user=useSelector<RootStateType, UserProfileType>((state)=>state.profile.profile)

    return (
        <div>
            <img
                src={user.photos.small}
                alt={'user ava'}/>
            <div>{user.fullName}</div>
        </div>
    );
};