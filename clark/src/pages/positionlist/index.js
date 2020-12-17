import React, {useState} from 'react'
import { Form, Input, InputNumber, Button, Cascader, Select, Upload } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
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


  const fileProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {

    },
  };

  return (
    <div className="positionlist-page" >
      sfdsfsdfsdfds
    </div>
  );
};
