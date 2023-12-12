import {messagesType} from "../App";

type ActionFilterMessagesType={
    type:'Add messages'
    id:string
    value:string
}

let initialState={
    '1': ['Hello', 'How are you 1 ?'],
    '2': ['Hello', 'How are you 2 ?'],
    '3': ['Hello', 'How are you 3 ?'],
    '4': ['Hello', 'How are you 4 ?'],
    '5': ['Hello', 'How are you 5 ?'],

}

export const messagesReducer=(state:messagesType=initialState, action:ActionFilterMessagesType):messagesType=>{
    switch (action.type){
        case 'Add messages':{
            return {...state, [action.id]:[...state[action.id], action.value]}
        }
        default : return state
    }
}

export const messagesAC=(id:string, value:string):ActionFilterMessagesType=>{
    return {type:'Add messages', id:id, value:value}
}