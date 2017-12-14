/**
 * Created by zombie on 2017/12/13.
 */

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';

const LoginWrapper = () => (

    <Router>
        <div>
            <Redirect from="/" to="/login" />
            <Route exact path="/login" component={Login} />
        </div>

    </Router>


);

export default LoginWrapper;
