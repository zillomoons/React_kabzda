import React, {useRef, useState, MouseEvent} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


export default {
    title: 'Example/Button',
    // component: Button,
    // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <>
        <input onChange={(e) => {
            const actualValue = e.currentTarget.value;
            setValue(actualValue);
        }}/> - {value}
    </>
}
export const ControlledInputWithFixedValue = () => <input value={'simpapushe4ka'}/>
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    let newValue: string;

    return <>
        <input onChange={e => {
            newValue = e.currentTarget.value;
        }}/>
        <button onClick={() => {
            setValue(newValue)
        }}>save
        </button>
        - actual value: {value}
    </>
}
export const GetValueOfUncontrolledInputByButtonPress2 = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}
    </>
}
