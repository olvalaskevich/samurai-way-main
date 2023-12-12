import React from 'react';
import u from './users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {followAC} from "../../state/users-reducer";

type addressType={
    city:string
    street:string
}

export type userType={
    id:number
    follow:boolean
    name:string
    description:string
    address: addressType
}

export const Users = () => {
    let users=useSelector<RootStateType, Array<userType>>((state)=>state.users as Array<userType>)
    let dispatch=useDispatch()

    return (

<>
    {users.map((user)=>{
            return <div className={u.wrapper}>
                <div className={u.ava}>
                    <img src={'https://avatars.mds.yandex.net/i?id=77768f59f45a292ee29cdab856d5adc77a38e363-4231455-images-thumbs&n=13'} alt={'ava'}/>
                    <button onClick={()=>{dispatch(followAC(user.id))}}>
                        {user.follow? 'UNFOLLOW':'FOLLOW'}
                    </button>
                </div>
                <div className={u.container}>
                    <div className={u.name}>
                        <span>NAME</span>
                        <div>DESCRIPTION</div>
                    </div>
                    <span>{user.address.city+','+ user.address.street}</span>
                </div>
            </div>
        })}
</>
    );


};
