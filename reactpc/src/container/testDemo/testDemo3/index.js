/*
 * @Author: yuwei - 新增入库
 * @Date: 2018-06-12 16:06:41 
* @Last Modified time: 2018-06-12 16:06:41 
 */

import React , { Component } from 'react'
import { Layout , Form, Row, Col,Icon, Input, Select, Button ,message ,Affix, DatePicker, Table } from 'antd';
const { Content } = Layout;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const styles = {
  textRight:{
    textAlign:'right'
  },
  fillRight:{
    marginRight:8
  },
  top:{
    marginTop:3
  }
}

class SearchForm extends React.Component {

  //搜索表单
  searchFrom = () => {
    let values = this.props.form.getFieldsValue();
    console.log(values)
    this.props.query(values)
  }

  render(){
    const { getFieldDecorator } = this.props.form;
 
    return (
      <Form>
        <Row>
          <Col span={8}>
            <FormItem label={`送货单号`} {...formItemLayout} style={styles.fillRight}>
              {getFieldDecorator(`hetongbianhao`)(
                <Input placeholder="请输入送货单号或扫描二维码"/>
              )}
            </FormItem>
           </Col>
           <Col span={3}>
            <Button type='primary'  style={styles.top}  onClick={()=>this.searchFrom()}>搜索</Button>
           </Col>
           <Col span={13} style={styles.textRight}>
              <Button type='primary'  style={styles.fillRight}  onClick={()=>this.submit()}>确认入库</Button>
              <Button type='primary'  onClick={()=>this.searchFrom()}>取消</Button>
           </Col>
        </Row>
      </Form>
    )
  }
}
const SearchFormWapper = Form.create()(SearchForm);

class AddWareHouse extends React.Component {

  state = {
    query:"",
    dataSource: [{
      key: '0',
      name: 'Edward King 0',
      age: '32',
      address: 'London, Park Lane no. 0',
    }, {
      key: '1',
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no. 1',
    }],
  }

  onCellChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }

  render () {
    const { dataSource } = this.state; 
    const columns = [
      {
        title:"产品名称",
        dataIndex: 'name',
        render: (text, record) => (
          <EditableCell
            value={text}
            onChange={this.onCellChange(record.key, 'name')}
          />
        ),
      },
      {
        title:"品牌",
        dataIndex: 'address',
      },
      {
        title:"证件号",
        dataIndex: 'type2',
      },
      {
        title:"规格",
        dataIndex: 'type3',
        render: (text, record) => (
          <EditableCell
            value={text}
            onChange={this.onCellChange(record.key, 'type3')}
          />
        ),
      },
      {
        title:"型号 ",
        dataIndex: 'type4',
        render: (text, record) => (
          <EditableCell
            value={text}
            onChange={this.onCellChange(record.key, 'type4')}
          />
        ),
      },
      {
        title:"单位 ",
        dataIndex: 'type666',
        render: (text, record) => (
          <EditableCell
            value={text}
            onChange={this.onCellChange(record.key, 'type666')}
          />
        ),
      },
      {
        title:"采购单价",
        dataIndex: 'type5',
      },
      {
        title:"送货数量",
        dataIndex: 'type6',
      },
      {
        title:"生产商",
        dataIndex: 'type8',
      }
    ]

    return (
      <Content className='ysynet-content ysynet-common-bgColor' style={{padding:20}}>
        <SearchFormWapper query={values=>this.query(values)}/>

        <Row>
          <div className="ant-col-8">
            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-4">
                <label>送货单号</label>
              </div>
              <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                <div className="ant-form-item-control">
                SH2018555141
                </div>
              </div>
            </div>
          </div>
          <div className="ant-col-8">
            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-4">
                <label>供应商</label>
              </div>
              <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                <div className="ant-form-item-control">
                美好公司
                </div>
              </div>
            </div>
          </div>
          <div className="ant-col-8">
            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-4">
                <label>收货科室</label>
              </div>
              <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                <div className="ant-form-item-control">
                某某某某科室
                </div>
              </div>
            </div>
          </div>
          <div className="ant-col-8">
            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-4">
                <label>收货地址</label>
              </div>
              <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                <div className="ant-form-item-control">
                某某某某科室  李某   132828568589
                </div>
              </div>
            </div>
          </div>
        </Row>

        <Table 
          bordered 
          dataSource={dataSource} 
          columns={columns} 
          footer={()=>{
            return (
              <div>
                总金额：25563.00
              </div>
            )
          }}/>

      </Content>
    )
  }
}

export default AddWareHouse;

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    const { value, editable } = this.state;
    return (
      <div className="editable-cell">
        {
          editable ? (
            <Input
              value={value}
              onChange={this.handleChange}
              onPressEnter={this.check}
              suffix={
                <Icon
                  type="check"
                  className="editable-cell-icon-check"
                  onClick={this.check}
                />
              }
            />
          ) : (
            <div style={{ paddingRight: 24 }}>
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
          )
        }
      </div>
    );
  }
}