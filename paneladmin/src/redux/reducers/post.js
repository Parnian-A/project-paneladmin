import { createReducer } from "@reduxjs/toolkit";
import { setPost , setPosts } from "redux/actions/post"

export const posts = createReducer([] , {
  [setPosts]:(state , {payload})=>payload
})



export const post = createReducer({} , {
  [setPost]: (state , {payload})=>payload
})




 