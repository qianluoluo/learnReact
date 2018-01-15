import React from 'react'

class Test2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'banana',
            age: 18
        }
    }
    render() {
        return (
            <h2>我是测试组件的路由2</h2>
        )
    }
}
export default Test2;