import React, {useState} from 'react'


function getDifficultCalculation() {
    console.log('generateData')
    return 3546789;
}

export const UseStateEx = () => {

    console.log('Example_1')
    const [counter, setCounter] = useState(getDifficultCalculation); // [0, func(newValue){}]

    return <>
        <div><b>useState</b></div>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}