import { createAction } from "@reduxjs/toolkit";
import request from "tools/request";

export const setPosts =createAction('POSTS')
export const setPost = createAction('POST')




export function getPosts(){
    return dispatch =>{
        request('/posts').then(response => dispatch(setPosts( response.data)))
    } 
}

export function getPost(id){
    return function(dispatch){
        request(`/posts/${id}`).then(response => dispatch(setPost( response.data)))
    } 
}