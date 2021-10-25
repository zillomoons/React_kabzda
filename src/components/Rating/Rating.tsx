import {Star} from "./Star";
import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsTypes = {
    value: RatingValueType
    changeRating: (value: RatingValueType) => void
}

const Rating_Private = ({value, changeRating}: RatingPropsTypes) => {
    return (
        <div>
            <Star selected={value > 0} setValue={() => {
                changeRating(1)
            }}/>
            <Star selected={value > 1} setValue={() => {
                changeRating(2)
            }}/>
            <Star selected={value > 2} setValue={() => {
                changeRating(3)
            }}/>
            <Star selected={value > 3} setValue={() => {
                changeRating(4)
            }}/>
            <Star selected={value > 4} setValue={() => {
                changeRating(5)
            }}/>
        </div>
    )
}

export const Rating = React.memo(Rating_Private);
