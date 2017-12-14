/**
 * 主要输出js
 */
import 'less/pages/index.less';
import { Component } from 'react';
import { observer } from 'mobx-react';
import { HashRouter as Router, Route, Link, Redirect, withRouter, Switch, NavLink } from 'react-router-dom';
import mobx from '../mobx-data';
import WrappedLoginForm from './Login';
import Register from './Register';
import Home from './Home';
import createHashHistory from 'history/createHashHistory';

const history=createHashHistory();

const isLogin = () => {
    const { store } = mobx;
    const { authInfo } = store;
    if (authInfo.token && authInfo.session) {
        console.log('logged in');
        return true;
    }
    console.log('not logged in');
    return false;
};

@observer
class App extends Component {
    render() {
        return (<div className="container full-center">
            <Router>
                {isLogin() ?
                    <Route exact path="/home" component={Home} />
                    :
                    <div className="wrapper full-center">
                        <div className="title full-center">
                            <NavLink activeClassName="selected" className="normal-title" to="/login">登录</NavLink>
                            <div> · </div>
                            <NavLink activeClassName="selected" className="normal-title" to="/register">注册</NavLink>
                        </div>
                        {
                            history.push('/login')
                        }
                        <Switch>
                            <Route exact path="/login" component={WrappedLoginForm} />
                            <Route exact path="/register" component={Register} />
                        </Switch>
                    </div>
                }
            </Router>
        </div>);
    }
}

export default App;
