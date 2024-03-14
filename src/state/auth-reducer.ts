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
export const setAuthDataAC=(authData:AuthData)=>{
    return ({type:'SET-AUTH-ME', authData:authData} as const)
}
export const setLoginAC=(isAuth:boolean)=>{
    return ({type:'SET-LOGIN', isAuth: isAuth} as const)
}
export const logOutAC=()=>{
    return ({type:'LOG-OUT'} as const)
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
export const setLoginTC=(values:LoginDataType):ThunkActionCreatorType=>{
    return (dispatch)=>{
        networkAPI.setLogin(values)
            .then((res)=>{
                if (res.data.resultCode===0){
                    dispatch(setLoginAC(true))
                }
                else {
                    dispatch(setErrorAC(res.data.messages[0]))
                }
                return res
            })
            .then((res)=>{
                if (res.data.resultCode===0){
                    dispatch(setAuthDataTC())
                }
            })
    }
}
export const LogOutTC=():ThunkActionCreatorType=>{
    return (dispatch)=>{
        networkAPI.logOut()
            .then((res)=>{
                if (res.data.resultCode===0){
                    dispatch(logOutAC())
                }
                else {
                    dispatch(setErrorAC(res.data.messages[0]))
                }

            })
    }
}

