import React, { Component } from 'react';
import Counter2 from './Counter2';
import Counter1 from './Counter1';
//counter 1,2 에서 데이터가 공유되야 한다면 여기서 데이터 state처리를 해줘야하고
//공유되는 데이터가 필요하지 않다면 각각의 childelement에서 state데이터를 처리한다  
class App extends Component {
    render() {
        return (
            <div>
                <Counter1/>
                <Counter2/>
            </div>
        );
    }
}

export default App;