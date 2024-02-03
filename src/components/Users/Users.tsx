import React, {MouseEventHandler, useEffect, useState} from 'react';
import u from './users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {FollowAC, GetUsersTC} from "../../state/users-reducer";
import '../../index.css'


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

export type UserStateType={
    items:Array<userType>
    totalCount:number
    error:string
}

export const Users = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetUsersTC(1))
    }, []);

    let users = useSelector<RootStateType, UserStateType>((state) => state.users as UserStateType)
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
            setActive(p)
            dispatch(GetUsersTC(p))
        }}>{p}</span>})
    }

    {users.items.map((user)=>{
            return <div className={u.wrapper}>
                <div className={u.ava}>
                    <img src={user.photos.large} alt={'ava'}/>
                    <button onClick={()=>{dispatch(FollowAC(user.id))}}>
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
