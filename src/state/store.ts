import {applyMiddleware, combineReducers, createStore} from "redux";
import {postsReducer} from "./posts-reducer";
import {messagesReducer} from "./messages-reducer";
import {usersReducer} from "./users-reducer";
import {thunk} from "redux-thunk";



const rootReducer=combineReducers({
    posts: postsReducer,
    messages: messagesReducer,
    users: usersReducer

})

export type RootStateType=ReturnType<typeof rootReducer>

export const store=createStore(rootReducer, applyMiddleware(thunk))