import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UnCtrlOnOff} from "./UnCtrLOnOff";


export default {
    title: 'UnCtrlOnOff',
    component: UnCtrlOnOff,

} as ComponentMeta<typeof UnCtrlOnOff>;

const callback = action('on or off clicked');
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const ModeChangingUnCtrl = () => {
    const [value, setValue] = useState<boolean>(false);
    return <UnCtrlOnOff onChange={setValue} />
}

export const OnModeUnCtrl = () => {
    return <UnCtrlOnOff defaultValue={true} onChange={callback}/>
}
export const OffModeUnCtrl = () => {
    return <UnCtrlOnOff defaultValue={false} onChange={callback}/>
}

