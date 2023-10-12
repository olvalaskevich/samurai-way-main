import React from 'react';

type BtnPropsType={
    title:string
}

export const Btn = (props:BtnPropsType) => {
    return (
        <div>
            <button>{props.title}</button>
        </div>
    );
};

