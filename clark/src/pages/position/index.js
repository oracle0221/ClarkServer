import React, {useState} from 'react'
import { Form, Input, InputNumber, Button, Cascader, Select, Upload, Radio } from 'antd'
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
const graduationOptions = ['大专', '本科', '硕士', '博士', '博士后', 'MBA']

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

      <div className="label">职位信息</div>
      <div>
        <ul>
          <li className="li-box" >
            <div className="key star" >职位名称</div>
            <div className="val" >
              <Input placeholder="职位名称" />
            </div>
          </li>
          <li className="li-box" >
            <div className="key star" >行业职能</div>
            <div className="val" >
              <Cascader options={ZhiNengOptions} placeholder="Please select" />
            </div>
          </li>
          <li className="li-box" >
            <div className="key star" >薪资范围</div>
            <div className="val" >
              <InputNumber min={1} max={10} defaultValue={3} />-<InputNumber min={1} max={10} defaultValue={3} />
            </div>
          </li>
          <li className="li-box" >
            <div className="key" >薪酬结构</div>
            <div className="val" >
              <Input placeholder="薪酬结构" />
            </div>
          </li>
          <li className="li-box" >
            <div className="key star" >所在城市</div>
            <div className="val" >
              <Cascader options={ProvinceOptions} placeholder="Please select" />
            </div>
          </li>
          <li className="li-box" >
            <div className="key" >汇报对象</div>
            <div className="val" >
              <Input placeholder="汇报对象" />
            </div>
          </li>
          <li className="li-box" >
            <div className="key star" >职位详情</div>
            <div className="val" >
              <Input.TextArea rows={4} style={{width:"400px"}} />
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
            <div className="key" >性别</div>
            <div className="val" >
              <Radio.Group>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </Radio.Group>
            </div>
          </li>
          <li className="li-box" >
            <div className="key" >学历</div>
            <div className="val" >
              <Select defaultValue="" style={{ width: 120 }} >
                {
                  graduationOptions.map((item, index)=>(
                    <Option key={index} value={item}>{item}</Option>
                  ))
                }
              </Select>
            </div>
          </li>
          <li className="li-box" >
            <div className="key" >搜寻思路</div>
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
