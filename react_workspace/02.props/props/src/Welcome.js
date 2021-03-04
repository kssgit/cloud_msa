

//React Component 선언 function(lamda function), Class
//<부모 element key ='value'>content</부모element>
//ex) <Welcome name = 'React' />
//부모 element로 부터 전달된 attribute값이나 content는 props에 저장 전달 
//자식 element에서는 function에서 : argument로 전달된 props사용
//                  class에서 : 상속받은 React.Component의 this.props 사용
//*props : readOnly 읽기만 가능 변경 불가능 

//람다 함수
//import React from 'react'
// const Welcome = (props) =>{
//     return (
//         <div>
//             <h1>Hello , {props.name}</h1>
//         </div>
//     );

// }
// export default Welcome;
import React from 'react'
import PropTypes from 'prop-types';

function Welcome(props){
    return (
        <div>
            <h1 style ={props.style}>Hello , {props.name} == &gt; {props.children}</h1>
            {/* content 속성은 props.children으로  */}
        </div>
    );
}

//props에 값이 넘어오지 않을경우, 값이 할당 되지 않았을 경우 기본값으로 사용
//부모 element로 부터 props 값이 전달되지 않을 때 기본 값 
Welcome.defaultProps ={
    style : {
        backgroundColor : 'black',
        color :'red',
        fontSize : '50px',
        fontWeight : 'bold',
        padding : 6,
    },
    name : '리액트',
}

//props의 타입 (명시)
Welcome.propTypes ={
    name : PropTypes.string,
    style : PropTypes.object
}
export default Welcome;


//class 에서는 this.props.key로 받으면 된다 
// import React, { Component } from 'react';

// class Welcome extends Component {
//     render() {
//         //부모 element App attribute의 값 : props 객체로 참조 
//         const name = this.props.name;   //name 참조 <Welcome name ='값'/>
//         const style = this.props.style; //style 참조 <welcoms style = {style}/>
//        // const {name, style} = this.props; //한번에 
//         return (
//             <div>
//                 <h1>Hello, {name}</h1>
//             </div>
//         );
//     }
// }

// export default Welcome;