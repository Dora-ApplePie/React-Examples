import React, {ChangeEvent, useRef, useState} from "react";


const GetValueOfUncontrolledInputByPressId = React.memo(() => { //получение вэлью с инпута через реф inputRef

    const [value, setValue] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <div>
        <input ref={inputRef}/>
        <button onClick={save}>Save
        </button>
        - actual value: {value}
    </div>
})

const TrackValueOfUncontrolledInput = React.memo(() => { //просто трекинг велью через событие e
    //при каждом изменении в стейте вэлью происходит прересовка

    const [value, setValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }
    return (
        <div>
            <input onChange={onChangeHandler}/> Вы сейчас написали: {value}</div>
    )
})

const ControlledInput = React.memo(() => { //Контролируемый инпут через событие e

    const [parentValue, setParentValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <div>
            <input value={parentValue} onChange={onChangeHandler}/>
        </div>
    )
})

const ControlledCheckBox = React.memo(() => { //Контролируемый  чекбокс через событие e

    const [parentValue, setParentValue] = useState(true);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked)
    }
    return (
        <div>
            <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
        </div>
    )
})

const ControlledSelect = React.memo(() => { //Контролируемый  чекбокс через событие e

    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }
    return (
        <div>
            <select value={parentValue} onChange={onChangeHandler}>
                <option>None</option>
                <option value={'1'}>Mouse</option>
                <option value={'2'}>Patricia</option>
                <option value={'3'}>Regan</option>
                <option value={'4'}>Jessica</option>
                <option value={'5'}>Kevin</option>
                <option value={'6'}>Monika</option>
            </select>
        </div>
    )
})

const Input = React.memo(() => {

    return (
        <>
            <hr/>
            <b>Получение значения у неконтролируемого инпута по нажатию на кнопку</b>
            <GetValueOfUncontrolledInputByPressId/>
            <hr/>
            <b>Трекинг значения у неконтролируемого инпута через событие event</b>
            <TrackValueOfUncontrolledInput/>
            <hr/>
            <b>Контролируемый Инпут</b>
            <ControlledInput/>
            <hr/>
            <b>Контролируемый Чекбокс</b>
            <ControlledCheckBox/>
            <hr/>
            <b>Контролируемый Селект</b>
            <ControlledSelect/>
            <hr/>
        </>
    )
})

export default Input;