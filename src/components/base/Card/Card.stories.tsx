import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card, type CardProps } from 'src/components/base/Card';

const VARIANTS = ['outlined', 'solid', 'soft'] as const;
const COLORS = ['white', 'grey', 'blue', 'orange', 'red', 'green'] as const;
const SIZES = ['sm', 'md', 'lg'] as const;
const SHADOWS = ['sm', 'md', 'lg'] as const;

const meta: Meta<CardProps> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    args: {
        children: 'Component - Card 예요.',
        variant: 'solid',
        color: 'white',
        size: 'md',
        shadow: 'md',
    },
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
        shadow: {
            control: 'select',
            options: SHADOWS,
        },
    },
} satisfies Meta<CardProps>;
export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        color: 'white',
        children: 'Outlined Card 예요.',
    },
};

export const Soft: Story = {
    args: {
        variant: 'soft',
        color: 'white',
        children: 'Soft Card 예요.',
    },
};
