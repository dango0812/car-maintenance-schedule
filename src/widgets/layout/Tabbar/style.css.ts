import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '~/shared/styles/vars.css';

export const TabbarStyle = style({
    width: '100%',
    height: '80px',
    maxHeight: '80px',
    borderTop: vars.border.md,
    borderColor: vars.colors.grey[200],
    padding: `${vars.padding.p4} ${vars.padding.p0} ${vars.padding.p8}`,
});

export const TabbarActionStyle = recipe({
    base: {
        flex: 1,
        padding: `${vars.padding.p6} ${vars.padding.p10}`,
        margin: vars.margin.m0,
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        transition: 'all 200ms ease-in-out',
        selectors: {
            '&:hover': {
                color: vars.colors.blue[700],
                fontWeight: vars.font.weight.bold,
            },
            '&:active': {
                color: vars.colors.blue[700],
                fontWeight: vars.font.weight.bold,
            },
        },
    },
    variants: {
        active: {
            true: {
                color: vars.colors.blue[700],
                fontWeight: vars.font.weight.bold,
            },
            false: {},
        },
    },
    defaultVariants: {
        active: false,
    },
});
