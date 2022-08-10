
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Divider } from "antd";
import { Link } from 'react-router-dom';
import { useDispatch  , useSelector} from "react-redux";
import { getPerson } from 'redux/actions/person';




export default function Full() {

    const {id} = useParams()
    const dispatch = useDispatch()
    const person = useSelector(state=>{
      return state.person
    })

    useEffect(() => {
      dispatch(getPerson(id))
    }, [id])
    

  return (
    <div>
        <h2>نمایش کاربر</h2>
        <Divider/>
        <label>نام کاربر :</label>
        <Divider type='vertical'/>
        <span>{person.name}</span>
        <Divider/>
        <label>ایمیل :</label>
        <span>{person.email}</span>
        <Divider/>

        <Link to={'/person'}>بازگشت به لیست کاربران</Link>
    </div>
  )
}
