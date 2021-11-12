import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo',
}

function generateData() {
    //difficult calculations
    console.log('generateData');
    return 4654546;
}

export const useStateExample = () => {
    console.log('useStateExample');

    // const initValue = useMemo(generateData, []); // 1st way to use hook useMemo to memoize result of function call

    const [count, setCount] = useState(generateData); // 2nd way is just pass this function to useState and it'll memoize result of function call as initial state
    const changer = (state: number) => {
        debugger;
        return state + 1;
    }
    return (
        <>
            <button onClick={()=> setCount(changer)}>  {/*setCount can receive function that will change local state*/}
                +
            </button>
            <h1>{count}</h1>

        </>
    )
}