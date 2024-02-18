import React from 'react';
import s from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DispatchActionType, RootStateType} from "../../state/store";
import {AuthStateType} from "../../state/auth-reducer";

export const Header = () => {
    let dispatch=useDispatch<DispatchActionType>()
    let authState=useSelector<RootStateType, AuthStateType>((state)=>state.auth)
    return (
        <header className={s.header}>
            <img src={'https://avatars.mds.yandex.net/i?id=08f38c1be7061b5c61cbb97e4a8c3e17298bff6a-5364864-images-thumbs&n=13'} alt={'pict'}/>
            {authState.isAuth?<span>{authState.authData.login}</span>:<span>LOGIN</span>}
            <span>LOGIN</span>
        </header>
    );
};

