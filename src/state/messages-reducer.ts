import {messagesType} from "../App";

type ActionFilterMessagesType={
    type:string,
    id:string
}

export const messagesReducer=(state:messagesType, action:ActionFilterMessagesType)=>{
    switch (action.type){
        case 'Filter messages':{
            return {[action.id]:state[action.id]}
        }
    }
}

export const messagesAC=(id:string)=>{
    return {type:'Filter messages', id:id}
}