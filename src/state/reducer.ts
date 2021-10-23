import {StateType} from "../App";
import {RatingValueType} from "../components/Rating/Rating";
import {SelectValues} from "../components/Select/select2";

type ActionType = ReturnType<typeof ChangeRatingValueAC>
    | ReturnType<typeof ToggleCollapsedAC>
    | ReturnType<typeof ToggleSwitchedAC>
    | ReturnType<typeof ChangeSelectValueAC>

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "CHANGE-RATING-VALUE":
            return {...state, ratingValue: action.value};
        case "TOGGLE-COLLAPSED":
            return {...state, collapsed: !state.collapsed}
        case "TOGGLE-SWITCHED":
            return {...state, switched: !state.switched}
        case "CHANGE-SELECT-VALUE":
            return {...state, selectValue: action.value}
        default:
            return state;
    }
}

export const ChangeRatingValueAC = (value: RatingValueType) => {
    return {type: 'CHANGE-RATING-VALUE', value} as const
}
export const ToggleCollapsedAC = () => {
    return {type: 'TOGGLE-COLLAPSED'} as const;
}
export const ToggleSwitchedAC = () => {
    return {type: 'TOGGLE-SWITCHED'} as const;
}
export const ChangeSelectValueAC = (value: SelectValues) => {
    return {type: 'CHANGE-SELECT-VALUE', value} as const;
}
