import React from "react";
import {AnalogueClock} from "./AnologueClock";
import {DigitalClock} from "./DigitalClock";

type PropsType = {
    typeOfClock: 'analogue' | 'digital'
}

export const Clock = ({typeOfClock}: PropsType) => {
    return typeOfClock === 'analogue'
        ? <AnalogueClock/>
        : <DigitalClock/>
}