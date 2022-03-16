import React, {useEffect, useState} from "react";

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let IntervalId = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)

        return () => clearInterval(IntervalId);
    }, [])

    const getDateWithZero = (num: number) => num < 10 ? '0' + num : num

    return <div>
        <span>{getDateWithZero(date.getHours())}</span>
        :
        <span>{getDateWithZero(date.getMinutes())}</span>
        :
        <span>{getDateWithZero(date.getSeconds())}</span>
    </div>
}
