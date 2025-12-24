import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button, type ButtonProps } from '~/shared/ui/Button';

const VARIANTS = ['solid', 'soft'] as const;
const COLORS = ['black', 'grey', 'blue', 'orange', 'red', 'green'] as const;
const SIZES = ['sm', 'md', 'lg'] as const;

const meta: Meta<ButtonProps> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: VARIANTS,
        },
        color: {
            control: 'select',
            options: COLORS,
        },
        size: {
            control: 'select',
            options: SIZES,
        },
        fullWidth: { control: 'boolean' },
        loading: { control: 'boolean' },
        onClick: { action: 'clicked' },
    },
    args: {
        children: 'Button',
        variant: 'solid',
        color: 'blue',
        size: 'md',
        fullWidth: false,
        loading: false,
        onClick: fn(),
    },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {};

export const Loading: Story = {
    args: {
        loading: true,
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: true,
    },
};
