import {applyMiddleware, combineReducers, createStore} from "redux";

import {messagesReducer} from "./messages-reducer";
import {GeneralActionType, usersReducer} from "./users-reducer";
import {thunk, ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionAppStatusType, appReducer} from "./app-reducer";
import {ActionProfileType, profileReducer} from "./profile-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";



const rootReducer=combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    users: usersReducer,
    app: appReducer,
    auth:authReducer

})

export type RootStateType=ReturnType<typeof rootReducer>
export type RootActionType=ActionAppStatusType | GeneralActionType | ActionProfileType | AuthActionsType
export type ThunkActionCreatorType=ThunkAction<void, RootStateType, unknown, RootActionType>
export type DispatchActionType=ThunkDispatch<RootStateType, unknown, RootActionType>

export const store=createStore(rootReducer, applyMiddleware(thunk))