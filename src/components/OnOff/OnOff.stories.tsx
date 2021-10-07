import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,

} as ComponentMeta<typeof OnOff>;

const callback = action('on or off clicked');
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    switched: true,
    changeSwitch: callback,
};

export const OffMode = Template.bind({});
OffMode.args = {
    switched: false,
    changeSwitch: callback,
};

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff switched={value} changeSwitch={()=>{setValue(!value)}} />
}
