import React from 'react'

class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'strawbray',
            age: 18
        }
    }
    render() {
        return (
            <div className="test-router">
                <h2>我是测试组件的路由1</h2>
            </div>
        )
    }
}

export default Test;