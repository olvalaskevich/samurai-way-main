import {messagesAC, messagesReducer} from "./messages-reducer";
import {messagesType} from "../App";


test('should add new post', ()=>{

    let messages:messagesType={
        '1': ['Hello','How are you 1 ?'],
        '2': ['Hello','How are you 2 ?'],
        '3': ['Hello','How are you 3 ?'],
        '4': ['Hello','How are you 4 ?'],
        '5': ['Hello','How are you 5 ?'],

    }

    let resultMessages=messagesReducer(messages, messagesAC('1'))

    expect(resultMessages&&resultMessages['1'][0]).toBe('Hello')
})