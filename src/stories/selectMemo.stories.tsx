import React, {useMemo, useState} from "react";
import {Select2} from "../components/Select/select2";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'selectUseMemo',
    component: Select2,
}

const cities = [
    {id: 1, title: 'Prague', value: '1', country: 'Czech', population: 1309000},
    {id: 2, title: 'Helsinki', value: '2', country: 'Finland', population: 631000},
    {id: 3, title: 'Berlin', value: '3', country: 'Germany', population: 3645000},
    {id: 4, title: 'Stockholm', value: '4', country: 'Sweden', population: 975000},
    {id: 5, title: 'Moscow', value: '5', country: 'Russia', population: 11920000},
    {id: 6, title: 'Voronezh', value: '6', country: 'Russia', population: 997400},
    {id: 7, title: 'Minsk', value: '7', country: 'Belarus', population: 1975000},
    {id: 8, title: 'Brest', value: '8', country: 'Belarus', population: 343985},
    {id: 8, title: 'New York', value: '9', country: 'USA', population: 8920000},
    {id: 10, title: 'Miami', value: '10', country: 'USA', population: 478251}
]

export const M_CitiesExample: ComponentStory<typeof Select2> = (args) => {
    const [selectValue, setSelectValue] = React.useState<any>('2');
    const [counter, setCounter] = useState(0);
    const m_cities = useMemo(() => cities.filter(c => c.title.indexOf('M') > -1), [cities])
    return (
        <div>
            <Select2 items={m_cities} value={selectValue} onChange={setSelectValue}/>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </div>
    )
}

export const Cities_Of_Country: ComponentStory<typeof Select2> = (args) => {
    const [selectValue, setSelectValue] = React.useState<any>('2');
    const [counter, setCounter] = useState(0);
    const cities_of_Russia = useMemo(()=> cities.filter(c=> c.country === "Russia"), [cities])
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Select2 items={cities_of_Russia} value={selectValue} onChange={setSelectValue}/>
        </div>
    )
}
export const Cities_with_population_over_million: ComponentStory<typeof Select2> = (args) => {
    const [selectValue, setSelectValue] = React.useState<any>('2');
    const [counter, setCounter] = useState(0);
    const cities_over_million = useMemo(()=> cities.filter(c=> {
        console.log('selectUseMemo')
        return c.population > 1000000
    }), [cities])
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Select2 items={cities_over_million} value={selectValue} onChange={setSelectValue}/>
        </div>
    )
}