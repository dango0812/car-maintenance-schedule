import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { breakpoints } from '../breakpoints.css';
import { vars } from '../vars.css';

export const ContainerStyle = recipe({
    base: {
        width: '100%',
        margin: `${vars.margin.m0} auto`,
        '@media': {
            [`screen and (max-width: ${breakpoints.lg})`]: {
                padding: `${vars.padding.p0} ${vars.padding.p20}`,
            },
        },
    },
    variants: {
        size: {
            sm: {
                maxWidth: breakpoints.sm,
            },
            md: {
                maxWidth: breakpoints.md,
            },
            lg: {
                maxWidth: breakpoints.lg,
            },
            xl: {
                maxWidth: breakpoints.xl,
            },
        },
        fullWidth: {
            true: {
                margin: 'inherit',
                maxWidth: 'none',
            },
            false: {},
        },
    },
    defaultVariants: {
        size: 'lg',
        fullWidth: false,
    },
});

export type ContainerVariants = RecipeVariants<typeof ContainerStyle>;
