import Counter from './Counter';
import React, { Component } from 'react';
import ACounter from './ACounter';
class App extends Component {
  //변경데이터는 state를 사용 
  //state 오브젝트는 리엑트 Component에서 제공해준다
  //변경데이터 state 초기화 -constructor
  
  constructor(props){
    super(props);
    this.state ={
      count : 0,
    }
  }

onIncrease =() =>{
  //state data 변경은 - setState()
  //this.state.count +=1;
  this.setState(
    {
      count : this.state.count+1,
    }
  );
}

onDecrease = () => {
  this.setState(
    {
      count : this.state.count-1,
    }
  );
}

  render() {
    return (
      <div>
        {/* 두 자식 element가 데이터를 공유해야한다면 해당 파일처럼 
        부모 element에서 데이터를 state처리해줘야 한다 */}
        <Counter count = {this.state.count} 
              increase={this.onIncrease} 
              decrease={this.onDecrease}/>
        <ACounter count = {this.state.count} 
              increase={this.onIncrease} 
              decrease={this.onDecrease}/>
      
      </div>
    );
  }
}

export default App;
