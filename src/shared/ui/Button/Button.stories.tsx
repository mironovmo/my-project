import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Button, ButtonSize, ButtonTheme} from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
};

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED
};

export const squareSizeM = Template.bind({});
squareSizeM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_M
};

export const squareSizeL = Template.bind({});
squareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_L
};

export const squareSizeXL = Template.bind({});
squareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_XL
};

export const size_m = Template.bind({});
size_m.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.SIZE_M
};

export const size_l = Template.bind({});
size_l.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.SIZE_L
};

export const size_xl = Template.bind({});
size_xl.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.SIZE_XL
};


