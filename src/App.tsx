import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Users} from "./components/Users/Users";

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



        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='content'>
                        <Route path={'/profile'} render={() => <Profile/>}/>
                        <Route path={'/dialogs'} render={() => <Dialogs names={names}
                                                                        onClickChecked={onClickChecked}/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/users'} render={() => <Users/>}/>

                    </div>

                </div>
            </BrowserRouter>
        );
    }


export default App;
