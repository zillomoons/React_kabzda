import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UnControlledRating} from "./UnControlledRating";
import {RatingValueType} from "../Rating/Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UnControlledRating',
    component: UnControlledRating,

} as ComponentMeta<typeof UnControlledRating>;

const callback = action('rating changed inside component')
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnControlledRating> = (args) => <UnControlledRating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    defaultValue: 0,
    onChange: callback
};

export const Rating1 = Template.bind({});
Rating1.args = {
    defaultValue: 1,
    onChange: callback
};

export const Rating2 = Template.bind({});
Rating2.args = {
    defaultValue: 2,
    onChange: callback
};

export const Rating3 = Template.bind({});
Rating3.args = {
    defaultValue: 3,
    onChange: callback
};

export const Rating4 = Template.bind({});
Rating4.args = {
    defaultValue: 4,
    onChange: callback
};

export const Rating5 = Template.bind({});
Rating5.args = {
    defaultValue: 5,
    onChange: callback
};

