import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props);
        this.state ={
            value : "",
        };
    }
    handleChange =(event)=>{
        this.setState({
            value : event.target.value,
        });
        console.log(this.state.value);
    }
    handleSubmit = (event) => {
        alert(this.state.value);
        event.preventDefault();//이벤트 전파시키지말고 취소시켜라
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        );
    }
}

export default Input;