/**
 * 入口文件
 */


import ReactDOM from 'react-dom';

import AppMain from 'component';

import store from 'mobx-data';

ReactDOM.render(<AppMain {...store} />, document.getElementById('app-main'));
