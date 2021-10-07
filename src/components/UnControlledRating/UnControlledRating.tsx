import React, {useState} from "react";
import './UnCtrlStar.css'
import {RatingValueType} from "../Rating/Rating";
import {UnCtrlStar} from "./UnCtrlStar";

export type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}
export const UnControlledRating = (props: RatingPropsType) => {
    let [value, setValue] = useState<RatingValueType>(  props.defaultValue? props.defaultValue : 0)

    return (
        <div className={'starStyle'}>
            <UnCtrlStar selected={value > 0} setValue={setValue} value={1} onChange={props.onChange}/>
            <UnCtrlStar selected={value > 1} setValue={setValue} value={2} onChange={props.onChange}/>
            <UnCtrlStar selected={value > 2} setValue={setValue} value={3} onChange={props.onChange}/>
            <UnCtrlStar selected={value > 3} setValue={setValue} value={4} onChange={props.onChange}/>
            <UnCtrlStar selected={value > 4} setValue={setValue} value={5} onChange={props.onChange}/>
        </div>
    )
}

