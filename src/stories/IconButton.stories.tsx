import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { IconButton, type IconButtonProps } from '~/shared/ui/IconButton';

const VARIANTS = ['solid', 'soft', 'outlined'] as const;
const COLORS = ['grey', 'blue', 'orange', 'red', 'green'] as const;
const SIZES = ['sm', 'md', 'lg'] as const;

const meta: Meta<IconButtonProps> = {
    title: 'Components/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: false,
        },
        className: {
            control: false,
        },
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
        disabled: { control: 'boolean' },
        onClick: { action: 'clicked' },
    },
    args: {
        variant: 'solid',
        color: 'grey',
        size: 'md',
        onClick: fn(),
    },
} satisfies Meta<IconButtonProps>;

export default meta;
type Story = StoryObj<IconButtonProps>;

const SearchIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
        />
    </svg>
);

const HeartIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
    </svg>
);

const SettingsIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"
        />
    </svg>
);

export const Default: Story = {
    args: {
        children: SearchIcon,
    },
};

// Variants showcase
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <IconButton variant="soft" color="grey" aria-label="Soft variant">
                    {SearchIcon}
                </IconButton>
                <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Soft</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <IconButton variant="solid" color="grey" aria-label="Solid variant">
                    {SearchIcon}
                </IconButton>
                <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Solid</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <IconButton variant="outlined" color="grey" aria-label="Outlined variant">
                    {SearchIcon}
                </IconButton>
                <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Outlined</p>
            </div>
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', maxWidth: '400px' }}>
            {(['grey', 'blue', 'orange', 'red', 'green'] as const).map((color) => (
                <div key={color} style={{ textAlign: 'center' }}>
                    <IconButton variant="soft" color={color} aria-label={`${color} color`}>
                        {HeartIcon}
                    </IconButton>
                    <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666', textTransform: 'capitalize' }}>
                        {color}
                    </p>
                </div>
            ))}
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <IconButton size="sm" color="blue" aria-label="Small size">
                    {SettingsIcon}
                </IconButton>
                <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Small (32px)</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <IconButton size="md" color="blue" aria-label="Medium size">
                    {SettingsIcon}
                </IconButton>
                <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Medium (40px)</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <IconButton size="lg" color="blue" aria-label="Large size">
                    {SettingsIcon}
                </IconButton>
                <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Large (48px)</p>
            </div>
        </div>
    ),
};

export const ColorMatrix: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '24px' }}>
            {(['soft', 'solid', 'outlined'] as const).map((variant) => (
                <div key={variant}>
                    <h4
                        style={{ margin: '0 0 12px 0', textTransform: 'capitalize', fontSize: '14px', fontWeight: 600 }}
                    >
                        {variant}
                    </h4>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        {(['grey', 'blue', 'orange', 'red', 'green'] as const).map((color) => (
                            <div key={color} style={{ textAlign: 'center' }}>
                                <IconButton variant={variant} color={color} aria-label={`${variant} ${color} button`}>
                                    {HeartIcon}
                                </IconButton>
                                <p style={{ margin: '4px 0 0 0', fontSize: '10px', color: '#666' }}>{color}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    ),
};
