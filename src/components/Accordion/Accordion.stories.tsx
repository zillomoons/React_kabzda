import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {}
} as ComponentMeta<typeof Accordion>;
const callback = action('accordion mode change event fired')
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    changeCollapsed: callback,
    users: []

};
export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    changeCollapsed: callback,
    users: [
        {_id: 1, userName: 'Julia'},
        {_id: 2, userName: 'Antony'},
        {_id: 3, userName: 'Irin'},
        {_id: 4, userName: 'Luca'},
    ]
};
export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} changeCollapsed={() => setValue(!value)} collapsed={value}/>
}
ModeChanging.args = {
    titleValue: 'Users',
    users: [
        {_id: 1, userName: 'Julia'},
        {_id: 2, userName: 'Antony'},
        {_id: 3, userName: 'Irin'},
        {_id: 4, userName: 'Luca'},
    ]
}
