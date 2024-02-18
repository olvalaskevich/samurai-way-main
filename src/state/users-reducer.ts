import {UserStateResponseType, UserStateType, userType} from "../components/Users/Users";
import {networkAPI} from "../api/networkAPI";
import {ThunkActionCreatorType} from "./store";
import {setStatusAC} from "./app-reducer";

export type GeneralActionType= ReturnType<typeof FollowAC> |
    ReturnType<typeof GetUsersAC>





let initialState:UserStateType = {items:[], totalCount:0, error:'', countPage:3}
export const usersReducer = (state: UserStateType = initialState, action: GeneralActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            let newUsers=state.items.map((u)=>u.id===action.id? {...u, followed:!u.followed}:{...u})
            return {...state, items:newUsers}

        case 'GET-USERS':
            return {...state, ...action.users}

        default:
            return state
    }
}

export const FollowAC=(id:number)=>{
    return ({type:'FOLLOW', id:id} as const)
}

const GetUsersAC=(users:UserStateResponseType)=>{
    return ({type:'GET-USERS', users:users} as const)
}

export const GetUsersTC=(c:number, n:number): ThunkActionCreatorType=>{
    return (dispatch)=>{
        dispatch(setStatusAC('loading'))
        return networkAPI.getUsers(c,n)
            .then((res)=>{
                dispatch(GetUsersAC(res.data))
                dispatch(setStatusAC('success'))
            })

    }
}