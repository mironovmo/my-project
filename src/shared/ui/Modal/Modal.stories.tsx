import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut autem consequuntur, cum fugit illum laboriosam laudantium magni maxime nisi odit officiis porro quasi, qui sed veniam vitae voluptatibus.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut autem consequuntur, cum fugit illum laboriosam laudantium magni maxime nisi odit officiis porro quasi, qui sed veniam vitae voluptatibus.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
