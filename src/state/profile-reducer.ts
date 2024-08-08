import {UserProfileType} from "../components/UsersProfile/UsersProfile";
import {ThunkActionCreatorType} from "./store";
import {networkAPI} from "../api/networkAPI";
import {LogOutType} from "./auth-reducer";
import {ChangeStatusUsersAC} from "./users-reducer";
import {ProfileType} from "../components/Profile/ProfileForm";

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
    LogOutType |
    ReturnType<typeof changeProfilePhotoAC> |
    ReturnType<typeof changeProfileAC>

let initialState:ProfileStateType={
    profile: {
        aboutMe:null,
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
        {id:2, message:'Hi every people', likesCount:0}
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
        case 'CHANGE-PROFILE-PHOTO':
            return {...state, profile: {...state.profile, photos:action.photos}}
        case 'CHANGE-PROFILE':
            return {...state, profile: {...state.profile, ...action.newProfileInfo}}
        default : return state
    }
}

export const setUserProfileAC=(profile:UserProfileType)=> ({type:'SET-USER-PROFILE', profile:profile} as const)

export const addPostAC=(message:string)=>({type:'ADD-POST', message} as const)
export const changeStatusAC=(status:string)=>({type:'CHANGE-STATUS', status} as const)
export const getStatusAC=(status:string)=>({type:'GET-STATUS', status} as const)
export const changeProfilePhotoAC=(photos: {small:string,large:string})=>({type:'CHANGE-PROFILE-PHOTO', photos} as const)
export const setCheckedUserTC = (userId: number | null): ThunkActionCreatorType => {
    return async (dispatch) => {
        if (userId) {
            dispatch(ChangeStatusUsersAC('loading'))
            let res = await networkAPI.setCheckedUser(userId)
            dispatch(setUserProfileAC(res.data))
            // dispatch(ChangeStatusUsersAC('success'))
        }
    }
}
export const changeProfileAC=(newProfileInfo:ProfileType)=>({type:'CHANGE-PROFILE', newProfileInfo} as const)

export const ChangeProfilePhotoTC=(photo:any): ThunkActionCreatorType=>{
    return async (dispatch) => {

        let res = await networkAPI.changeProfilePhoto(photo)
        if (res.data.resultCode === 0){
            dispatch(changeProfilePhotoAC(res.data.data.photos))
        }

    }
}
export const changeStatusTC = (status: string): ThunkActionCreatorType => {
    return async (dispatch) => {
        let res = await networkAPI.changeStatusProfile(status)
        if (res.data.resultCode === 0)
            dispatch(changeStatusAC(status))
    }
}
export const getStatusTC = (userId: number | null): ThunkActionCreatorType => {
    return async (dispatch) => {
        if (userId) {
            let res = await networkAPI.getStatusProfile(userId)
            dispatch(getStatusAC(res.data))
        }
    }
}
export const changeProfileTC = (newProfileInfo: ProfileType): ThunkActionCreatorType => {
    return async (dispatch) => {

            let res = await networkAPI.changeProfileInfo(newProfileInfo)
        if (res.data.resultCode===0){
            dispatch(changeProfileAC(newProfileInfo))
        }


    }
}