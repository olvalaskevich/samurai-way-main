import React, {useEffect} from "react";
import s from "../Profile/Profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {DispatchActionType, RootStateType} from "../../state/store";
import {getStatusTC, ProfileStateType, setCheckedUserTC} from "../../state/profile-reducer";
import {Redirect} from "react-router-dom";
import {StatusType} from "../../state/app-reducer";

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

    let user = useSelector<RootStateType, ProfileStateType>((state) => state.profile)
    let load= useSelector<RootStateType, StatusType>((state) => state.users.status)

    if (!user.profile.userId && load==='success')
        return <Redirect to={'/users'}/>
    else
        return (
            <div>
                <img
                    src={user.profile.photos.small}
                    alt={'user ava'}/>
                <div>{user.profile.fullName}</div>
                <div>{user.status}</div>
            </div>
        );
};