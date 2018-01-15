import React from 'react'

class Reset extends React.Component{
    componentDidMounted() {
        console.log("组件已经渲染完成！");
    }
    render(){
        return (
            <h1>我是重置密码页面</h1>
        )
    }
}

export default Reset;