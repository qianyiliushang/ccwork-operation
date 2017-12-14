/**
 * 主要输出js
 */
import createHashHistory from 'history/createHashHistory';
import 'less/pages/index.less';
import { Component } from 'react';
import { observer } from 'mobx-react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import mobx from '../mobx-data';
import WrappedLoginForm from './Login';
import Register from './Register';
import Home from './Home';

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

const { store: { common } } = mobx;

@observer
class App extends Component {
    constructor(props) {
        super(props);
        this.hideLogin = this._loginHide.bind(this);
    }
    _loginHide() {
        return common.hideLogin ? 'hideLogin' : '';
    }
    render() {
        return (
            <Router>
                <div className="container full-center">
                    {
                        history.push('/login')
                    }
                    <Route exact path="/home" component={Home} />
                    <div className={`${this.hideLogin()} wrapper full-center`}>
                        <div className="title full-center">
                            <NavLink activeClassName="selected" className="normal-title" to="/login">登录</NavLink>
                            <div> · </div>
                            <NavLink activeClassName="selected" className="normal-title" to="/register">注册</NavLink>
                        </div>
                        <Switch>
                            <Route exact path="/login" component={WrappedLoginForm} />
                            <Route exact path="/register" component={Register} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
