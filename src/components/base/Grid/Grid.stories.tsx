import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from 'components/base/Grid';

import { sprinkles } from 'styles/sprinkles.css';
import { vars } from 'styles/vars.css';

const meta = {
    title: 'Components/Grid',
    component: Grid,
    tags: ['autodocs'],
    argTypes: {
        children: { control: false },
        colCount: { control: 'number' },
        colGap: { control: 'text' },
        rowGap: { control: 'text' },
    },
    args: {
        colCount: 6,
    },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof Grid>;

const Box = ({ children }: { children: React.ReactNode }) => (
    <div
        className={sprinkles({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        })}
        style={{
            width: '100%',
            height: 48,
            backgroundColor: vars.colors.greenAlpha[200],
            borderRadius: vars.radius.md,
            color: vars.colors.green[600],
            fontWeight: vars.font.weight.semiBold,
            fontSize: vars.font.size.s14,
            lineHeight: vars.font.lineHeight.md,
            textAlign: 'center',
        }}
    >
        {children}
    </div>
);

export const Default: Story = {
    args: {
        children: (
            <>
                {[...Array(12)].map((_, index) => (
                    <Grid.Item key={index}>
                        <Box>Box {index + 1}</Box>
                    </Grid.Item>
                ))}
            </>
        ),
    },
};

export const Bento: Story = {
    args: {
        children: (
            <>
                <Grid.Item span={6}>
                    <Box>Span 6</Box>
                </Grid.Item>
                <Grid.Item span={4}>
                    <Box>Span 4</Box>
                </Grid.Item>
                <Grid.Item span={2}>
                    <Box>Span 2</Box>
                </Grid.Item>
                <Grid.Item span={3}>
                    <Box>Span 3</Box>
                </Grid.Item>
                <Grid.Item span={3}>
                    <Box>Span 3</Box>
                </Grid.Item>
            </>
        ),
    },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const __namedExportsOrder = ['Default', 'Bento'];
