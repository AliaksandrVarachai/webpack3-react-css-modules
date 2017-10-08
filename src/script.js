import './index.html';
import './Component.css';
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div styleName="outer">
                Upper outer
                <div styleName="inner">inner</div>
                Lower outer
            </div>
        )
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('root-app'));



