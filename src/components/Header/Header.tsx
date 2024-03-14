import React, {useState} from 'react';
import s from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {AuthStateType, LogOutTC} from "../../state/auth-reducer";
import {Redirect} from "react-router-dom";

export const Header = () => {

    let authState=useSelector<RootStateType, AuthStateType>((state)=>state.auth)

    let [isOpen, setIsOpen]=useState<boolean>(false)
    let [isLogin, setIsLogin]=useState<boolean>(false)

    let dispatch=useDispatch()



    return (
        <header className={s.header}>
            <img src={'https://avatars.mds.yandex.net/i?id=08f38c1be7061b5c61cbb97e4a8c3e17298bff6a-5364864-images-thumbs&n=13'} alt={'pict'}/>
            {authState.isAuth?
                <button onClick={()=>setIsOpen(!isOpen)}>{authState.authData.login}</button> :
                <button onClick={()=>setIsLogin(!isLogin)}>LOGIN</button>}
            {isLogin && <Redirect to={'/profile'}/>}
            {isOpen && <div>
                <button onClick={()=>{
                dispatch(LogOutTC())
                setIsOpen(!isOpen)
            }}>LOGOUT</button>
            </div>}

        </header>
    );
};

