import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const getDateWithZero = (num: number) => num < 10 ? '0' + num : num
    return <div>
        <>
            <span>{getDateWithZero(date.getHours())}</span>
            :
            <span>{getDateWithZero(date.getMinutes())}</span>
            :
            <span>{getDateWithZero(date.getSeconds())}</span>
        </>
    </div>
}