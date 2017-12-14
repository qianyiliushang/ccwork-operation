/**
 * Created by zombie on 2017/12/14.
 */
import { Component } from 'react';
import { Menu, Icon, Button, Layout, Breadcrumb } from 'antd';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import mobx from '../mobx-data';

const { store: { userInfo }, action} = mobx;
const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const history = createHashHistory();


@observer
class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this._logout.bind(this);
    }
    state = {
        collapsed: false
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    _logout() {
        history.push('/login');
    }

    componentWillMount() {
        action.common.updateHide();
    }

    render() {
        return (
            <div className="home">
                <Layout>
                    {
                        console.log('home')
                    }
                    <Header className="header">
                        <div className="header-content">
                            <div className="logo">运营管理后台</div>
                            <div className="h-menu">
                                <div className="user">{userInfo.account}</div>
                                <div className="logout" onClick={this.logout}>退出</div>
                            </div>
                        </div>
                    </Header>
                </Layout>
                <Layout className="sider">
                    <Sider>
                        <Menu
                            defaultSelectedKeys={['license']}
                            defaultOpenKeys={['license']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={this.state.collapsed}
                        >
                            <SubMenu key="license" title={<span><Icon type="key" />License管理</span>}>
                                <Menu.Item key="prd-license">
                                    <span>产品license</span>
                                </Menu.Item>
                                <Menu.Item key="sdk-license">
                                    <span>SDK license</span>
                                </Menu.Item>
                                <Menu.Item key="license-conf">
                                    <span>企业license配置</span>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="package" title={<span><Icon type="cloud" />包管理管理</span>}>
                                <Menu.Item key="package-ci">
                                    <span>编译配置</span>
                                </Menu.Item>
                                <Menu.Item key="package-conf">
                                    <span>打包配置</span>
                                </Menu.Item>
                                <Menu.Item key="package-build">
                                    <span>打包配置</span>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="user">
                                <Icon type="team" />
                                <span>用户管理</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </Layout>
            </div>
        );
    }
}

export default Home;
