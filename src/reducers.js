import { combineReducers } from 'redux'
import {ADD, DELETE, ONE, TWO} from './actions'
/*
    combinReducers:辅助函数，整合所有reducer,在index.js
                   里就可以作为createStore的参数函数，创建store
                   合并后的 reducer 可以调用各个子 reducer，并把它们的结果合并成一个 state 对象。
                   state 对象的结构由传入的多个 reducer 的 key 决定
*/

 function test(state = { counter: 88 }, action){
    switch(action.type){
        case ADD: 
            return Object.assign({}, state, {
                counter: state.counter + 3
              });
        case DELETE: 
            return Object.assign({}, state, {
                counter: state.counter - 7
              });
        default:
            return state
    }
}

function computed(state = { floor:'fourth' }, action){
    switch(action.type){
        case ONE: 
            return Object.assign({}, state, {
                counter: state.floor = 'first;'
              });
        case TWO: 
            return Object.assign({}, state, {
                counter: state.floor = 'second;'
              });
        default:
            return state
    } 
}


const rootReducer = combineReducers({
    test,
    computed
})

export default rootReducer;

/*
    reducer是纯函数，必须非常纯净，不能修改传入的参数，不能发出http请求，不能调用Math等非纯函数
        接收两个参数，一个是旧的state，一个是action
        根据action的type，对state进行修改。
        同输入，同输出

    每个 reducer 只负责管理全局 state 中它负责的一部分。
    每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据。
    一个reducer就是一个state对象，所有的state对象合并成一个唯一的state.
*/

