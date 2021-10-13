import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { Select2 } from "./select2";


export default {
    title: 'Custom Select',
    component: Select2,
} as ComponentMeta<typeof Select2>;

const Template: ComponentStory<typeof Select2> = (args) => <Select2 {...args} />;

const callback = action('Want to change select')

export const SelectCollapsedMode2 = Template.bind({});
SelectCollapsedMode2.args = {
    items: [],
}

export const SelectUncollapsedMode2: ComponentStory<typeof Select2> = (args) => {
    const [selectValue, setSelectValue] = React.useState<any>(2)
    return <Select2 {...args} onChange={setSelectValue} value={selectValue} />
}
SelectUncollapsedMode2.args = {
    items: [
        {id: 0, title: 'none', value: 0},
        {id: 1, title: 'Prague', value: 1},
        {id: 2, title: 'Helsinki', value: 2},
        {id: 3, title: 'Berlin', value: 3},
        {id: 4, title: 'Stockholm', value: 4},
    ],
    onChange: callback
}
export const SelectChangingMode2: ComponentStory<typeof Select2> = (args) => {
    const [selectValue, setSelectValue] = React.useState<any>(2)
    return <Select2 {...args} onChange={setSelectValue} value={selectValue} />
}
SelectChangingMode2.args = {
    items: [
        {id: 0, title: 'none', value: 0},
        {id: 1, title: 'Prague', value: 1},
        {id: 2, title: 'Helsinki', value: 2},
        {id: 3, title: 'Berlin', value: 3},
        {id: 4, title: 'Stockholm', value: 4},
    ]
}


