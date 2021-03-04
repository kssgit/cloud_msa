import React , {useState} from 'react';
import Counter from './Counter';
import ACounter from './ACounter';

//state Hook을 사용한 function component
function App(props) {
    //변경데이터 선언
    const [count, setCount] = useState(0);
    return (
        <div>
            <Counter count = {count} 
              increase={() => setCount(count+1)} 
              decrease={() => setCount(count-1)}/>
            <ACounter count = {count}/>
        </div>
    );
}


export default App;
