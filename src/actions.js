export const ADD ='ADD';
export const DELETE = 'DELETE';
export const ONE ='ONE';
export const TWO = 'TWO';

// 两个方法，给reducer两个type值，让reducer自己判断
//action创建函数，生成action的方法，简单的返回一个action
export const add = counter => {
    return { type: ADD, counter}
}
export const del = counter => {
    return { type: DELETE, counter}
}
export const one= str => {
    return { type: ONE, str}
}
export const two = str => {
    return { type: TWO, str}
}

/*
    action约定：(本质上就是js的普通对象)
        必须使用一个字符串类型的type字段，表示即将要执行的动作
        尽量减少在action中传递数据

    redux只需要把action创建函数的结果传给dispatch()方法，就可以发起一次dispatch过程。
    使用 react-redux 提供的 connect() 帮助器来调用。
    bindActionCreators() 可以自动把多个 action 创建函数 绑定到 dispatch() 方法上。
*/