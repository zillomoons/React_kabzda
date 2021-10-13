import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/select";
import {Select2} from "./components/Select/select2";

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

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType >(0)
    let [collapsed, setCollapsed] = useState(false)
    let [switched,setSwitch] = useState(false)
    const [selectValue, setSelectValue] = React.useState<any>('Choose capital')
    const [selectValue2, setSelectValue2] = React.useState<any>('0')
    const onItemClick = (value: any) => items.find(i => (i.value === value) && setSelectValue(i.title))
    const changeCollapsed = () => { setCollapsed(!collapsed)};
    const changeSwitch = () => {setSwitch(!switched)}

    return (
        <div className={'appWrapper'}>
            <Accordion titleValue={"Users"}
                       collapsed={collapsed}
                       users={users}
                       onClick={OnUserClick}
                       changeCollapsed={changeCollapsed}/>
            <Rating value={ratingValue} setValue={setRatingValue}/>
            <OnOff switched={switched} changeSwitch={changeSwitch}/>
            <Select items={items} selectValue={selectValue} onItemClick={onItemClick} />
            <Select2 items={items} value={selectValue2} onChange={setSelectValue2} />
            {/*<UnControlledAccordion titleValue={"Users2"} />*/}
            {/*<UnControlledRating onChange={setRatingValue} />{ratingValue.toString()}*/}
            {/*<UnCtrlOnOff onChange={setSwitch} /> {switched.toString()}*/}
        </div>
    );
}


export default App;
