import {Clock} from "./Clock";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Clock',
    component: Clock
} as ComponentMeta<typeof Clock>


const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const Digital = Template.bind({});
Digital.args={
    typeOfClock: 'digital'
}

export const Analogue = Template.bind({});
Analogue.args={
    typeOfClock: 'analogue'
}

