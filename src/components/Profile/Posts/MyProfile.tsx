import React, {useEffect} from 'react';
import s from "../Profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {DispatchActionType, RootStateType} from "../../../state/store";
import {Redirect} from "react-router-dom";
import {EditSpan} from "../EditSpan";
import {changeStatusTC, getStatusTC} from "../../../state/profile-reducer";

export const MyProfile = () => {
    let isAuth=  useSelector<RootStateType, boolean>((state) => state.auth.isAuth)
    let myUserId=useSelector<RootStateType, number|null>((state) => state.auth.authData.id)

    let editSpanTitle=  useSelector<RootStateType, string>((state) => state.profile.status)

    let dispatch=useDispatch<DispatchActionType>()
    const changeEditSpan=(value:string)=>{
        dispatch(changeStatusTC(value))
    }
    useEffect(() => {
        dispatch(getStatusTC(myUserId))
    }, []);
    if (!isAuth) return <Redirect to={'/login'}/>
    return (
        <div>
            <img
                src={'https://fikiwiki.com/uploads/posts/2022-02/1644965580_6-fikiwiki-com-p-kartinki-priroda-na-zastavku-telefona-6.jpg'}
                alt={'main pict'}/>
            <div className={s.photo}>
                <img src={"https://klike.net/uploads/posts/2023-01/1673594987_3-24.jpg"} alt={'photo'}/>
            </div>
            <EditSpan title={editSpanTitle} changeEditSpan={changeEditSpan}/>
        </div>
    );
};

