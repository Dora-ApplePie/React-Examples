import React, {useEffect, useState} from 'react'


export const SetTimeoutAndInterval = () => {

    const [counter, setCounter] = useState(1); // [0, func(newValue){}]
    const [fake, setFake] = useState(0);

    console.log('SetTimeout/IntervalEx')


    // useEffect(() => {
    //     setTimeout(()=> {
    //         console.log('SET TIMEOUT')
    //         document.title = counter.toString()
    //     }, 3000)
    // }, [counter]) //props.counter

    useEffect(() => {

        setInterval(() => {
            console.log('tick ' + counter) //берет из замыкания
            setCounter((state) => state + 1) //берет из измененного counter
        }, 1000)
    },[])


    return <div>
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}
        Counter: {counter} and Fake: {fake}
    </div>
}