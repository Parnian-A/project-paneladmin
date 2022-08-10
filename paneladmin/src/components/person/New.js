import React, { useState } from 'react'
import { Button, Form, message } from 'antd';
import { useNavigate } from 'react-router';
import request from "../../tools/request";
import {Text , Checkbox, Submit} from "../utils/Field";


export default function New() {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const onFinish = (values) => {
        console.log('Success:', values);
        setLoading(true)
        request.post('/users', values)
        .then(response =>{message.success(`کاربر${response.data.name} با موفقیت افزوده شد`)
        navigate('/person')
    })
        .finally(()=>setLoading(false))
      };
      
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div>
         <Form
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off" >
      
        <Text label="نام کاربری"  name="username"  required/>
        <Text label="نام" name="name" required />
      <Checkbox name='admin' label="ادمین"/>
        <Submit label='ذخیره' loading={loading} disabled={loading}/>
     
    </Form>
    </div>
  )
}
