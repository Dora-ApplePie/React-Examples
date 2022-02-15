import React from "react";

type StatePropsType = {
    // on: boolean
    switcher: boolean
    onClick: (switcher: boolean) => void
}

export const OnOff = React.memo((props: StatePropsType) => {
    console.log('UncontrolledOnOff rendering')

    const onStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "3px",
        backgroundColor: props.switcher ? "green" : "white",
        cursor: "pointer"
    };
    const offStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "3px",
        backgroundColor: props.switcher ? "white" : "red",
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
        backgroundColor: props.switcher ? "green" : "red"
    };
    return (
        <div>
            <span>Контролируемая компонента: </span>
            <div style={onStyle} onClick={() => {
                props.onClick(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.onClick(false)
            }}>Off
            </div>
            <div style={indicatorStyle}>{''}</div>
        </div>
    )
})


