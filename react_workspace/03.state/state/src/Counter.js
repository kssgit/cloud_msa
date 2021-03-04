import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            counterLocal : 0,
        }
         
    }
onincrease =()=>{
    this.setState(
        {
            counterLocal : this.state.counterLocal +1,
        }
    )
}
ondecrease = () => {
    this.setState(
        {
            counterLocal : this.state.counterLocal -1,
        }
    )
}
    render() {
        const {count, increase, decrease} = this.props;
        return (
            <div>
                <h1>Count : {count}</h1>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                <hr/>
                <h1>LocalCount : {this.state.counterLocal}</h1>
                <button onClick={this.onincrease}>+</button>
                <button onClick={this.ondecrease}>-</button>
            </div>
        );
    }
}

export default Counter;