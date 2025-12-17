import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { NumberInput, type NumberInputProps } from 'src/components/base/NumberInput';

const VARIANTS = ['outlined', 'solid'] as const;
const COLORS = ['grey', 'blue', 'orange', 'red', 'green'] as const;
const SIZES = ['sm', 'md', 'lg'] as const;

const meta: Meta<NumberInputProps> = {
    title: 'Components/NumberInput',
    component: NumberInput,
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
        minNumber: {
            control: 'number',
        },
        maxNumber: {
            control: 'number',
        },
        value: {
            control: false,
        },
        label: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
        disabled: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
        error: {
            control: 'boolean',
        },
        onChange: {
            control: false,
        },
        startDecorator: {
            control: false,
        },
        helperText: {
            control: 'text',
        },
        className: {
            control: false,
        },
    },
    args: {},
} satisfies Meta<NumberInputProps>;

export default meta;
type Story = StoryObj<NumberInputProps>;

export const Default: Story = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useState<number>(50);

        return (
            <NumberInput
                variant="outlined"
                color="grey"
                size="md"
                label="Min: 10, Max: 100"
                placeholder="Enter number..."
                {...args}
                value={value}
                minNumber={10}
                maxNumber={100}
                onChange={(v) => setValue(v)}
            />
        );
    },
};
