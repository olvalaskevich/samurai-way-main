import axios from 'axios'
import {userType} from "../components/Users/Users";
import {setCheckedUserTC} from "../state/profile-reducer";
import {UserProfileType} from "../components/UsersProfile/UsersProfile";
import {AuthData} from "../state/auth-reducer";

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
type ResponseAuthType<T={}>={
    data:T
    resultCode:number
    messages:string[]
}

export const networkAPI={
    getUsers(c:number,n:number){
        return instance.get<Response>(`users?count=${c}&page=${n}`)
    },
    setCheckedUser(userId:number){
        return instance.get<UserProfileType>(`profile/${userId}`)
    },
    setAuth(){
        return instance.get<ResponseAuthType<AuthData>>(`auth/me`)
    },
    setFollow(userId:number){
        return instance.post<ResponseAuthType>(`follow/${userId}`)
    },
    setUnFollow(userId:number){
        return instance.delete<ResponseAuthType>(`follow/${userId}`)
    }
}