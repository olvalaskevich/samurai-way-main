import React from 'react';

type NavLinkPropsType={
    name:string
}

export const NavLink = (props:NavLinkPropsType) => {
    return (
        <div>
            <a>{props.name}</a>
        </div>
    );
};

