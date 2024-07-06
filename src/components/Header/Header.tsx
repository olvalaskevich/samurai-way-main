import React, {useState} from 'react';
import s from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DispatchActionType, RootStateType} from "../../state/store";
import {AuthStateType, LogOutTC} from "../../state/auth-reducer";
import {Redirect} from "react-router-dom";

export const Header = () => {

    let authState=useSelector<RootStateType, AuthStateType>((state)=>state.auth)

    let [isOpen, setIsOpen]=useState<boolean>(false)
    let [isLogin, setIsLogin]=useState<boolean>(false)
    let [isLogOut, setIsLogOut]=useState<boolean>(false)
    let dispatch=useDispatch<DispatchActionType>()



    return (
        <header className={s.header}>
            <h1>Social Network</h1>
            {authState.isAuth?
                <button onClick={()=>setIsOpen(!isOpen)}>{authState.authData.login}</button> :
                <button onClick={()=>setIsLogin(!isLogin)}>LOGIN</button>}
            {isLogin && <Redirect to={'/profile'}/>}
            {isOpen && <div>
                <button onClick={() => {
                    dispatch(LogOutTC())
                    setIsOpen(!isOpen)
                    setIsLogin(!isLogin)
                    setIsLogOut(!isLogOut)
                }}>
                    {'> '}LOGOUT
                </button>

            </div>}
            {isLogOut && <Redirect to={'/'}/>}
        </header>
    );
};

