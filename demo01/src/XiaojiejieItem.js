import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // 需要满足2条件 1.组件第一次存在于dom中， 函数是不会被执行 。(父) 如果已经存在于dom中，函数才会被执行 (子)
    componentWillReceiveProps(){
        console.log('child-componentWillReceiveProps')
    }
    componentWillUnmount(){
        console.log('child-componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content!=this.props.content){
            return true;
        }else{
            return false; //就可以解决性能问题，父组件不影响子组件。
        }
        
    }

    // state = {  }
    render() { 
        return ( 
            <li  onClick={this.handleClick}>{this.props.avname}为你服务-{this.props.content}</li>
         );
    }

    handleClick(){
        // console.log('丫的')
        console.log(this.props.index)  // 报错  li  onClick={this.handleClick.bind(this)}
        this.props.deleteItem(this.props.index)

        // 解释什么是单项数据流 > 父组件可以传递list过来，子组件可以使用，但是不能修改
        // this.props.list = []  报错

    }
}

// 校验
XiaojiejieItem.propTypes={
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

XiaojiejieItem.defaultProps={
    avname: 'SSS'
}
 
export default XiaojiejieItem;