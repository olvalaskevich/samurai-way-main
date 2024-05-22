import {authReducer, AuthStateType, logOutAC, setAuthDataAC, setLoginAC} from "./auth-reducer";

let testState:AuthStateType={
    authData:{
        id:null,
        email:'',
        login:''
    },
    isAuth:false
}
test('Id, email and login should be added', ()=>{

    let resultState=authReducer(testState, setAuthDataAC({id:1,
        email:'olya@gmail.com',
        login:'olyaCoolGirl'}))

    expect(resultState.authData.id).toBe(1)
    expect(resultState.authData.email).toBe('olya@gmail.com')
    expect(resultState.authData.login).toBe('olyaCoolGirl')
    expect(resultState.isAuth).toBe(true)
})

test('Auth should be', ()=>{

    let resultState=authReducer(testState, setLoginAC(true))

    expect(resultState.isAuth).toBe(true)
})

test('Auth should not to be', ()=>{

    let resultState=authReducer(testState, logOutAC())

    expect(resultState.isAuth).toBe(false)
})