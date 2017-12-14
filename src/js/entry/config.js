/**
* systemjs加载配置
*/

import Systemjs from 'systemjs';

const { SystemJSConfigMain } = window;

const mapListObj = {
    // 自定义map和依赖关系,可覆盖cdn中的配置(注释的是例子
    map: {
        //ReactDom: './resource/react-dom.production.min.js',
        ReactDom: './resource/react-dom.development.js',
        //react: './resource/react.production.min.js',
        react: './resource/react.development.js',
        mobx: './resource/mobx.umd.min.js',
        'mobx-react': './resource/mobx-react.min.js',
        'react-router': './resource/react-router-dom.min.js',
        'systemjs-plugin-css': './resource/css.js',
        'prop-types': './resource/prop-types.min.js',
        //antd: './resource/antd.min.js',
        antd: './resource/antd.js',
        'antd-css': './resource/antd.min.css',
        moment: './resource/moment.min.js'
    },
    meta: { // map的依赖关系
        ReactDom: {
            deps: ['react']
        },
        'mobx-react': {
            deps: ['react', 'ReactDom', 'mobx', 'prop-types']
        },
        '*.css': { loader: 'systemjs-plugin-css' },
        'systemjs-plugin-css': {
            format: 'cjs'
        },
        antd: {
            deps: ['react', 'ReactDom', 'antd-css', 'prop-types', 'moment']
        }
    }
};

const mainListObj = { // 载入文件的配置
    _main: { // 入口文件 签名
        ToLoad: true, // 是否马上加载
        // 依赖库
        deps: ['react', 'react-router', 'mobx', 'mobx-react', 'antd']
    }
};
for (const key in SystemJSConfigMain) {
    const _key = `_${key}`;
    if (!mainListObj[_key]) {
        mainListObj[_key] = {
            deps: []
        };
    }
    if (!mainListObj[_key].deps) {
        mainListObj[_key].deps = [];
    }
    mainListObj[_key].deps = mainListObj[_key].deps.concat(SystemJSConfigMain[key].css);
}
// Systemjs.import(`${cdnHost}/config/2.0.0/config.js?${fedBuildDate}`).then((res) => {
// res中的map查看cdn目录下config.js文件
// Systemjs.config(res(cdnHost));

Systemjs.config(mapListObj);
Systemjs.config({
    meta: mainListObj
});

for (const key in mainListObj) {
    const item = mainListObj[key];
    if (item.ToLoad) {
        Systemjs.import(key);
    }
}
// });
