import React from 'react'
import s from './onOff.module.css'

type OnOffPropsType = {
    switched: boolean,
    /**
     * callback that changes value to true or false
     */
    changeSwitch: () => void }

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = { backgroundColor: props.switched ? 'limegreen' : 'white'}
    const offStyle = { backgroundColor: props.switched ? 'white' : 'red'}
    const circleStyle = { backgroundColor: props.switched ? 'limegreen' : 'red'}
    console.log('switched: '+ props.switched)
    return (
        <div className={s.btnWrapper}>
            <button onClick={props.changeSwitch} style={onStyle}>On</button>
            <button onClick={props.changeSwitch} style={offStyle}>Off</button>
            <div id={s.circle} style={circleStyle} ></div>
        </div>
    )
}