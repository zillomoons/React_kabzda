import React, {useRef, useState, MouseEvent, ChangeEvent} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'input',

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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeInput}/>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChangeInput}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChangeInput = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeInput}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>

}
