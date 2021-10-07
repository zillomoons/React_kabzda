import React from "react";
import {RatingValueType} from "../Rating/Rating";

type StarPropsType = {
    selected: boolean
    setValue: (value: RatingValueType) => void
    value: RatingValueType
    onChange: (value: RatingValueType)=> void
}

export const UnCtrlStar = (props: StarPropsType) => {

    const onSetValue = () => {
        props.setValue(props.value);
        props.onChange(props.value)
    }
    return (
        <>
            <span onClick={onSetValue}> { props.selected ? <b>star</b> : "star" } </span>
        </>

    )

}
