import axios from 'axios'
import {userType} from "../components/Users/Users";
import {setCheckedUserTC} from "../state/profile-reducer";
import {UserProfileType} from "../components/UsersProfile/UsersProfile";

const instance=axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        'API-KEY':'61bc7b39-2a5d-4430-ab3f-67a78a4381b2'
    }
})

type Response={
    items:Array<userType>
    totalCount:number
    error:string
}

export const networkAPI={
    getUsers(c:number,n:number){
        return instance.get<Response>(`users?count=${c}&page=${n}`)
    },
    setCheckedUser(userId:number){
        return instance.get<UserProfileType>(`profile/${userId}`)
    }
}