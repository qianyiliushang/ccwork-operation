/**
 * 数据,操作,计算 整合文件
 */
import { useStrict } from 'mobx';
// 数据
import { Title, Tab, AuthInfo, UserInfo, Common } from './store';
// 操作
import { AppAction, AuthInfoAction, UserInfoAction, CommonAction } from './action';
// 计算
import { AppComputed } from './computed';

useStrict(true);

const store = {
    title: new Title(),
    tab: new Tab(),
    authInfo: new AuthInfo(),
    userInfo: new UserInfo(),
    common: new Common()
};

const action = {
    title: new AppAction(store),
    authInfo: new AuthInfoAction(store),
    userInfo: new UserInfoAction(store),
    common: new CommonAction(store)
};

const computed = {
    title: new AppComputed(store)
};

export default {
    store,
    action,
    computed
};
