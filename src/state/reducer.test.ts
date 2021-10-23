import {StateType} from "../App";
import {reducer} from "./reducer";

let state: StateType;

beforeEach(() => {
    state = {
        ratingValue: 0,
        collapsed: false,
        switched: false,
        selectValue: '0'
    }
})

test('reducer should change to correct rating value', () => {

    const newState = reducer(state, {type: 'CHANGE-RATING-VALUE', value: 3})

    expect(newState.ratingValue).toBe(3)
})
test('reducer should change collapsed to opposite', () => {

    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(true)
})
test('reducer should change switched to opposite', () => {

    const newState = reducer(state, {type: 'TOGGLE-SWITCHED'})
    expect(newState.collapsed).toBe(false)
    expect(newState.switched).toBe(true)
})
test('reducer should change to correct select value ', () => {

    const newState = reducer(state, {type: 'CHANGE-SELECT-VALUE', value: "4"})
    expect(newState.collapsed).toBe(false)
    expect(newState.switched).toBe(false)
    expect(newState.selectValue).toBe('4')
})