import React from "react";

type StarPropsType = {
    selected: boolean
    setValue: (value: number) => void
    value: 1 | 2 | 3 | 4 | 5
}

export const UnCtrlStar = (props: StarPropsType) => {

    const onSetValue = () => { props.setValue(props.value)}
    return (
        <>
            <span onClick={onSetValue}> { props.selected ? <b>star</b> : "star" } </span>
        </>

    )

}
