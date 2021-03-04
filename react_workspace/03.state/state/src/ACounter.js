import React from 'react';
function sum(count){
    let sum =0;
    for(let i = 1; i< count+1 ; i++){
        sum +=i;
    }
    return sum;
}


function ACounter(props) {
    return (
        <div>
            <h2>0~{props.count}의 합은 : {sum(props.count)}</h2>
        </div>
    );
}

export default ACounter;