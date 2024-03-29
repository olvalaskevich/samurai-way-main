import {UserProfileType} from "../components/UsersProfile/UsersProfile";
import {ThunkActionCreatorType} from "./store";
import {networkAPI} from "../api/networkAPI";
import {LogOutType} from "./auth-reducer";

export type ProfileStateType={
    profile:UserProfileType
    posts:Array<PostType>
    newPostText:string
}& {status:string}
export type PostType={
    id:number
    message:string
    likesCount:number
}
export type GetStatusType={
    type:'GET-STATUS',
    status:string
}
export type ActionProfileType=ReturnType<typeof setUserProfileAC> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeStatusAC> |
    GetStatusType |
    LogOutType

let initialState:ProfileStateType={
    profile: {
        userId: null,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    },
    posts:[
        {id:1, message:'Hello every people', likesCount:0},
        {id:1, message:'Hi every people', likesCount:0}
    ],
    newPostText:'',
    status: '---'
}

export const profileReducer=(state:ProfileStateType=initialState, action:ActionProfileType)=>{
    switch (action.type){
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'ADD-POST':
            return {...state, posts:[{id:state.posts.length+1, message:action.message,likesCount: 0}, ...state.posts]}
        case 'CHANGE-STATUS':
            return {...state, status:action.status}
        case 'GET-STATUS':
            return {...state, status:action.status}
        case 'LOG-OUT':
            return {...initialState}
        default : return state
    }
}

export const setUserProfileAC=(profile:UserProfileType)=>{
    return ({type:'SET-USER-PROFILE', profile:profile} as const)
}
export const addPostAC=(message:string)=>{
    return ({type:'ADD-POST', message:message} as const)
}
export const changeStatusAC=(status:string)=>{
    return ({type:'CHANGE-STATUS', status:status} as const)
}
export const getStatusAC=(status:string)=>{
    return ({type:'GET-STATUS', status:status} as const)
}
export const setCheckedUserTC=(userId:number|null):ThunkActionCreatorType=>{
    return (dispatch)=>{
        if (userId)
        networkAPI.setCheckedUser(userId)
            .then((res)=>dispatch(setUserProfileAC(res.data)))
    }
}
export const changeStatusTC=(status:string):ThunkActionCreatorType=>{
    return (dispatch)=>{
        networkAPI.changeStatusProfile(status)
            .then((res)=>{
                if (res.data.resultCode===0)
                dispatch(changeStatusAC(status))})
    }
}
export const getStatusTC=(userId:number|null):ThunkActionCreatorType=>{
    return (dispatch)=>{
        if (userId)
        networkAPI.getStatusProfile(userId)
            .then((res)=>{
                dispatch(getStatusAC(res.data))})
    }
}