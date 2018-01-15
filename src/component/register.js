import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Test01 from './test'
import Test02 from './test2'

class Register extends React.Component{
    componentDidMounted() {
        console.log("组件已经渲染完成！");
    }
    render(){
        return (    
            <div className="test">
            <h1>测试嵌套路由</h1>
                <Switch>
                    <Route path='/register/test01' component={Test01} />
                    <Route path='/register/test02' component={Test02} />
                    <Route path='/register/test03' render={( ()=>(
                        <h2>行内写啊</h2>
                    ) )} />
                </Switch>
            </div>
        )
    }
}

export default Register;