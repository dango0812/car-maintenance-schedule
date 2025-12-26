import type { Meta, StoryObj } from '@storybook/react-vite';

import { vars } from '~/shared/styles/vars.css';

import { FlexBox, type FlexBoxProps } from '~/shared/ui/FlexBox';

const DIRECTIONS = ['row', 'column', 'row-reverse', 'column-reverse'] as const;
const JUSTIFY_CONTENTS = [
    'normal',
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
] as const;
const ALIGN_ITEMS = ['normal', 'stretch', 'flex-start', 'flex-end', 'center', 'baseline'] as const;
const WRAPS = ['nowrap', 'wrap', 'wrap-reverse'] as const;

const meta: Meta<FlexBoxProps> = {
    title: 'Components/FlexBox',
    component: FlexBox,
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: 'select',
            options: DIRECTIONS,
        },
        justifyContent: {
            control: 'select',
            options: JUSTIFY_CONTENTS,
            description: 'Justify content',
        },
        alignItems: {
            control: 'select',
            options: ALIGN_ITEMS,
            description: 'Align items',
        },
        wrap: {
            control: 'select',
            options: WRAPS,
            description: 'Flex wrap',
        },
        width: { control: 'text' },
        height: { control: 'text' },
        children: {
            control: {
                disable: true,
            },
        },
        className: {
            control: {
                disable: true,
            },
        },
    },
    args: {
        direction: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
} satisfies Meta<FlexBoxProps>;
export default meta;

type Story = StoryObj<FlexBoxProps>;

const DemoBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            style={{
                backgroundColor: vars.colors.greenAlpha[200],
                padding: vars.padding.p20,
                borderRadius: vars.radius.md,
                color: vars.colors.green[600],
                fontWeight: vars.font.weight.bold,
                fontSize: vars.font.size.s14,
                lineHeight: vars.font.lineHeight.md,
            }}
        >
            {children}
        </div>
    );
};

export const Default: Story = {
    args: {
        children: (
            <>
                {[...Array(3)].map((_, index) => (
                    <DemoBox key={index}>Item {index + 1}</DemoBox>
                ))}
            </>
        ),
    },
};

export const Row: Story = {
    args: {
        direction: 'row',
        children: (
            <>
                {[...Array(3)].map((_, index) => (
                    <DemoBox key={index}>Item {index + 1}</DemoBox>
                ))}
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                {[...Array(3)].map((_, index) => (
                    <DemoBox key={index}>Item {index + 1}</DemoBox>
                ))}
            </>
        ),
    },
};

export const Center: Story = {
    args: {
        direction: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        children: (
            <>
                {[...Array(3)].map((_, index) => (
                    <DemoBox key={index}>Item {index + 1}</DemoBox>
                ))}
            </>
        ),
    },
};

export const SpaceBetween: Story = {
    args: {
        direction: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        children: (
            <>
                {[...Array(3)].map((_, index) => (
                    <DemoBox key={index}>Item {index + 1}</DemoBox>
                ))}
            </>
        ),
    },
};

export const Wrap: Story = {
    args: {
        direction: 'row',
        wrap: 'wrap',
        width: '300px',
        children: (
            <>
                {[...Array(4)].map((_, index) => (
                    <DemoBox key={index}>Item {index + 1}</DemoBox>
                ))}
            </>
        ),
    },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const __namedExportsOrder = ['Default', 'Row', 'Column', 'Center', 'SpaceBetween', 'Wrap'];
