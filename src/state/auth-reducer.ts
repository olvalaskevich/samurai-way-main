import {UserProfileType} from "../components/UsersProfile/UsersProfile";
import {ThunkActionCreatorType} from "./store";
import {networkAPI} from "../api/networkAPI";
import {setStatusAC} from "./app-reducer";

export type AuthData={
    id:number|null
    email:string
    login:string
}
export type AuthStateType={
    authData:AuthData
    isAuth:boolean
}
export type AuthActionsType=ReturnType<typeof setAuthDataAC>
let initialState:AuthStateType={
    authData:{
        id:null,
        email:'',
        login:'',
    },
    isAuth:false
}


export const authReducer=(state:AuthStateType=initialState,action:AuthActionsType)=>{
    switch (action.type){
        case 'SET-AUTH-ME':
            return {...state, authData:action.authData, isAuth:true}

        default : return state
    }
}
export const setAuthDataAC=(authData:AuthData)=>{
    return ({type:'SET-AUTH-ME', authData:authData} as const)
}

export const setAuthDataTC=():ThunkActionCreatorType=>{
    return (dispatch)=>{
        dispatch(setStatusAC('loading'))
        networkAPI.setAuth()
            .then((res)=>{
                if (res.data.resultCode===0){
                    dispatch(setAuthDataAC(res.data.data))
                    dispatch(setStatusAC('success'))
                }
                else {
                    dispatch(setStatusAC('error'))
                }

            })
    }
}