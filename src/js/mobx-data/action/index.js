/**
 * action:操作
 */
import { action, runInAction } from 'mobx';

export class AppAction {
    constructor({ title }) {
        this.title = title;
    }

    // 创建动作
    @action('加加') add() {
        this.title.data++;
    }
}

export class AuthInfoAction {
    constructor({ authInfo }) {
        this.authInfo = authInfo;
    }

    @action('更新token和session') updateAuth(token, session) {
        this.authInfo.token = token;
        this.authInfo.session = session;
    }
}

export class UserInfoAction {
    constructor({ userInfo }) {
        this.userInfo = userInfo;
    }

    @action('更新用户账号') updateAccount = (account) => {
        this.userInfo.account = account;
    }
}
