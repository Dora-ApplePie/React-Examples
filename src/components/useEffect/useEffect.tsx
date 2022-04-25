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
        <div><b>useEffect</b></div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setFake(fake + 1)}>+</button>
        Set title name to: {counter} and fake is: {fake}
    </div>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1); // [0, func(newValue){}]

    console.log('Reset effect example rendered with ' + counter) // после нажатия на + запустится с 2

    useEffect(() => {
        console.log('Effect occurred ' + counter)// после нажатия на + эффект запустится с 2

        return () => {
            console.log('RESET EFFECT ' + counter) //после нажатия на +  будет старое значение 1
            // так как сначала запускается очистка а потом срабатывает эффект с новым значением
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return <>
        <div><b>reset useEffect </b></div>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState('');

    console.log('component key-tracker rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler);
        return () => window.removeEventListener('keypress', handler);
    }, [text])

    return <>
        <div><b>KeyTracker with useEffect</b></div>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('');
    console.log('component SetTimeoutExample rendered with ' + text)

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')

            setText('3 sec passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutID)
        }
    }, [text])

    return <>
        <div><b>SetTimeout and clearTimeout in useEffect</b></div>
        Typed text: {text}
    </>
}