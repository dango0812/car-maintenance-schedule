import type { Meta, StoryObj } from '@storybook/react-vite';

import { sprinkles } from '~/shared/styles/sprinkles.css';
import { vars } from '~/shared/styles/vars.css';

import { Input, type InputProps } from '~/shared/ui/Input';

const VARIANTS = ['outlined', 'solid'] as const;
const COLORS = ['grey', 'blue', 'orange', 'red', 'green'] as const;
const SIZES = ['sm', 'md', 'lg'] as const;

const meta: Meta<InputProps> = {
    title: 'Components/Input',
    component: Input,
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
        startDecorator: {
            control: false,
        },
        error: {
            control: 'boolean',
        },
        className: {
            control: false,
        },
    },
    args: {
        variant: 'outlined',
        color: 'grey',
        size: 'md',
        label: 'Input label',
        placeholder: 'Enter text...',
        required: false,
        disabled: false,
        fullWidth: false,
    },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
    },
};

export const Colors: Story = {
    render: () => (
        <div
            className={sprinkles({
                display: 'flex',
                flexDirection: 'column',
            })}
            style={{
                gap: '16px',
                maxWidth: '400px',
            }}
        >
            {COLORS.map((color) => (
                <div key={color}>
                    <p
                        style={{
                            margin: `0 0 ${vars.margin.m8} 0`,
                            fontSize: vars.font.size.s12,
                            color: '#666',
                            fontWeight: vars.font.weight.semiBold,
                            textTransform: 'capitalize',
                        }}
                    >
                        {color}
                    </p>
                    <Input color={color} placeholder={`${color} input`} />
                </div>
            ))}
        </div>
    ),
};

export const Size: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <div>
                <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666', fontWeight: 600 }}>Small (36px)</p>
                <Input size="sm" placeholder="Small input" />
            </div>
            <div>
                <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666', fontWeight: 600 }}>Medium (40px)</p>
                <Input size="md" placeholder="Medium input" />
            </div>
            <div>
                <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666', fontWeight: 600 }}>Large (44px)</p>
                <Input size="lg" placeholder="Large input" />
            </div>
        </div>
    ),
};

export const StartDecorator: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <Input
                label="검색"
                placeholder="검색어를 입력하세요"
                startDecorator={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8" strokeWidth="2" />
                        <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                }
            />
            <Input label="금액" placeholder="0" startDecorator="₩" />
        </div>
    ),
    args: {
        disabled: true,
    },
};

export const HelperText: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <Input label="이메일" placeholder="example@email.com" error helperText="올바른 이메일을 입력해주세요" />
            <Input label="비밀번호" type="password" required helperText="8자 이상 입력하세요" />
        </div>
    ),
};
