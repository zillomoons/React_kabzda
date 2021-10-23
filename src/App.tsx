import React, {useReducer} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Select2, SelectValues} from "./components/Select/select2";
import {ChangeRatingValueAC, ChangeSelectValueAC, reducer, ToggleCollapsedAC, ToggleSwitchedAC} from "./state/reducer";

export type UsersType = {
    _id: number,
    userName: string
    value: any
}
const users: UsersType[] = [
    {_id: 1, userName: 'Julia', value: 1},
    {_id: 2, userName: 'Antony', value: 2},
    {_id: 3, userName: 'Irwin', value: 3},
    {_id: 4, userName: 'Luca', value: 4},
]
const OnUserClick = (value: any) => {
    alert('User with number:  ' + value)
}

export type ItemType = { id: number, title: string, value: any}
const items: ItemType[] = [
    {id: 0, title: 'none', value: '0'},
    {id: 1, title: 'Prague', value: '1'},
    {id: 2, title: 'Helsinki', value: '2'},
    {id: 3, title: 'Berlin', value: '3'},
    {id: 4, title: 'Stockholm', value: '4'},
]

export type StateType = {
    ratingValue: RatingValueType
    collapsed: boolean
    switched: boolean
    selectValue: SelectValues
}

function App() {

    const [state, dispatch] = useReducer(reducer,{
        ratingValue: 0,
        collapsed: false,
        switched: false,
        selectValue: '0'
    })


    const changeRatingValue = (value: RatingValueType) => {
        dispatch(ChangeRatingValueAC(value))
    }
    const toggleCollapsed = () => {
        dispatch(ToggleCollapsedAC())
    };
    const toggleSwitch = () => {
        dispatch(ToggleSwitchedAC())
    }
    const changeSelectValue = (value: SelectValues) => {
        dispatch(ChangeSelectValueAC(value))
    }

    return (
        <div className={'appWrapper'}>
            <Accordion titleValue={"Users"}
                       collapsed={state.collapsed}
                       users={users}
                       onClick={OnUserClick}
                       changeCollapsed={toggleCollapsed}/>
            <Rating value={state.ratingValue} changeRating={changeRatingValue}/>
            <OnOff switched={state.switched} changeSwitch={toggleSwitch}/>
            <Select2 items={items} value={state.selectValue} onChange={changeSelectValue} />

            {/*<UnControlledAccordion titleValue={"Users2"} />*/}
            {/*<UnControlledRating onChange={setRatingValue} />{ratingValue.toString()}*/}
            {/*<UnCtrlOnOff onChange={setSwitch} /> {switched.toString()}*/}
        </div>
    );
}

export default App;
