import React, {useState} from "react";
import {AccordionBody} from "../Accordion/AccordionBody";
import {UnCtrlAccordionTitle} from "./UnCtrlAccordionTitle";

type AccordionPropsType = { titleValue: string}

const Accordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(true)

    return <div>
        <UnCtrlAccordionTitle title={props.titleValue}
                              onSetCollapsed={ () => {setCollapsed (!collapsed)}} />
        {/*{collapsed && <AccordionBody/>}*/}
    </div>

}
export default Accordion;