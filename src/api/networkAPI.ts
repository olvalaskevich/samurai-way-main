import axios from 'axios'
import {userType} from "../components/Users/Users";
import {UserProfileType} from "../components/UsersProfile/UsersProfile";
import {AuthData} from "../state/auth-reducer";
import {ProfileType} from "../components/Profile/ProfileForm";

const instance=axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        'API-KEY':'61bc7b39-2a5d-4430-ab3f-67a78a4381b2'
    }
})
export type LoginDataType={
    email:string
    password:string
    rememberMe:boolean
    captcha?:string
}

type Response={
    items:Array<userType>
    totalCount:number
    error:string
}
export type ResponseAuthType<T={}>={
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
    setLogin(values:LoginDataType){
        return instance.post<ResponseAuthType<{userId:number}>>(`auth/login`, values)
    },
    logOut(){
        return instance.delete<ResponseAuthType>(`auth/login`)
    },
    setFollow(userId:number){
        return instance.post<ResponseAuthType>(`follow/${userId}`)
    },
    setUnFollow(userId:number){
        return instance.delete<ResponseAuthType>(`follow/${userId}`)
    },
    changeStatusProfile(status:string){
        return instance.put<ResponseAuthType>(`profile/status`, {status:status})
    },
    getStatusProfile(userId:number){
        return instance.get<string>(`profile/status/${userId}`)
    },
    changeProfilePhoto(photo:any){
        const formData=new FormData();
        formData.append('image', photo)
        return instance.put<ResponseAuthType<{photos:{small:string, large:string}}>>(`profile/photo`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    },
    changeProfileInfo(newProfileInfo:ProfileType){
        return instance.put<ResponseAuthType<ProfileType>>(`profile`)
    }
}

