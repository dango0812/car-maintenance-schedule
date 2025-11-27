import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from 'styles/vars.css';

const ICON_BUTTON_VARIANTS = ['solid', 'soft', 'outlined'] as const;
const ICON_BUTTON_COLORS = ['grey', 'blue', 'orange', 'red', 'green'] as const;

const getColorTokens = (color: (typeof ICON_BUTTON_COLORS)[number], variant: (typeof ICON_BUTTON_VARIANTS)[number]) => {
    if (variant === 'solid') {
        return {
            base: vars.colors[`${color}Alpha`][200],
            hover: vars.colors[color][100],
        };
    }

    if (variant === 'outlined') {
        return {
            border: vars.colors[color][300],
            hover: vars.colors[color][100],
        };
    }

    return {
        hover: vars.colors[color][100],
    };
};

export const IconButtonStyle = recipe({
    base: {
        border: 'none',
        outline: 'none',
        userSelect: 'none',
        borderRadius: vars.radius.md,
        transition: 'all 300ms ease-in-out',
        ':disabled': {
            color: vars.colors.grey[400],
            backgroundColor: vars.colors.greyAlpha[300],
            border: vars.border.none,
            cursor: 'not-allowed',
        },
    },
    variants: {
        variant: {
            solid: {},
            soft: {
                backgroundColor: 'transparent',
            },
            outlined: {
                backgroundColor: 'transparent',
            },
        },
        color: {
            grey: {
                color: vars.colors.grey[500],
            },
            blue: {
                color: vars.colors.blue[500],
            },
            orange: {
                color: vars.colors.orange[500],
            },
            red: {
                color: vars.colors.red[500],
            },
            green: {
                color: vars.colors.green[500],
            },
        },
        size: {
            sm: {
                width: '32px',
                height: '32px',
                padding: vars.padding.p4,
            },
            md: {
                width: '40px',
                height: '40px',
                padding: vars.padding.p6,
            },
            lg: {
                width: '48px',
                height: '48px',
                padding: vars.padding.p8,
            },
        },
    },
    compoundVariants: [
        ...ICON_BUTTON_COLORS.flatMap((color) =>
            ICON_BUTTON_VARIANTS.map((variant) => {
                const tokens = getColorTokens(color, variant);

                if (variant === 'outlined') {
                    return {
                        variants: { color, variant },
                        style: {
                            border: `1px solid ${tokens.border}`,
                            selectors: {
                                '&:not(:disabled):hover': {
                                    backgroundColor: tokens.hover,
                                    borderColor: tokens.hover,
                                },
                                '&:not(:disabled):active': {
                                    backgroundColor: tokens.hover,
                                    borderColor: tokens.hover,
                                },
                            },
                        },
                    };
                }

                if (variant === 'soft') {
                    return {
                        variants: { color, variant },
                        style: {
                            selectors: {
                                '&:not(:disabled):hover': {
                                    backgroundColor: tokens.hover,
                                },
                                '&:not(:disabled):active': {
                                    backgroundColor: tokens.hover,
                                },
                            },
                        },
                    };
                }

                return {
                    variants: { color, variant },
                    style: {
                        backgroundColor: tokens.base,
                        selectors: {
                            '&:not(:disabled):hover': {
                                backgroundColor: tokens.hover,
                            },
                            '&:not(:disabled):active': {
                                backgroundColor: tokens.hover,
                            },
                        },
                    },
                };
            }),
        ),
    ],
    defaultVariants: {
        variant: 'solid',
        color: 'grey',
        size: 'md',
    },
});

export type IconButtonVariants = RecipeVariants<typeof IconButtonStyle>;
