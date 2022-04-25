import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export type ItemType = {
    value: any
    title: string
}

export const Select = React.memo((props: SelectPropsType) => {

    const [active, setActive] = useState<boolean>(false)
    const [hovered, setHovered] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hovered)

    const setActiveHandler = () => {
        setActive(!active)
    }

    useEffect(() => {
        setHovered(props.value)
    }, [props.value])

    const onItemClick = (value: any) => {
        props.onChange(value);
        setActiveHandler();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovered) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }
    return (
        <>
            <div><b>Select</b></div>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main}
                      onClick={setActiveHandler}>{selectedItem && selectedItem.title}</span>
                {
                    active && <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => setHovered(i.value)}
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        >{i.title}</div>)}
                    </div>
                }

            </div>
        </>
    )
})