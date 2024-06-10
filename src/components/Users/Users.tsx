import React, {useEffect, useState} from 'react';
import u from './users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DispatchActionType, RootStateType} from "../../state/store";
import {GetUsersTC, SetFollowTC} from "../../state/users-reducer";
import '../../index.css'
import {StatusType} from "../../state/app-reducer";
import {CircularProgress} from "@mui/material";
import {NavLink, Redirect} from "react-router-dom";
import {getStatusTC, setCheckedUserTC} from "../../state/profile-reducer";


export type userType={
    id: number
    name: string
    status: string
    photos: {
        small:string
        large:string
    }
    followed: boolean
} & {statusFollowed:string}

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

const Users = () => {
    let dispatch = useDispatch<DispatchActionType>()
    let count=useSelector<RootStateType, number>((state)=>state.users.countPage)
    let isAuth= useSelector<RootStateType, boolean>((state)=>state.auth.isAuth)
    useEffect(() => {
        if (isAuth)
        dispatch(GetUsersTC(count, 1))
    }, []);

    let users = useSelector<RootStateType, UserStateType>((state) => state.users)
    let loading=useSelector<RootStateType,StatusType>((state)=>state.users.status)
    let [activePage, setActive] = useState(1)
    let [newFirstPage, setNewFirstPage] = useState(1)
    let countOfPages = users.totalCount % 3 === 0 ? users.totalCount / 3 : (users.totalCount / 3) + 1
    // let resPages = countOfPages > 10 ? 10 : countOfPages
    let pages = []
    for (let i = newFirstPage; i <= newFirstPage+9; i++) {
        pages.push(i)
    }

    if (!isAuth) return <Redirect to={'/login'}/>

    return (

<>
    <div>
        {loading === 'loading' && <CircularProgress/>}
    </div>
    {users.items.map((user)=>{

            return <div className={u.wrapper}>
                <div className={u.ava}>
                    <NavLink onClick={()=>{
                        dispatch(setCheckedUserTC(user.id))
                        dispatch(getStatusTC(user.id))
                    }} to={`/users/usersprofile/${user.id}`}>
                        <img src={user.photos.small} alt={'ava'}/>
                    </NavLink>
                    <button disabled={user.statusFollowed==='loading'} onClick={()=>{dispatch(SetFollowTC(user.id))}}>
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
    {newFirstPage > 10 && <button onClick={() => {
        setNewFirstPage((prevState) => prevState - 10)
        setActive(newFirstPage-10)
        dispatch(GetUsersTC(count, newFirstPage-10))
    }}>PREV</button>}
    {pages.map((p) => {
        return <span className={activePage === p ? 'active' : ''} onClick={() => {
            dispatch(GetUsersTC(count, p))
            setActive(p)
        }}>{p}</span>
    })}
    {countOfPages > 10 && <button onClick={() => {
        setNewFirstPage(newFirstPage + 10)
        setActive(newFirstPage+10)
        dispatch(GetUsersTC(count, newFirstPage+10))
    }}>NEXT</button>}
</>
    );
};

export default Users