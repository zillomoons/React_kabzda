import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const UseEffectExample = () => {
    const [count, setCount] = useState(1);
    const [fake, setFake] = useState(1);
    console.log('EffectExample');

    useEffect(()=>{
        console.log('useEffect every render');
        document.title = count.toString();

    })
    useEffect(()=>{
        console.log('useEffect only first render (componentDidMount)');
        document.title = count.toString();
    }, [])
    useEffect(()=>{
        console.log('useEffect first render and when count changes');
        document.title = count.toString();
    }, [count])

    return (
        <>
            <div>
                Hello, {fake}
                <button onClick={()=>setFake(fake + 1)}>fake</button>
            </div>
            <div>
                Hi, {count}
                <button onClick={()=>setCount(count + 1)}>count</button>
            </div>


        </>
    )
}