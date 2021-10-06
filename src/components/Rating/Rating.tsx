import {Star} from "./Star";
import React from "react";

export type RatingValueType = 0| 1| 2 | 3 | 4 | 5

export type RatingPropsTypes = {
    value: RatingValueType
    setValue: (ratingValue: RatingValueType) => void
}

export const Rating = (props: RatingPropsTypes) => {
        return (
            <div>
                <Star selected={props.value > 0} setValue={ () => {props.setValue(1)}} />
                <Star selected={props.value > 1} setValue={ () => {props.setValue(2)}} />
                <Star selected={props.value > 2} setValue={ () => {props.setValue(3)}} />
                <Star selected={props.value > 3} setValue={ () => {props.setValue(4)}} />
                <Star selected={props.value > 4} setValue={ () => {props.setValue(5)}} />
            </div>
        )
    }
