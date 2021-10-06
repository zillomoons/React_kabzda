import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import { UnCtrlOnOff } from './components/OnOff/UnCtrLOnOff';


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType >(0)
    let [collapsed, setCollapsed] = useState(false)
    let [switched,setSwitch] = useState(false)
    const changeCollapsed = () => { setCollapsed(!collapsed)};
    const changeSwitch = () => {setSwitch(!switched)}

    return (
        <div className={'appWrapper'}>
            <Accordion titleValue={"Users"} collapsed={collapsed} changeCollapsed={changeCollapsed}/>
            <Rating value={ratingValue} setValue={setRatingValue}/>
            {/*<OnOff switched={switched} changeSwitch={changeSwitch}/>*/}
            {/*<UnControlledAccordion titleValue={"Users2"} />*/}
            {/*<UnControlledRating />*/}
            <UnCtrlOnOff onChange={setSwitch} /> {switched.toString()}
        </div>
    );
}


// type PageTitlePropsType = { title : string}
// const PageTitle =(props: PageTitlePropsType) => {
//     return <h1>{props.title}</h1>
// }

export default App;
