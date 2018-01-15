import React, { Component } from 'react';
import RouterIndex from './router';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './static/css/app.css'
import {add, del, one, two} from './actions'

class App extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        const counter = this.props.counter;
        const floor = this.props.floor;

        return ( 
            <div className = "App" >
                <RouterIndex />
                <button onClick={ this.props.add }>
                    加2
                </button>
                <button onClick={ this.props.del }>
                    减2
                </button>
                <p>参数是：{ counter }</p>
                <p>您现在的位置是：{ floor }</p>
            </div>
        );
    }
}

// 该函数负责将state映射到当前组件的props
function mapStateToProps(state){
    return {
        counter: state.test.counter,
        floor: state.computed.floor
    }
}
// 该函数负责将用户的操作映射成Action
function mapDispatchToProps(dispatch){
    return {
        // add: (...args) => dispatch(add(...args)),
        // del: (...args) => dispatch(del(...args)),
        // one: (...args) => dispatch(one(...args)),
        // two: (...args) => dispatch(two(...args))
        add:bindActionCreators(add, dispatch),
        del:bindActionCreators(del, dispatch),
        one:bindActionCreators(one, dispatch),
        two:bindActionCreators(two, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
/*
  JSX语法就是vue的template模板语法
  在想使用变量和表达式的时候，用单个花括号包裹，
  JSX解析器会计算表达式或者获取变量的值，渲染在界面

  JSX事件处理是驼峰写法onClick/onSelect...

  回调函数绑定this的方法有三个
    1.在调用的函数的时候直接绑定 this.handleClick.bind(this)
    2.在调用函数的时候使用箭头函数 { (e) => this.handleClick(e)}  //不推荐
    3.在构造函数里绑定 this.handleClick = this.handleClick.bind(this);

  react只支持单向数据流
  那么视图到数据模型的数据流怎么处理呢？

*/