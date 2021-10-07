import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import UnControlledAccordion from "./UnControlledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UnControlledAccordion,
    argTypes: { callback: {action: 'accordion mode change event fired'}}
} as ComponentMeta<typeof UnControlledAccordion>;

// const Template: ComponentStory<typeof UnControlledAccordion> = (args) => <UnControlledAccordion {...args} />;


export const ModeChanging = () => {
    // const [value, setValue] = useState<boolean>(true);
    return <UnControlledAccordion titleValue={'Users'} />
}
