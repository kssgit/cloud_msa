import React, { Component } from 'react';

class App extends Component {
  //js 주석
  //class 함수 
  formatName(user) {
    return user.firstName+' '+user.lastName
  }

  
  render() {
    
    function formatName(user) {
      return user.firstName+' '+user.lastName
  }
  const user ={
    firstName : 'React',
    lastName : 'function'
  }
    const name = "React";
    const type = "function";
    //JSX 표현식  - camelCase 표현식 background-Color ==>backgroundColor
    //             class ==> className
    const style ={
      backgroundColor : 'black',
      color :'aqua',
      fontSize : '50px',
      fontWeight : 'bold',
      padding : 6,
    }
    return (
      <div> 
        {/* JSX 문법 주석 */}
        {/* JSX - HTML code , {js code} 
          전체를 감사는 root element로 감싸져야 한다 (1개 이상)
          여기서는 div
          one root element로 감싸야 한다
          ex) </>로 해도 되고 
          <Fragment> --> 임포트 해줘야한다
        */}
        <h1>Hello {name}. -{type}</h1>
        {/* 함수도 쓸 수 있다. */}
        <h2>Hello {formatName(user)}</h2>
        {/* 클래스 함수 사용 */}
        <h2>Hello {this.formatName(user)}</h2>
        {/* 태그의 속성도 js 표현식으로 삽입 가능  */}
        <h2 style={style}> Hello </h2>
      </div>
    );
  }
}

export default App; 
// 위의 함수, class를 다른 곳에서 쓰기위해서는 export해줘야 한다
//이해 안됨