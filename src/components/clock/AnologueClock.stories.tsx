import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AnalogueClock} from "./AnologueClock";


export default {
    title: 'AnalogueClock',
    component: AnalogueClock,

} as ComponentMeta<typeof AnalogueClock>;

const Template: ComponentStory<typeof AnalogueClock> = (args) => <AnalogueClock {...args} />;

export const AnalogueExample = Template.bind({})


