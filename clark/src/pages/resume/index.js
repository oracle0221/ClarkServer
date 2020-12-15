import React, {useState} from 'react'
import { Form, Input, InputNumber, Button, Cascader, Select } from 'antd'
import {getProvince, getZhiNeng} from 'utils/index'
import './index.scss'

const { Option } = Select;

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 4},
};

const ProvinceOptions = getProvince()
const ZhiNengOptions = getZhiNeng()

export default ()=>{

  const onFinish = values => {
    console.log(values);
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <div className="resume-page" >
      <div className="label">个人信息</div>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['user', 'name']} label="候选人姓名" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'age']} label="候选人生日" rules={[{ required: true }]}>
          <Input.Group compact>
            <Select style={{ width: 100 }} >
              {
                Array(62).fill(0).map((item, index)=>(
                  <Option key={index} value={(1960+index)} >{(1960+index)}年</Option>
                ))
              }
            </Select>
            <Select style={{ width: 100 }} >
              {
                Array(12).fill(0).map((item, index)=>(
                  <Option key={index} value={(1+index)} >{(1+index)}月</Option>
                ))
              }
            </Select>
          </Input.Group>
        </Form.Item>
        <Form.Item name={['user', 'role']} label="行业职能(互联网)" rules={[{ required: true }]} >
          <Cascader options={ZhiNengOptions} placeholder="Please select" />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="意向城市" rules={[{ required: true }]} >
          <Cascader options={ProvinceOptions} placeholder="Please select" />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="简历备注">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
          <Button type="primary" htmlType="submit">确定提交</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
