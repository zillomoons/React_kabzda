import React, {useState} from "react";
import {UnCtrlStar} from "./UnCtrlStar";
import './UnCtrlStar.css'

export const UnControlledRating = () => {
    let [value, setValue] = useState(  0)

    return (
        <div className={'starStyle'}>
            <UnCtrlStar selected={value > 0} setValue={setValue} value={1}/>
            <UnCtrlStar selected={value > 1} setValue={setValue} value={2}/>
            <UnCtrlStar selected={value > 2} setValue={setValue} value={3}/>
            <UnCtrlStar selected={value > 3} setValue={setValue} value={4}/>
            <UnCtrlStar selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}

