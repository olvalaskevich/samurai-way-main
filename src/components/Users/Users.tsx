import React from 'react';
import u from './users.module.css'

export const Users = () => {
    return (
        <div className={u.wrapper}>
            <div className={u.ava}>
            <img src={'https://avatars.mds.yandex.net/i?id=77768f59f45a292ee29cdab856d5adc77a38e363-4231455-images-thumbs&n=13'} alt={'ava'}/>
            <button>Follow</button>
            </div>
            <div className={u.container}>
                <div className={u.name}>
                    <span>NAME</span>
                    <div>DESCRIPTION</div>
                </div>
                <span>ADDRESS</span>
            </div>
        </div>
    );
};
