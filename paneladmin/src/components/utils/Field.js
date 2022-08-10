import React from 'react'
import { Button, Checkbox as AntCheckbox, Form, Input} from 'antd';

export function Text({label , name, required}) {
  return (
    <div>
        <Form.Item
        label={label}
        name={name}
        rules={[
          {
            required, message: `وارد کردن ${label} اجباری است`,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  )
}

export function Checkbox ({name , label}){
    return (
        <div>
            <Form.Item
        name={name}
        valuePropName="checked"
      >
        <AntCheckbox>{label}</AntCheckbox>
      </Form.Item>
        </div>
    )
}

export function Submit ({label , ...props}) {
  return (
    <Form.Item>
        <Button type="primary" htmlType="submit" {...props}>
          {label}
        </Button>
      </Form.Item>
  )
}
