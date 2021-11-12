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

export type ItemType = { id: number, title: string, value: any, country: string, population: number}
const items: ItemType[] = [
    {id: 1, title: 'Prague', value: '1', country: 'Czech', population: 5454887},
    {id: 2, title: 'Helsinki', value: '2', country: 'Finland', population: 5454887},
    {id: 3, title: 'Berlin', value: '3', country: 'Germany', population: 5454887},
    {id: 4, title: 'Stockholm', value: '4', country: 'Sweden', population: 5454887},
    {id: 5, title: 'Moscow', value: '5', country: 'Russia',population: 11920000},
    {id: 6, title: 'Voronezh', value: '6', country: 'Russia', population: 997400},
    {id: 7, title: 'Minsk', value: '7', country: 'Belarus', population: 1975000},
    {id: 8, title: 'Brest', value: '8', country: 'Belarus', population: 343985},
    {id: 8, title: 'New York', value: '9', country: 'USA', population: 8920000},
    {id: 10, title: 'Miami', value: '10', country: 'USA', population: 478251}

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
