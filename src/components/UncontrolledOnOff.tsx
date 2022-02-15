import React, {useState} from "react";

type StatePropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = React.memo((props: StatePropsType) => {
    console.log('OnOff rendering')

    let [on, setOn] = useState<boolean>(false); //это хук с инициализационным
    // значением и функцией, с помощью него происходит перерисовка

    const onStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "3px",
        backgroundColor: on ? "green" : "white",
        cursor: "pointer"
    };
    const offStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "3px",
        backgroundColor: on ? "white" : "red",
        cursor: "pointer"
    };
    const indicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        marginRight: "5px",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };

    const FuncSetOn = () => {
        setOn(true)
        props.onChange(true)
    }
    const FuncSetOff = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <span>Неконтролируемая компонента: </span>
            <div style={onStyle} onClick={FuncSetOn}>On
            </div>
            <div style={offStyle} onClick={FuncSetOff}>Off
            </div>
            <div style={indicatorStyle}>{''}</div>
        </div>
    )
})
