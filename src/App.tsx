import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {UsersProfile} from "./components/UsersProfile/UsersProfile";
import {useDispatch, useSelector} from "react-redux";
import {DispatchActionType, RootStateType} from "./state/store";
import {CircularProgress} from "@mui/material";
import {setAuthDataTC} from "./state/auth-reducer";
import {Login} from "./components/Login/Login";
import {ErrorUtil} from "./components/Error";
import {WithSuspense} from "./hok/WithSuspense";

const Profile = React.lazy(() => import('./components/Profile/Profile'));
const Users = React.lazy(() => import('./components/Users/Users'));

export type NameType={
    id:string,
    name:string,
    isActive:boolean
}
export type messagesType={
    [key:string]:Array<string>
}


function App() {


    let [names, setNames] = useState<Array<NameType>>([
        {id: '1', name: 'Alice', isActive: false},
        {id: '2', name: 'Olga', isActive: false},
        {id: '3', name: 'Anna', isActive: false},
        {id: '4', name: 'Helen', isActive: false},
        {id: '5', name: 'Ivan', isActive: false},
    ])


    const onClickChecked = (id: string) => {
        let unActive = names.map((u) => u.isActive ? {...u, isActive: false} : {...u})
        let activeName = unActive.find((n) => n.id === id)
        if (activeName){
            activeName.isActive = true
        setNames([...unActive])
        }
    }
    let load = useSelector<RootStateType, string>((state) => state.app.status)
    let dispatch = useDispatch<DispatchActionType>()


    useEffect(() => {
        dispatch(setAuthDataTC())
    }, []);


        return (

            <>
            {load==='loading'?<CircularProgress/>:

            <BrowserRouter>
                    <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='content'>
                        <Route path={'/profile'} render={WithSuspense(Profile)}/>
                        <Route path={'/dialogs'} render={() => <Dialogs names={names} onClickChecked={onClickChecked}/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/users'} exact={true} render={WithSuspense(Users)}/>
                        <Route path={'/users/usersprofile'} render={() => <UsersProfile/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                    </div>

                </div>
            </BrowserRouter>
}
                <ErrorUtil/>
</>
        );
    }


export default App;
