import React from "react";

type AccordionTitlePropsType = {
    title : string
    onSetCollapsed: () => void
}

export const UnCtrlAccordionTitle = (props: AccordionTitlePropsType) => {

    return <h3 onClick={ () => {props.onSetCollapsed()} }> {props.title}</h3>
}
