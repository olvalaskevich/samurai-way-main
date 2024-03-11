import {UserProfileType} from "../components/UsersProfile/UsersProfile";
import {ThunkActionCreatorType} from "./store";
import {networkAPI} from "../api/networkAPI";

type ProfileStateType={
    profile:UserProfileType
    posts:Array<PostType>
    newPostText:string
}
export type PostType={
    id:number
    message:string
    likesCount:number
}
export type ActionProfileType=ReturnType<typeof setUserProfileAC> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changeStatusAC>

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
    newPostText:''
}

export const profileReducer=(state:ProfileStateType=initialState, action:ActionProfileType)=>{
    switch (action.type){
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'ADD-POST':
            return {...state, posts:[{id:state.posts.length+1, message:action.message,likesCount: 0}, ...state.posts]}
        case 'CHANGE-STATUS':
            return {...state, profile:{...state.profile, lookingForAJobDescription:action.status}}
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
export const setCheckedUserTC=(userId:number):ThunkActionCreatorType=>{
    return (dispatch)=>{
        networkAPI.setCheckedUser(userId)
            .then((res)=>dispatch(setUserProfileAC(res.data)))
    }
}