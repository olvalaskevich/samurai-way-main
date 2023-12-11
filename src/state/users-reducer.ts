import {userType} from "../components/Users/Users";

type ActionFollowType={
    type:string
    id:number
}



let initialState = [
    {
        id: 1,
        follow: false,
        name: 'Olga',
        description: 'Mam of Alice',
        address: {
            city: 'Minsk',
            street: 'Landera'
        }
    },
    {
        id: 2,
        follow: false,
        name: 'Alice',
        description: 'I am Alice',
        address: {
            city: 'Minsk',
            street: 'Landera'
        }
    }
]
export const usersReducer = (state: Array<userType> = initialState, action: ActionFollowType) => {
    switch (action.type) {
        case 'FOLLOW':
            return state.map((u)=>u.id===action.id? {...u, follow:!u.follow}:u)

        default:
            return state
    }
}

export const followAC=(id:number)=>{
    return {type:'FOLLOW', id:id}
}