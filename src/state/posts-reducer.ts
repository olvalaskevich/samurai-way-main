
type ActionAddType={
    type:string,
    value:string
}

export const postsReducer=(state:Array<string>, action:ActionAddType)=>{
    switch (action.type){
        case 'Add new post':
            return [action.value, ...state]
    }
}

export const postAC=(value:string)=>{
    return {type:'Add new post', value:value}
}