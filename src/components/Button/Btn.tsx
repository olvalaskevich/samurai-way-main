import React from 'react';

type BtnPropsType={
    title:string
    onChangePost?:()=>void
}

export const Btn = (props:BtnPropsType) => {
    return (
        <div>
            <button onClick={props.onChangePost}>{props.title}</button>
        </div>
    );
};

