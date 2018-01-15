import React from 'react'
import '../static/css/login.css'
import { Row, Col, Input, Button } from 'antd'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            username:'',
            password:''
        }
    }
    componentDidMounted() {
        console.log("组件已经渲染完成！");
    }
    handleLogin(){
        console.log(this.state.username + '//' + this.state.password);
    }
    handleChangeUser(e) {
        this.setState({
            username: e.target.value
        })
    }
    handleChangePwd(e) {
        this.setState({
            password: e.target.value
        })
    }
    handleRegister(){
        this.props.history.push('/register');
    }
    handleReset(){
        this.props.history.push('/reset');
    }
    render(){
        return (
            <div className="login-bg">
                <div className="login-wrap">
                    <Row>
                        <Col span={18} offset={3} className="login_box">
                            <Row>
                                <p className="login-title">Sign In</p>
                            </Row>
                            <div className="form-item">
                                <Input placeholder="username" type="text" id="username" autoComplete="new-password" onChange={this.handleChangeUser} />
                            </div>
                            <div className="form-item">
                                <Input placeholder="password" type="password" id="password" autoComplete="new-password" onChange={this.handleChangePwd} />
                            </div>
                            <div className="form-item">
                                <Button type="primary" className="login-btn" onClick={this.handleLogin}>Login</Button>
                            </div>
                            <div className="form-item">
                                <div className="register" onClick={this.handleRegister}>
                                    <span>新用户注册</span>
                                </div>
                                <div className="forget-psd" onClick={this.handleReset}>
                                    <span>忘记密码</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Login;