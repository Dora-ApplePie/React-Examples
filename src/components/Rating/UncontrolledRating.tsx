import React, {useState} from "react";

export type RatingValueType = 1 | 2 | 3 | 4 | 5 ;

export function UncontrolledRating() {
    console.log('Rating rendering')

    let [value, setValue] = useState(0)

    return (
        <div>
            <span><b>Неконтролируемая компонента: </b></span>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
            {/*Второй способ:
            <Star selected={value > 4} setValue={()=> setValue(5)}
            И убрать из пропсов value и value: RatingValueType
            и еще убрать props.value из спана в сэте/>*/}
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setValue: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return (
        <span onClick={()=> {props.setValue(props.value)}}>
            {props.selected ? <b>Star </b> : "Star "}
        </span>
    )
}

export default UncontrolledRating;