import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography, type TypographyProps } from '~/shared/ui/Typography';

const TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p', 'label', 'pre', 'del', 'ins', 'em'] as const;
const VARIANTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'title', 'body', 'caption'] as const;

const meta: Meta<TypographyProps> = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {
        as: {
            control: 'select',
            options: TAGS,
        },
        variant: {
            control: 'select',
            options: VARIANTS,
        },
        fontSize: {
            control: 'text',
        },
        fontWeight: {
            control: 'text',
        },
        lineHeight: {
            control: 'text',
        },
        whiteSpace: {
            control: 'text',
        },
        children: {
            control: 'text',
        },
        className: {
            control: false,
        },
    },
    args: {
        as: 'p',
        variant: 'title',
        children: '가나다라마바사아자차카타파하',
    },
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<TypographyProps>;

export const Default: Story = {};

export const Headings: Story = {
    render: () => (
        <div>
            <Typography as="h1" variant="h1">
                가나다라마바사아자차카타파하 h1
            </Typography>
            <Typography as="h2" variant="h2">
                가나다라마바사아자차카타파하 h2
            </Typography>
            <Typography as="h3" variant="h3">
                가나다라마바사아자차카타파하 h3
            </Typography>
            <Typography as="h4" variant="h4">
                가나다라마바사아자차카타파하 h4
            </Typography>
            <Typography as="h5" variant="h5">
                가나다라마바사아자차카타파하 h5
            </Typography>
            <Typography as="h6" variant="h6">
                가나다라마바사아자차카타파하 h6
            </Typography>
            <Typography variant="title">가나다라마바사아자차카타파하 title</Typography>
            <Typography variant="body">가나다라마바사아자차카타파하 body</Typography>
            <Typography variant="caption">가나다라마바사아자차카타파하 caption</Typography>
        </div>
    ),
};

export const ResponsiveTypography: Story = {
    render: () => (
        <div>
            <Typography fontSize={{ mobile: 's16', tablet: 's24', desktop: 's48' }}>
                가나다라마바사아자차카타파하
            </Typography>
        </div>
    ),
};
