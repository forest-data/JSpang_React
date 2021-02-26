import React,{Component, Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

import axios from 'axios'
import Boss from './Boss'

class Xiaojiejie extends Component{

    //增加数据，在构造函数中
    constructor(props){
        super(props)  //调用父级方法
        this.state = {
            inputValue: 'jspang',
            list: ['基础按摩', '精油推背']
        }
    }

    componentWillMount(){

        console.log('componentWillMount---组件将要挂在到页面的时候')
    }

    componentDidMount(){
        // 组件在dom执行后， axios
        // 第一次请求数据

        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        .then((res)=>{
            console.log('axios获取数据成功:' + JSON.stringify(res))
            // this.setState({
            //     list: res.data.data
            // })
        })
        .catch((error)=>{console.log('axios 获取数据失败:' + error)})

        console.log('componentWillMount---组件挂载完成的时刻')
    }


    //组件更新前
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
        // return false  不往下执行了
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillReceiveProps(){
        console.log('parent-componentWillReceiveProps')
    }

    render(){

        console.log('render---组件挂载中')
        // flex
        return (
            <Fragment>
                {/* 第一次写注释 */}
                <div>
                    <label htmlFor='jspang'>增加服务: </label>
                    <input 
                    id='jspang' 
                    className="input" 
                    value={this.state.inputValue} 
                    onChange={this.inputChange.bind(this)}
                    ref = {(input)=>{this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul = ul}}>
                    <li>头部按摩</li>
                    <li>推背</li>
                    {
                        this.state.list.map((item, index)=>{
                            return (
                                
                                // <li 
                                //     key={index+item}
                                //     onClick={this.deleteItem.bind(this,index)} 
                                //     dangerouslySetInnerHTML={{__html: item}}
                                // >
                                //      {/* {item}  */}
                                // </li> 
                                
                                 
                                <XiaojiejieItem 
                                    // avname = "HE"
                                    key = {index + item}
                                    content={item}
                                    index = {index}
                                    list = {this.state.list}
                                    deleteItem = {this.deleteItem.bind(this)}
                                />
                                 


                            )
                        })
                    }
                </ul>

                <Boss />
            </Fragment>
        )
    }

    //函数写在这个方向
    inputChange(e){
        console.log(e.target.value) //input中的值
        // this.state.inputValue = e.target.value 错误的 1.this是undefined  onChange={this.inputChange.bind(this)}  2.react不支持该语法
        this.setState({
            // inputValue: e.target.value
            inputValue: this.input.value
        })

    }

    //增加列表
    addList(e){
        this.setState({
            //注意扩展性质的使用
            list:[...this.state.list, this.state.inputValue],
            inputValue: ''
        }, ()=>{
            // 解决少一个length的问题,采用回调解决
            console.log(this.ul.querySelectorAll('li').length)
        })
        
    }

    //删除数组元素
    deleteItem(index){
        console.log(index)
        // this.state.list.splice(index, 1) 可以是可以效果危险,采用局部的好
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list:list
        })
    }

    // 测试dev分支

}

export default Xiaojiejie