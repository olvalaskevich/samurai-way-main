import {messagesType} from "../App";

type ActionFilterMessagesType={
    type:'Add messages'
    id:string
    value:string
}

export const messagesReducer=(state:messagesType, action:ActionFilterMessagesType):messagesType=>{
    switch (action.type){
        case 'Add messages':{
            return {...state, [action.id]:[...state[action.id], action.value]}
        }
    }
}

export const messagesAC=(id:string, value:string):ActionFilterMessagesType=>{
    return {type:'Add messages', id:id, value:value}
}