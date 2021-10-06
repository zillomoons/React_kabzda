import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired');
const onClickedCallback = action('some item was clicked');

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    changeCollapsed: onClickedCallback
};
export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    changeCollapsed: onClickedCallback,
};
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'} changeCollapsed={()=> setValue(!value)} collapsed={value} />
}
