/*
 * @Author: your name
 * @Date: 2020-09-25 18:03:48
 * @LastEditTime: 2020-10-22 15:45:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reactDemo/demo03/admin/pages/Main.js
 */
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login'

const Main = ()=> {
    return (
        <Router>
            <Route path="/login/" exact component={Login}/>
        </Router>
    )
}
export default Main