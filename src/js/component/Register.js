/**
 * Created by zombie on 2017/12/11.
 */

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React from 'react';
import createHashHistory from 'history/createHashHistory';
import mobx from '../mobx-data';

const { action: { authInfo } } = mobx
const FormItem = Form.Item;
const history = createHashHistory();

class RegisterForm extends React.Component {
    handleSubmit = (e) => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('表单数据为：', values);
            }
            console.log(authInfo);
            authInfo.updateAuth('test token', 'test session');
            history.push("/home");
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="register-page">
                <div className="register">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            {
                                getFieldDecorator('account', {
                                    rules: [{
                                        required: true, message: '账号不能为空'
                                    }]
                                })(<Input prefix={<Icon type="user" />} placeholder="账号" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: '请输入密码'
                                    }]
                                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('name', {
                                    rules: [{
                                        required: true, message: '请输入姓名'
                                    }]
                                })(<Input prefix={<Icon type="solution" />} placeholder="姓名" />)
                            }
                        </FormItem>
                        <Button type="primary" htmlType="submit" className="register-form-button">
                            注册
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedReigsterForm = Form.create()(RegisterForm);

export default WrappedReigsterForm;
