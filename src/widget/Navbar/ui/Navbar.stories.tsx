import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const light = Template.bind({});
light.args = {};
light.decorators = [StoreDecorator({})];

export const dark = Template.bind({});
dark.args = {};
dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const isAuthorization = Template.bind({});
isAuthorization.args = {};
isAuthorization.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { athData: {} } })];
