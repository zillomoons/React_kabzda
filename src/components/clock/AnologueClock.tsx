import React, {useEffect, useState} from "react";
import s from './AnologueClock.module.css';

type PropsType = {

}

export const AnalogueClock = (props: PropsType) => {
    const [clock, setClock] = useState(new Date());
    const sec = clock.getSeconds();
    const secDegrees = ((sec / 60) * 360) + 90;
    const min = clock.getMinutes();
    const minDegrees = ((min / 60) * 360) + ((sec/60) * 6) + 90;
    const hour = clock.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((min /60) * 30) + 90;
    useEffect(() => {
        const intervalID = setInterval(() => {
            setClock(new Date());
        }, 1000);
        return ()=>{
            clearInterval(intervalID);
        }
    }, [])
    return (
        <div className={s.clock}>
            <div className={s.outerClockFace}>
                <div className={`${s.marking} ${s.markingOne}`}></div>
                <div className={`${s.marking} ${s.markingTwo}`}></div>
                <div className={`${s.marking} ${s.markingThree}`}></div>
                <div className={`${s.marking} ${s.markingFour}`}></div>
            </div>
            <div className={s.innerClockFace}>
                <div style={{transform : `rotate(${hourDegrees}deg)`}} className={`${s.hand} ${s.hourHand}`}></div>
                <div style={{transform : `rotate(${minDegrees}deg)`}} className={`${s.hand} ${s.minHand}`}></div>
                <div style={{transform : `rotate(${secDegrees}deg)`}} className={`${s.hand} ${s.secHand}`}></div>
            </div>
        </div>
    )
}