import React, {useMemo} from "react";

type AccordionPropsType = {
    title: string
    onChange: () => void
    collapsed: boolean
    items: ItemType[]
    onClick: (value: string) => void
}

type ItemType = {
    title: string
    value: any
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}


const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    console.log('AccordionTitle is rendering')
    return (
        <>
            <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
        </>
    )
})

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

const AccordionBody = React.memo((props: AccordionBodyPropsType) => {
    console.log('AccordionBody is rendering')
    return <ul>
        {props.items.map((li, index) => <li onClick={() => props.onClick(li.value)} key={index}>{li.title}</li>)}
    </ul>
})


export const Accordion = React.memo((props: AccordionPropsType) => {
    return <>
        <AccordionTitle title={props.title} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </>
})

