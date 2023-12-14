import React, {ChangeEvent, useState} from 'react';
import {Post} from "../Post/Post";
import {Btn} from "../../Button/Btn";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../state/store";
import {postAC} from "../../../state/posts-reducer";




export const Posts = () => {

    let dispatch=useDispatch()

    let allPosts=useSelector<RootStateType, Array<string>>((state)=>state.posts)

    let [newPost, setNewPost]=useState('')

    const onChangeTextareaHandler=(event:ChangeEvent<HTMLTextAreaElement>)=>{
        setNewPost(event.currentTarget.value)

    }

    const onChangePostHandler=()=>{
        dispatch(postAC(newPost))
        setNewPost('')
    }

    return (
        <div>
            <h1>My posts</h1>
            <textarea value={newPost} onChange={onChangeTextareaHandler}></textarea>
            <Btn title='Send' onChangePost={onChangePostHandler}/>
            <Post text={allPosts}/>

        </div>
    );
};

