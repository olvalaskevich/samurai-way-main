import {UserStateResponseType, UserStateType, userType} from "../components/Users/Users";
import {networkAPI} from "../api/networkAPI";
import {ThunkActionCreatorType} from "./store";
import {StatusType} from "./app-reducer";
import {LogOutType} from "./auth-reducer";

export type GeneralActionType= ReturnType<typeof FollowAC> |
    ReturnType<typeof GetUsersAC> |
    ReturnType<typeof ChangeStatusUsersAC> |
    ReturnType<typeof ChangeStatusUserFollowAC> |
    LogOutType





let initialState:UserStateType = {items:[], totalCount:0, error:'', countPage:3, status:'idle'}
export const usersReducer = (state: UserStateType = initialState, action: GeneralActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            let newUsers=state.items.map((u)=>u.id===action.id? {...u, followed:!u.followed}:{...u})
            return {...state, items:newUsers}
        case 'GET-USERS':
            return {...state, ...action.users}
        case 'CHANGE-STATUS':
            return {...state, status:action.status}
        case 'CHANGE-STATUS-FOLLOWED':
            return {...state, items:state.items.map((u)=>u.id===action.userId?{...u, statusFollowed:action.status}:u)}
        case 'LOG-OUT':
            debugger
            return {...state, items:[]}
        default:
            return state
    }
}

export const FollowAC=(id:number)=>{
    return ({type:'FOLLOW', id:id} as const)
}

export const GetUsersAC=(users:UserStateResponseType)=>{
    return ({type:'GET-USERS', users:users} as const)
}
export const ChangeStatusUsersAC=(status:StatusType)=>{
    return ({type:'CHANGE-STATUS', status} as const)
}
export const ChangeStatusUserFollowAC=(userId:number,status:StatusType)=>{
    return ({type:'CHANGE-STATUS-FOLLOWED',userId, status} as const)
}
export const GetUsersTC = (c: number, n: number): ThunkActionCreatorType => {
    return async (dispatch) => {
        dispatch(ChangeStatusUsersAC('loading'))
        let res = await networkAPI.getUsers(c, n)
        dispatch(GetUsersAC(res.data))
        dispatch(ChangeStatusUsersAC('success'))
    }
}
export const SetFollowTC = (userId: number): ThunkActionCreatorType => {
    return async (dispatch, getState) => {
        let user = getState().users.items.find((u) => u.id === userId)
        if (user) {
            if (!user.followed) {
                dispatch(ChangeStatusUserFollowAC(userId, 'loading'))
                let res = await networkAPI.setFollow(userId)
                if (res.data.resultCode === 0) {
                    dispatch(FollowAC(userId))
                    dispatch(ChangeStatusUserFollowAC(userId, 'success'))
                }
            } else {
                dispatch(ChangeStatusUserFollowAC(userId, 'loading'))
                let res = await networkAPI.setUnFollow(userId)
                if (res.data.resultCode === 0) {
                    dispatch(FollowAC(userId))
                    dispatch(ChangeStatusUserFollowAC(userId, 'success'))
                }
            }
        }
    }
}