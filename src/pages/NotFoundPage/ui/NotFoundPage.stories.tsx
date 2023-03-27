import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const light = Template.bind({});
light.args = {};

export const dark = Template.bind({});
dark.args = {};
dark.decorators = [ThemeDecorator(Theme.DARK)]
