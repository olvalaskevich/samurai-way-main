import {postAC, postsReducer} from "./posts-reducer";

test('should add new post', ()=>{

    let posts=['Alice Yo','Olga WOW','Anna HEY','Helen MAM','Ivan DAD']

    let resultPosts=postsReducer(posts, postAC('Hello'))

    expect(resultPosts&&resultPosts[0]).toBe('Hello')
})