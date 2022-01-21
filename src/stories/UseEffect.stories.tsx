import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const UseEffectExample = () => {
    const [count, setCount] = useState(1);
    const [fake, setFake] = useState(1);
    console.log('EffectExample');

    useEffect(() => {
        console.log('useEffect every render');
        document.title = count.toString();

    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = count.toString();
    }, [])
    useEffect(() => {
        console.log('useEffect first render and when count changes');
        document.title = count.toString();
    }, [count])

    return (
        <>
            <div>
                Hello, {fake}
                <button onClick={() => setFake(fake + 1)}>fake</button>
            </div>
            <div>
                Hi, {count}
                <button onClick={() => setCount(count + 1)}>count</button>
            </div>


        </>
    )
}
export const SetTimeOutExample = () => {
    const [count, setCount] = useState(1);
    const [fake, setFake] = useState(1);
    console.log('SetTimeoutExample');

    useEffect(() => {
        const timeoutID = setTimeout(()=> {
            console.log('setTimeout')
            document.title = count.toString();
        }, 1000);
        const intervalID = setInterval(() => {
            setCount(state=>state + 1)
        }, 1000);
        return ()=>{
            clearInterval(intervalID);
            clearTimeout(timeoutID);
        }
    }, [])


    return (
        <>
            <div>
                fake: {fake}
                {/*<button onClick={()=>setFake(fake + 1)}>fake</button>*/}
            </div>
            <div>
                count: {count}
                {/*<button onClick={()=>setCount(count + 1)}>count</button>*/}
            </div>


        </>
    )
}
export const SetIntervalClockExample = () => {

    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("TICK")
            setClock(new Date());
        }, 1000);
        return ()=> {
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
            setTime(new Date().toLocaleTimeString());
        }, 1000);
       return () => {
           clearInterval(intervalID)
       }
    }, [])

    return (
        <>
            <div>
                1st variant - {hour}:{min}:{sec}
            </div>
            <div>
                2nd variant - {cTime}
            </div>

        </>
    )
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('');
    
    console.log('Component rendered with', text)

    useEffect(() => {
        const handler = (e: KeyboardEvent)=> {
            console.log(e.key)
            setText((state)=> state + e.key)
        }
        window.addEventListener('keypress', handler)

        return ()=> {
            console.log('RESET EFFECT')
            window.removeEventListener('keypress', handler)
        }
    }, [])
    
    return (
        <>
           Typed text: {text} 

        </>
    )
}
export const SetTimeoutExample  = () => {

    const [text, setText] = useState('');
    
    console.log('Component rendered with', text)

    useEffect(() => {
        const timeoutId = setTimeout(()=>{
            setText('3 seconds have passed')
        }, 3000)

        return ()=> {
            clearTimeout(timeoutId)
        }
    }, [text])
    
    return (
        <>
           Typed text: {text} 

        </>
    )
}
/*setTimeout, setInterval, window.addEventlisteners - 
keypress, onclick, scroll - need to cleanup effects
websocket, etc.
*/