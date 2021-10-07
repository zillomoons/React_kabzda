import React, {useState} from 'react'
import s from '../OnOff/onOff.module.css'

type PropsType = {
    onChange: (switched: boolean) => void
    defaultValue?: boolean
}

export const UnCtrlOnOff = (props: PropsType) => {

    let [switched, setSwitch] = useState(props.defaultValue ? props.defaultValue : false)
    const onStyle = {backgroundColor: switched ? 'limegreen' : 'white'}
    const offStyle = {backgroundColor: switched ? 'white' : 'red'}
    const circleStyle = {backgroundColor: switched ? 'limegreen' : 'red'}
    const onClickedSwitch = () => {
        setSwitch(!switched);
        props.onChange(!switched);
    }
    return (
        <div className={s.btnWrapper}>
            <button onClick={onClickedSwitch} style={onStyle}>On
            </button>
            <button onClick={onClickedSwitch} style={offStyle}>Off
            </button>
            <div id={s.circle} style={circleStyle}></div>
        </div>
    )
}