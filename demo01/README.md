# 启动
npm start 

# 
import App from './App';  等价于  import App from './App.js';

# 
dangerouslySetInnerHTML={{__html: item}}  第二个{}代表对象

# 绑定事件
<button onClick={this.addList.bind(this)}>增加服务</button>
//增加列表
addList(e){
    this.setState({
        //注意扩展性质的使用
        list:[...this.state.list, this.state.inputValue],
        inputValue: ''
    })
}

# simple react 插件
<!-- React单项数据流 -->
# 父组件向子组件传递数据 
父
<XiaojiejieItem content={item} />



子
class XiaojiejieItem extends Component {
    // state = {  }
    render() { 
        return ( 
            <li>{this.props.content}</li>
         );
    }
}

# 子组件调用父组件方法

父
 <XiaojiejieItem 
                                    key = {index + item}
                                    content={item}
                                    index = {index}
                                    deleteItem = {this.deleteItem.bind(this)}
                                />

子
handleClick(){
        // console.log('丫的')
        console.log(this.props.index)  // 报错  li  onClick={this.handleClick.bind(this)}
        this.props.deleteItem(this.props.index)

    }

# 单项数据流
https://www.cnblogs.com/fightjianxian/p/12445142.html


# 什么是函数式编程 > 简单点 就是Xiaojiejie中有很多函数 方法， render也是一个方法
好处 > 代码清晰，每个函数代表一个功能。 更容易实现前端自动化测试


# 校验  父传子，需要在子组件中进行引入
import PropTypes from 'prop-types'

{this.props.avname} 必须传递
XiaojiejieItem.propTypes={
    avname: PropTypes.string.isRequired
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

默认值
XiaojiejieItem.defaultProps={
    avname: 'SSS'
}

# ref 主要用来绑定，可以让我们的代码简单明了


# 生命周期 > 在某一时刻，可以自动执行的函数
constructor 可以当作生命周期的初始化阶段，是ES6的一种语法
Mounting 
componentWillMount > render > componentDidMount


shouldComponentUpdate 优化性能的时候，有大作用

updation
shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate

unmounting
componentWillUnmount(){}

# ajax > axios 对ajax进行了封装
npm install -save axios