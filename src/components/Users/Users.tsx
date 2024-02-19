import React, {MouseEventHandler, useEffect, useState} from 'react';
import u from './users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DispatchActionType, RootActionType, RootStateType, ThunkActionCreatorType} from "../../state/store";
import {FollowAC, GetUsersTC, SetFollowTC} from "../../state/users-reducer";
import '../../index.css'
import {StatusType} from "../../state/app-reducer";
import {CircularProgress} from "@mui/material";
import {NavLink} from "react-router-dom";
import {setCheckedUserTC} from "../../state/profile-reducer";


export type userType={
    id: number
    name: string
    status: string
    photos: {
        small:string
        large:string
    }
    followed: boolean
}

export type UserStateResponseType={
    items:Array<userType>
    totalCount:number
    error:string
}

export type UserStateType={
    items:Array<userType>
    totalCount:number
    error:string
} & {countPage:number} & {status:StatusType}

export const Users = () => {
    let dispatch = useDispatch<DispatchActionType>()
    let count=useSelector<RootStateType, number>((state)=>state.users.countPage)
    useEffect(() => {
        dispatch(GetUsersTC(count, 1))
    }, []);

    let users = useSelector<RootStateType, UserStateType>((state) => state.users)
    let loading=useSelector<RootStateType,StatusType>((state)=>state.users.status)
    let [activePage, setActive] = useState(1)
    let countOfPages = users.totalCount % 10 === 0 ? users.totalCount / 10 : (users.totalCount / 10) + 1
    let resPages = countOfPages > 10 ? 10 : countOfPages
    let pages = []
    for (let i = 1; i <= resPages; i++) {
        pages.push(i)
    }



    return (

<>
    {pages.map((p)=>{
        return <span className={activePage===p?'active':''} onClick={()=>{
            dispatch(GetUsersTC(count, p))
            setActive(p)
        }}>{p}</span>})
    }
    <div>
        {loading === 'loading' && <CircularProgress/>}
    </div>
    {users.items.map((user)=>{

            return <div className={u.wrapper}>
                <div className={u.ava}>
                    <NavLink onClick={()=>{dispatch(setCheckedUserTC(user.id))}} to={'/users/usersprofile/'+user.id}>
                        <img src={user.photos.small} alt={'ava'}/>
                    </NavLink>
                    <button disabled={user.status==='loading'} onClick={()=>{dispatch(SetFollowTC(user.id))}}>
                        {user.followed? 'UNFOLLOW':'FOLLOW'}
                    </button>
                </div>
                <div className={u.container}>
                    <div className={u.name}>
                        <span>{user.name}</span>
                        <div>{user.status}</div>
                    </div>

                </div>
            </div>
        })}
</>
    );


};
