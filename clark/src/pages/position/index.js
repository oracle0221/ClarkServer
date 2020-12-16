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
    <div className="position-page" >
      <div className="label">客户公司</div>
      <div>
        <ul>
          <li className="li-box" >
            <div className="key star" >填写客户公司</div>
            <div className="val" >
              <Input placeholder="客户公司" />
            </div>
          </li>
        </ul>
      </div>

      <div className="label">任职要求</div>
      <div>
        <ul>
          <li className="li-box" >
            <div className="key" >年龄范围</div>
            <div className="val" >
              <Input placeholder="" />-<Input placeholder="" />
            </div>
          </li>
          <li className="li-box" >
            <div className="key star" >性别</div>
            <div className="val" >
            
            </div>
          </li>
          <li className="li-box" >
            <div className="key star" >行业职能(互联网)</div>
            <div className="val" >
              <Cascader options={ZhiNengOptions} placeholder="Please select" />
            </div>
          </li>
          <li className="li-box" >
            <div className="key star" >意向城市</div>
            <div className="val" >
              <Cascader options={ProvinceOptions} placeholder="Please select" />
            </div>
          </li>
          <li className="li-box" >
            <div className="key star" >上传简历</div>
            <div className="val" >
              <Upload {...fileProps}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </div>
          </li>
          <li className="li-box" >
            <div className="key" >简历备注</div>
            <div className="val" >
              <Input.TextArea rows={4} style={{width:"400px"}} />
            </div>
          </li>
          <li className="li-box" >
            <div className="key" >&nbsp;</div>
            <div className="key" ><Button type="primary">确定提交</Button></div>
          </li>
        </ul>
      </div>
    </div>
  );
};
