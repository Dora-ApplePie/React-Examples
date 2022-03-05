import React, {useEffect, useState} from 'react'


export const UseEffectEx = () => {

    const [counter, setCounter] = useState(1); // [0, func(newValue){}]
    const [fake, setFake] = useState(0);

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only firs render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setFake(fake + 1)}>+</button>
        Set title name to: {counter} and fake is: {fake}
    </div>
}