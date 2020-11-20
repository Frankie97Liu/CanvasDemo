/*
 * @Author: your name
 * @Date: 2020-09-25 18:06:54
 * @LastEditTime: 2020-09-27 10:44:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reactDemo/demo03/admin/pages/Login.js
 */
import React,{useState} from 'react';
import '../src/components/node_modules/antd/dist/antd.css'
import { Card,Input,Button,Spin} from 'antd'

const [userName,setUserName] = useState('')
const [password,setPassword] = useState('')
const [isLoading,setIsLoading] = useState('false')
const Login = ()=> {
    return (
        <div className="login-div">
            <Spin tip="loading..." spinning={isLoading}>
                <Card title="Jspang Blog System" bordered={true} style={{ width: 400}}>
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your username"
                        onChange={(e)=>{setUserName(e.target.value)}}
                    ></Input>
                    <br></br>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                    >
                    </Input.Password>
                    <br></br>
                    <Button type="primary" size="large" block onClick={checkLogin}>Login in</Button>
                </Card>
            </Spin>
        </div>
    )
}
const checkLogin = ()=> {
    setIsLoading(true)
    setTimeout(()=>{
        setIsLoading(false)
    },1000)
}
export default Login
