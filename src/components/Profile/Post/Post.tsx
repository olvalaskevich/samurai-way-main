import React from 'react';
import s from '../Profile.module.css'
import {Btn} from "../../Button/Btn";
import {PostType, ProfileStateType} from "../../../state/profile-reducer";
import {useSelector} from "react-redux";
import {RootStateType} from "../../../state/store";


type PostPropsType={
    text:Array<PostType>
}

export const Post = (props:PostPropsType) => {

    let profile=useSelector<RootStateType, ProfileStateType>((state) => state.profile)
    return (
        <div>
            {props.text.map((p,index)=>{
                return (
                    <div key={index}>
                        <div className={s.avatar}>
                            <img src={profile.profile.photos.small}
                                 alt={'avatar1'}/>
                            <span>{p.message}</span>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

