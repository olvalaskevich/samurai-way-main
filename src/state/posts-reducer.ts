
type ActionAddType={
    type:string,
    value:string
}

let initialState=[
    'Alice Yo', 'Olga WOW', 'Anna HEY', 'Helen MAM', 'Ivan DAD'
]

export const postsReducer=(state:Array<string>=initialState, action:ActionAddType)=>{
    switch (action.type){
        case 'Add new post':
            return [action.value, ...state]
        default : return state
    }
}

export const postAC=(value:string)=>{
    return {type:'Add new post', value:value}
}