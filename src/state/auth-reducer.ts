import {ThunkActionCreatorType} from "./store";
import {LoginDataType, networkAPI} from "../api/networkAPI";
import {setErrorAC, setStatusAC} from "./app-reducer";

export type AuthData={
    id:number|null
    email:string
    login:string
}
export type AuthStateType={
    authData:AuthData
    isAuth:boolean
}
export type LogOutType={
    type:'LOG-OUT'
}
export type AuthActionsType=ReturnType<typeof setAuthDataAC> | ReturnType<typeof setLoginAC> | LogOutType

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
        case 'SET-LOGIN':
            return {...state, isAuth: true}
        case 'LOG-OUT':
            return {...initialState}
        default : return state
    }
}
export const setAuthDataAC=(authData:AuthData)=>({type:'SET-AUTH-ME', authData:authData} as const)
export const setLoginAC=(isAuth:boolean)=>({type:'SET-LOGIN', isAuth: isAuth} as const)
export const logOutAC=()=>({type:'LOG-OUT'} as const)

export const setAuthDataTC = (): ThunkActionCreatorType => {
    return async (dispatch) => {
        dispatch(setStatusAC('loading'))
        let res = await networkAPI.setAuth()
        if (res.data.resultCode === 0) {
            dispatch(setAuthDataAC(res.data.data))
            dispatch(setStatusAC('success'))
        } else {
            dispatch(setStatusAC('error'))
        }
    }
}
export const setLoginTC=(values:LoginDataType):ThunkActionCreatorType=>{
    return async (dispatch)=>{
        let res= await networkAPI.setLogin(values)
        if (res.data.resultCode === 0) {
            dispatch(setLoginAC(true))
            dispatch(setAuthDataTC())
        } else {
            dispatch(setErrorAC(res.data.messages[0]))
        }
    }
}
export const LogOutTC = (): ThunkActionCreatorType => {
    return async (dispatch) => {
        let res = await networkAPI.logOut()
        if (res.data.resultCode === 0) {
            dispatch(logOutAC())
        } else {
            dispatch(setErrorAC(res.data.messages[0]))
        }
    }
}

