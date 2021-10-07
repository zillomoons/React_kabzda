import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UnCtrlOnOff} from "./UnCtrLOnOff";
import {UnControlledRating} from "../UnControlledRating/UnControlledRating";


export default {
    title: 'UnCtrlOnOff',
    component: UnCtrlOnOff,

} as ComponentMeta<typeof UnCtrlOnOff>;

const callback = action('on or off clicked');
const Template: ComponentStory<typeof UnCtrlOnOff> = (args) => <UnCtrlOnOff {...args} />;

// export const ModeChangingUnCtrl = () => {
//     const [value, setValue] = useState<boolean>(false);
//     return <UnCtrlOnOff onChange={setValue} />
// }

export const OnModeUnCtrl = Template.bind({})
OnModeUnCtrl.args = {
    defaultValue: true,
    onChange: callback
}
export const OffModeUnCtrl = Template.bind({})
OffModeUnCtrl.args = {
    defaultValue: false,
    onChange: callback
}


