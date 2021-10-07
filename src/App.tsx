import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import { UnCtrlOnOff } from './components/UnControlledOnOff/UnCtrLOnOff';
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

export type UsersType = {
    _id: number,
    userName: string
}
const users: Array<UsersType> = [
    {_id: 1, userName: 'Julia'},
    {_id: 2, userName: 'Antony'},
    {_id: 3, userName: 'Irin'},
    {_id: 4, userName: 'Luca'},
]

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType >(0)
    let [collapsed, setCollapsed] = useState(false)
    let [switched,setSwitch] = useState(false)
    const changeCollapsed = () => { setCollapsed(!collapsed)};
    const changeSwitch = () => {setSwitch(!switched)}

    return (
        <div className={'appWrapper'}>
            <Accordion titleValue={"Users"}
                       collapsed={collapsed}
                       users={users}
                       changeCollapsed={changeCollapsed}/>
            <Rating value={ratingValue} setValue={setRatingValue}/>
            <OnOff switched={switched} changeSwitch={changeSwitch}/>
            {/*<UnControlledAccordion titleValue={"Users2"} />*/}
            {/*<UnControlledRating onChange={setRatingValue} />{ratingValue.toString()}*/}
            {/*<UnCtrlOnOff onChange={setSwitch} /> {switched.toString()}*/}
        </div>
    );
}


export default App;
