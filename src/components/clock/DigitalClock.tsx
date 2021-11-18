import React, {useEffect, useState} from "react";

type PropsType = {

}

export const DigitalClock = (props: PropsType) => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setClock(new Date());
        }, 1000);
        return ()=>{
            clearInterval(intervalID);
        }
    }, [])
    const twoDigitString = (num: number) => num < 10 ? '0' + num : num;
    let sec = twoDigitString(clock.getSeconds());
    let min = twoDigitString(clock.getMinutes());
    let hour = twoDigitString(clock.getHours());

    const [cTime, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const intervalID = setInterval(()=>{
            console.log('TICK')
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            clearInterval(intervalID);
        }
    }, [])

    return (
        <>
            <div>
                {hour}:{min}:{sec}
            </div>
            {/*<div>*/}
            {/*    2nd variant - {cTime}*/}
            {/*</div>*/}
        </>
    )
}