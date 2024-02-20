

export type StatusType='idle'|'loading'|'success'|'error'|'follow'

type AppStatusType= {
    status:StatusType
}
let initialState:AppStatusType={
    status:'idle'
}

export type ActionAppStatusType=ReturnType<typeof setStatusAC>

export const appReducer=(state:AppStatusType=initialState, action:ActionAppStatusType)=>{
    switch (action.type){
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export const setStatusAC=(status:StatusType)=>{
    return ({type:'SET-STATUS', status: status} as const)
}