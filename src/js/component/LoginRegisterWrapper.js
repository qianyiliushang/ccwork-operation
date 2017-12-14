/**
 * Created by zombie on 2017/12/13.
 */

import Login from './Login';
import Register from './Register';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { Component } from 'react';

class BaseWrapper extends Component {
    render() {
        return (
            <div className="wrapper full-center">
                <div className="title full-center">
                    <Link className="normal-title" to="/login">登录</Link>
                    <div> · </div>
                    <Link className="normal-title" to="/register">注册</Link>
                </div>
                <Switch>
                    {/* <Redirect from="/" to="/login" /> */}
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </div>
        );
    }
}

export default BaseWrapper;
