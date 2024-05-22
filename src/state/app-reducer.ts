

export type StatusType='idle'|'loading'|'success'|'error'|'follow'

export type AppStatusType= {
    status:StatusType
    error:string|null
}
let initialState:AppStatusType={
    status:'idle',
    error:null
}

export type ActionAppStatusType=ReturnType<typeof setStatusAC> | ReturnType<typeof setErrorAC>

export const appReducer=(state:AppStatusType=initialState, action:ActionAppStatusType)=>{
    switch (action.type){
        case 'SET-STATUS':
            return {...state, status: action.status}
        case 'SET-ERROR':
            return {...state, error:action.error}
        default:
            return state
    }
}

export const setStatusAC=(status:StatusType)=>{
    return ({type:'SET-STATUS', status: status} as const)
}
export const setErrorAC=(error:string|null)=>{
    return ({type:'SET-ERROR', error: error} as const)
}