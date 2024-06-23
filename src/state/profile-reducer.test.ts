import {addPostAC, changeStatusAC, getStatusAC, profileReducer, setUserProfileAC} from "./profile-reducer";
import {logOutAC} from "./auth-reducer";

let testState={
    profile: {
        aboutMe:null,
        userId: null,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    },
    posts:[
        {id:1, message:'Hello every people', likesCount:0},
        {id:2, message:'Hi every people', likesCount:0}
    ],
    newPostText:'',
    status: '---'
}
test('users profile should be added', ()=>{

    let resultState=profileReducer(testState, setUserProfileAC({
        aboutMe:'I love FE',
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'string',
        fullName: "string",
        contacts: {
            github: "string",
            vk: "string",
            facebook: "string",
            instagram: "string",
            twitter: "string",
            website: "string",
            youtube: "string",
            mainLink: "string",
        },
        photos: {
            small: "string",
            large: "string",
        }
    }))

    expect(resultState.profile.userId).toBe(1)
})

test('post should be added', ()=>{

    let resultState=profileReducer(testState, addPostAC('Hello'))

    expect(resultState.posts[0].message).toBe('Hello')
    expect(resultState.posts.length).toBe(3)
})

test('status should be changed', ()=>{

    let resultState=profileReducer(testState, changeStatusAC('Search offer'))

    expect(resultState.status).toBe('Search offer')
})

test('should be logout', ()=>{

    let resultState=profileReducer(testState, logOutAC())

    expect(resultState.status).toBe('---')
})