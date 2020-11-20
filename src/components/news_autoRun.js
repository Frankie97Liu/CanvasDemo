/*
 * @Author: your name
 * @Date: 2020-10-22 15:12:48
 * @LastEditTime: 2020-10-22 16:36:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reactDemo/demo03/admin/src/components/news_autoRun.js
 */
import React from 'react';
import { Row, Col, Tooltip} from 'antd'
import './news_autoRun.less'

let list = [
    { content: '【综合】前7月房企业绩', date: '2019/02' },
    { content: '【房企】前6月房企业绩', date: '2019/01' },
    { content: '【综合】前5月房企业绩', date: '2019/01' },
    { content: '【销售】前4月房企业绩', date: '2019/01' },
    { content: '【综合】前3月房企百强销售业绩', date: '2019/01' },
    { content: '【综合】前3月房企', date: '2019/01' },
    { content: '【综合】前3月', date: '2019/01' },
]

let box;
let con1;
let con2;
let speed;
let i;

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startStopOnOff: false
        }
    }
    componentDidMount() {
        box = this.con;
        con1 = this.con1;
        con2 = this.con2;
        speed = 50;
    }
    
    scroll = ()=>{
        if (box.scrollTop + 140 >= con1.scrollHeight) {
            con2.innerHTML = con1.innerHTML;
            box.scrollTop = 0;
            con2.innerHTML = '';
        } else {
            box.scrollTop++ 
        }
    }

    roll = () => {
        if (!this.state.startStopOnOff) {
            i = setInterval(this.scroll, speed);
        }
    }
    //移入某一条新闻--停止滚动
    stop = () => {
        clearInterval(i);
    }

    render() {
      return (
        <div className="news">
          <div className="macro" ref={(c)=>{ this.con = c}}>
              <ul id='con1' ref={(c)=>{ this.con1 = c}} onMouseOut={this.roll} onMouseOver={this.stop}>
                  {list.map((item,index)=>
                      <li key={index}>
                          <a>
                              <span className='policies-line'></span>
                              <Row>
                                  <Col span={8}>                               
                                        <span className='content'>{item.content}</span>
                                  </Col>
                                  {/* <Col span={4}>
                                      <span className='yearMonth'>{item.date}</span>
                                  </Col> */}
                              </Row>
                          </a>
                      </li>
                  )}
              </ul>
              <ul id='con2' ref={(c)=>{ this.con2 = c }}></ul>
          </div>
        </div>
      )
    };
}

export default News;