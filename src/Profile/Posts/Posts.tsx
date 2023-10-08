import React from 'react';
import {Post} from "../Post/Post";
import {Btn} from "../../components/Btn";

export const Posts = () => {
    return (
        <div>
            <h1>My posts</h1>
            <textarea></textarea>
            <Btn title='Send'/>
            <Post text='Hello!'/>
            <Post text='Live is wonderful'/>
            <Post text='I love world'/>
            <Post text='WOW'/>
            <Post text='Hahahaha!'/>
        </div>
    );
};

