import React, {ChangeEvent, useState} from 'react';
import {Post} from "../Post/Post";
import {Btn} from "../../Button/Btn";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../state/store";
import {addPostAC, ProfileStateType} from "../../../state/profile-reducer";
import s from "../Profile.module.css";





export const Posts = () => {

    let dispatch=useDispatch()
    let profile=useSelector<RootStateType, ProfileStateType>((state)=>state.profile)
    let allPosts=profile.posts
    let [newPost, setNewPost]=useState('')
    let [isOpen, setIsOpen]=useState(false)

    const onChangeTextareaHandler=(event:ChangeEvent<HTMLTextAreaElement>)=>{
        setNewPost(event.currentTarget.value)
    }
    const onChangePostHandler=()=>{
        dispatch(addPostAC(newPost))
        setNewPost('')
    }

    return (
        <div className={s.posts}>
            <h1 onClick={()=>setIsOpen(!isOpen)}>My posts {isOpen?'👆':'👇'}</h1>
            {isOpen && <Post text={allPosts}/>}
            <div className={s.area}>
            <textarea value={newPost} onChange={onChangeTextareaHandler} placeholder={'Enter new post'}></textarea>
            <Btn title='Send' onChangePost={onChangePostHandler}/>
            </div>
        </div>
    );
};

