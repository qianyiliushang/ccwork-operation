import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { HashRouter as Router, Route, Link, Redirect, withRouter, Switch, NavLink } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import React from 'react';
import { local } from '../util/storage';
import mobx from '../mobx-data';
import { observer } from 'mobx-react';


const { action: {authInfo, userInfo, common } } = mobx;
const FormItem = Form.Item;
const history = createHashHistory();

@observer
class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('表单数据为：', values);
                message.info('user logged in');
                userInfo.updateAccount(values.account);
                authInfo.updateAuth('test token', 'test session');
                //common.updateHide();
                history.push('/home');
            }
        });
    }

    render() {
    	const { getFieldDecorator } = this.props.form;
    	return (
            <div className="login-page">
                <div className="login">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator(
                                'account',
                                { rules: [{ required: true, message: '请输入用户名' }] }
                            )(<Input prefix={<Icon type="user" />} placeholder="用户名" />)}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator(
                                'password',
                                { rules: [{ required: true, message: '请输入密码' }] }
                            )(<Input type="password" prefix={<Icon type="lock" />} placeholder="密码" />)}
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(<Checkbox>记住我</Checkbox>)
                            }
                        </FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form>
                </div>
            </div>);
    }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;
