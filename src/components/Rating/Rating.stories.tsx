import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Rating, RatingValueType} from './Rating';


export default {
    title: 'Rating',
    component: Rating,

} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyRating.args = {
    value: 0,
    changeRating: x => x,
};

export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    changeRating: x => x,
};

export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    changeRating: x => x,
};

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    changeRating: x => x,
};

export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
    changeRating: x => x,
};

export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
    changeRating: x => x,
};

// export const RatingWithChangingValues = () => {
//     const [value, setValue] = useState<RatingValueType>(0)
//     return <Rating value={value}
//                    setValue={setValue}
//     />
// }
