import React, { Component } from 'react';
import './style.css'
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
         }
         this.toToggole = this.toToggole.bind(this)  //写在这里便于以后优化
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.isShow?'show':'hide'}>Boss级任务-孙悟空</div>
                <div><button onClick= {this.toToggole}>召唤Boss</button></div>
            </div>
         );
    }

    toToggole(){
        this.setState({
            isShow: this.state.isShow?false:true
        })
    }

}
 
export default Boss;