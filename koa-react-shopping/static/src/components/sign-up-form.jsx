import React from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, message } from 'antd'
import { signUpApi } from './../api/sign-up'

const FormItem = Form.Item
const Option = Select.Option


const SignUpForm = Form.create()(React.createClass({
  
  getInitialState() {
    return {
      passwordDirty: false,
    }
  },

  async handleSubmit(e) {
    e.preventDefault()
    let values = await this.getFormValues()  
    console.log('values', values)

    if ( values ) {
      let result = await signUpApi( values )
      console.log('result', result)
      if ( result && result.success === true ) {
        message.success( '注册成功！' )
        window.location.href = '/admin/login?signUpSuccess=true'
      } else if ( result && result.message ){
        message.error( result.message )
      }
    } else {
      message.error( '系统繁忙，稍后再试！' )
    }
    
  },

  getFormValues() {
    let that = this
    return new Promise(( resolve, reject ) => {
      that.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          resolve( values )
        } else {
          reject( false )
        }
      })
    })
  },

  handlePasswordBlur(e) {
    const value = e.target.value
    this.setState({ passwordDirty: this.state.passwordDirty || !!value })
  },
  
  checkPassword(rule, value, callback) {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致，请你检查！')
    } else {
      callback()
    }
  },
  
  checkConfirm(rule, value, callback) {
    const form = this.props.form
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  },
  
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    }
    
    return (
      <div style={{ width: "500px", margin: '0 auto', border: '1px solid #eee', padding: '30px 10px', background: '#fff' }}>
        <Form onSubmit={this.handleSubmit}>
       <h1 style={{textAlign: 'center', margin: '30px auto', fontSize: '20px', color: 'red'}}>活动行后台管理系统<br/>商家注册入口</h1>
       <FormItem
          {...formItemLayout}
          label={(
            <span>
              商户申请人姓名
              <Tooltip title="请确保填写的姓名和您的申请人身份证上的姓名保持一致">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('realname', {
            rules: [{ required: true, message: '请输入您的申请人真实姓名' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              商户申请人账户
              <Tooltip title="必须是小写6-16位字母，或数字，或下划线，不能以数字开头">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入您的申请人账号' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="申请人注册邮箱"
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请您输入正确格式的邮箱地址',
            }, {
              required: true, message: '请您输入邮箱地址！',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="申请人联系电话"
          hasFeedback
        >
          {getFieldDecorator('mobile', {
            rules: [{
              required: true, message: '请输入申请人联系电话！',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="设置登录密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请设置你的账号密码！',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" onBlur={this.handlePasswordBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          {getFieldDecorator('confirmPassword', {
            rules: [{
              required: true, message: '请您再次输入账号密码进行确认！',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>我已阅读 <a>《活动行商户平台公开协议》</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large" style={{width: '100%', marginTop: '30px'}}>确定</Button>
        </FormItem>
      </Form>
      </div>
    )
  },
}))


export default SignUpForm

