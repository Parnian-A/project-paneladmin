import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { getPost } from "redux/actions/post";
import { useDispatch , useSelector } from "react-redux";

export default function Full() {

    const {id} = useParams()
    // const [post] = useState({})
    const dispatch = useDispatch()
    const post = useSelector(state =>{
      return state.post
    })

    useEffect(() => {
     dispatch(getPost(id))
    }, [id])
    

  return (
    
    <div>
      
        <h3>نمایش مقاله</h3>
        <Divider/>
        <label>عنوان مقاله :</label>
        <Divider type='vertical'/>
        <span>{post.title}</span>
        <Divider/>
        <p>{post.body}</p>

        <Divider/>
        <Link to={'/post'}>بازگشت به لیست مقالات</Link>

    </div>
  )
}
