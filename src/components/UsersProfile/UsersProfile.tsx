import React from "react";
import {useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {ProfileStateType} from "../../state/profile-reducer";
import {Redirect} from "react-router-dom";
import {StatusType} from "../../state/app-reducer";
import u from '../Users/Users.module.css'


export type UserProfileType={
    aboutMe:string | null
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
            <div className={u.userProfile}>
                <img
                    src={user.profile.photos.small}
                    alt={'user ava'}/>
                <div>{user.status}</div>
                <div className={u.usersInfo}>
                    <div>{user.profile.fullName}</div>

                    <div>{user.profile.aboutMe}</div>
                    <div>{user.profile.lookingForAJob}</div>
                    <div>{user.profile.lookingForAJobDescription}</div>
                </div>

            </div>
        );
};