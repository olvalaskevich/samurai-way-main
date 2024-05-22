import {appReducer, AppStatusType, setErrorAC, setStatusAC} from "./app-reducer";

let state:AppStatusType={
    status:'idle',
    error:null
}
test('status should be changed', ()=>{

    let resultState=appReducer(state, setStatusAC('loading'))

    expect(resultState.status).toBe('loading')
})
test('error should be added', ()=>{

    let resultState=appReducer(state, setErrorAC('Error was added'))

    expect(resultState.error).toBe('Error was added')
})