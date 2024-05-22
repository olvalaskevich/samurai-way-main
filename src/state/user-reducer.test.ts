import {UserStateType} from "../components/Users/Users";
import {ChangeStatusUserFollowAC, ChangeStatusUsersAC, FollowAC, GetUsersAC, usersReducer} from "./users-reducer";
import {logOutAC} from "./auth-reducer";

let testState:UserStateType = {items:[{
        id: 1,
        name: '',
        status: '',
        photos: {
            small:'',
            large:'',
        },
        followed: false,
    statusFollowed:'',}],
    totalCount:0,
    error:'',
    countPage:3,
    status:'idle'}

test('should be follow', ()=>{

    let resultState=usersReducer(testState, FollowAC(1))

    expect(resultState.items[0].followed).toBe(true)
})

test('user should be added', ()=>{

    let resultState=usersReducer(testState, GetUsersAC({
        items:[{
            id: 2,
            name: '',
            status: '',
            photos: {
                small:'',
                large:'',
            },
            followed: false,
            statusFollowed:''}],
        totalCount:2,
        error:''
    }))

    expect(resultState.items.length).toBe(2)
})

test('status should be changed', ()=>{

    let resultState=usersReducer(testState, ChangeStatusUsersAC('loading'))

    expect(resultState.status).toBe('loading')
})

test('status of users followed should be changed', ()=>{

    let resultState=usersReducer(testState, ChangeStatusUserFollowAC(1,'loading'))

    expect(resultState.items[0].statusFollowed).toBe('loading')
})

test('should be logout', ()=>{

    let resultState=usersReducer(testState, logOutAC())

    expect(resultState.items.length).toBe(0)
})