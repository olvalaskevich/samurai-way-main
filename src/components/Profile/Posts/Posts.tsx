import React, {useState} from 'react';
import {Post} from "../Post/Post";
import {Btn} from "../../Button/Btn";




export const Posts = () => {

    let [allPosts, setSendMessages]=useState<Array<string>>([
        'Alice Yo','Olga WOW','Anna HEY','Helen MAM','Ivan DAD'
    ])

    let [newPost, setNewPost]=useState('')

    const onChangePost=()=>{
        setSendMessages([newPost, ...allPosts])
        setNewPost('')
    }


    return (
        <div>
            <h1>My posts</h1>
            <textarea value={newPost} onChange={(event)=>{setNewPost(event.currentTarget.value)}}></textarea>
            <Btn title='Send' onChangePost={onChangePost}/>
            <Post text={allPosts}/>

        </div>
    );
};

