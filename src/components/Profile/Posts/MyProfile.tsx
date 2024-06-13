import React, {ChangeEvent, useEffect} from 'react';
import s from "../Profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {DispatchActionType, RootStateType} from "../../../state/store";
import {Redirect} from "react-router-dom";
import {EditSpan} from "../EditSpan";
import {
    ChangeProfilePhotoTC,
    changeStatusTC,
    getStatusTC,
    ProfileStateType,
    setCheckedUserTC
} from "../../../state/profile-reducer";
import img from '../../../assets/i.webp'

export const MyProfile = () => {
    let isAuth=  useSelector<RootStateType, boolean>((state) => state.auth.isAuth)
    let myUserId=useSelector<RootStateType, number|null>((state) => state.auth.authData.id)
    let editSpanTitle=  useSelector<RootStateType, string>((state) => state.profile.status)
    let photo=useSelector<RootStateType, string>((state) => state.profile.profile.photos.small)

    let dispatch=useDispatch<DispatchActionType>()
    const changeEditSpan=(value:string)=>{
        dispatch(changeStatusTC(value))
    }
    useEffect(() => {
        dispatch(setCheckedUserTC(myUserId))
        dispatch(getStatusTC(myUserId))
    }, []);
    const ChangeFileHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files?.length){
            dispatch(ChangeProfilePhotoTC(e.target.files[0]))
        }

    }

    if (!isAuth) return <Redirect to={'/login'}/>
    return (
        <div>
            <img
                src={'https://fikiwiki.com/uploads/posts/2022-02/1644965580_6-fikiwiki-com-p-kartinki-priroda-na-zastavku-telefona-6.jpg'}
                alt={'main pict'}/>
            <div className={s.photo}>
                <img src={photo} alt={'photo'}/>
            </div>
            <input type={"file"} onChange={(e)=>ChangeFileHandler(e)}></input>
            <div>
                <EditSpan title={editSpanTitle} changeEditSpan={changeEditSpan}/>
            </div>

        </div>
    );
};

