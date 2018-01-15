import React from 'react'

class SiteIndex extends React.Component{
    componentDidMounted() {
        console.log("组件已经渲染完成！");
    }
    render(){
        return (
            <h1>我是地址索引页面</h1>
        )
    }
}

export default SiteIndex;