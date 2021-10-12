import React from "react";
import {Select} from "./select";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Custom Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const callback = action('Want to change select')

export const SelectCollapsedMode = Template.bind({});
SelectCollapsedMode.args = {
    items: [],
    selectValue: 'Choose capital'
}
export const SelectUncollapsedMode = Template.bind({});
SelectUncollapsedMode.args = {
    items: [
        {id: 0, title: 'none', value: 0},
        {id: 1, title: 'Prague', value: 1},
        {id: 2, title: 'Helsinki', value: 2},
        {id: 3, title: 'Berlin', value: 3},
        {id: 4, title: 'Stockholm', value: 4},
    ],
    selectValue: 'Choose capital',
    onItemClick: callback
}
export const SelectChangingMode: ComponentStory<typeof Select> = (args) => {
    const [selectValue, setSelectValue] = React.useState<string>('Choose capital')
    const changeSelected = (value: any) => setSelectValue(value)
    return <Select {...args} onItemClick={changeSelected} selectValue={selectValue} />
}
SelectChangingMode.args = {
    items: [
        {id: 0, title: 'none', value: 0},
        {id: 1, title: 'Prague', value: 1},
        {id: 2, title: 'Helsinki', value: 2},
        {id: 3, title: 'Berlin', value: 3},
        {id: 4, title: 'Stockholm', value: 4},
    ]
}


