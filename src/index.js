import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducers'
import '../node_modules/antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';
import './static/css/main.css'

// window.STATE_FROM_SERVER表示整个状态树的初始值。
const store = createStore(rootReducer, window.STATE_FROM_SERVER);

// 将react根节点渲染到index.html里的根节点
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
// 生产环境中，为用户创建一个本地server缓存资源，提升用户访问速度
// 只在生产环境中有效
registerServiceWorker();

/*
    Provider:全局容器，任务就是接受redux的store作为props
             并将其生命为context的属性之一
    createStore:接收一个函数作为参数，返回新生成的store对象
                第二个参数可选，用于设置state的初始状态
    
    PS:整个应用只有一个state对象

    connect:连接React组件与 Redux store。
            从UI组件生成容器组件。

*/
