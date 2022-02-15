import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


type AccordionPropsType = {
    title: string
    // collapsed: boolean
}

const UncontrolledAccordion = React.memo((props: AccordionPropsType) => {
    console.log('UncontrolledAccordion rendering...')

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <>
        <span>Неконтролируемая компонента: </span>
        <AccordionTitle title={props.title} onClick={() => {
            dispatch({type: TOGGLE_COLLAPSED}) //диспатчим (отправляем) инструкцию типа тоггл
        }}/>
        {!state.collapsed && <AccordionBody/>}
    </>
})

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    console.log('AccordionTitle is rendering')
    return (
        <h3 onClick={() => props.onClick()}>---{props.title}---</h3>
    )
})

const AccordionBody = React.memo(() =>{
    console.log('AccordionBody is rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
})

export default UncontrolledAccordion;
