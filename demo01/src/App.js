import React, {Component} from 'react'
// 上面那句等于下方的
// import React from 'react'
// const Component = React.Component

class App extends Component{
    render(){
        return(
            // <div>hello forest</div>
            <ul className="my-list">
                <li>{true?'JSPang.com':'技术胖'}</li>
                <li>I Love React</li>
            </ul>
        )
        // javascript来写
        var child1 = React.createElement('li', null, 'JSPang.com')
        var child2 = React.createElement('li', null, 'I Love React')
        var root = React.createElement('ul', {className:'my-list', child1,child2})

    }
}

export default App