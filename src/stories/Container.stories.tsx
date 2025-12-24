import type { Meta, StoryObj } from '@storybook/react-vite';

import { vars } from '~/shared/styles/vars.css';

import { Container, type ContainerProps } from '~/shared/ui/Container';

const SIZES = ['sm', 'md', 'lg', 'xl'] as const;

const meta: Meta<ContainerProps> = {
    title: 'Components/Container',
    component: Container,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: SIZES,
        },
        fullWidth: {
            control: 'boolean',
        },
        children: {
            control: false,
        },
    },
    args: {
        size: 'lg',
        fullWidth: false,
    },
} satisfies Meta<ContainerProps>;

export default meta;

type Story = StoryObj<ContainerProps>;

export const Default: Story = {
    args: {
        children: (
            <div
                style={{
                    width: '100%',
                    backgroundColor: vars.colors.blue[200],
                    color: vars.colors.white,
                }}
            >
                Container Content
            </div>
        ),
    },
};
