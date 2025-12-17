import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from 'src/styles/vars.css';

const CARD_VARIANTS = ['solid', 'soft', 'outlined'] as const;
const CARD_COLORS = ['white', 'grey', 'blue', 'orange', 'red', 'green'] as const;

const getColorTokens = (color: (typeof CARD_COLORS)[number], variant: (typeof CARD_VARIANTS)[number]) => {
    if (variant === 'outlined') {
        return {
            border: color === 'white' ? vars.colors.grey[200] : vars.colors[color][100],
        };
    }

    if (variant === 'soft') {
        return {
            border: color === 'white' ? vars.colors.grey[200] : vars.colors[color][100],
            background: color === 'white' ? vars.colors.white : vars.colors[`${color}Alpha`][50],
        };
    }

    // solid
    return {
        background: color === 'white' ? vars.colors.white : vars.colors[color][100],
    };
};

export const CardStyle = recipe({
    base: {
        border: 'none',
        outline: 'none',
    },
    variants: {
        variant: {
            outlined: {
                backgroundColor: 'inherit !important',
            },
            solid: {
                backgroundColor: 'inherit',
            },
            soft: {
                backgroundColor: 'inherit',
            },
        },
        color: {
            white: {
                backgroundColor: vars.colors.white,
            },
            grey: {
                backgroundColor: vars.colors.grey[100],
            },
            blue: {
                backgroundColor: vars.colors.blue[100],
            },
            orange: {
                backgroundColor: vars.colors.orange[100],
            },
            red: {
                backgroundColor: vars.colors.red[100],
            },
            green: {
                backgroundColor: vars.colors.green[100],
            },
        },
        size: {
            sm: {
                padding: vars.padding.p16,
                borderRadius: vars.radius.md,
            },
            md: {
                padding: vars.padding.p20,
                borderRadius: vars.radius.lg,
            },
            lg: {
                padding: vars.padding.p24,
                borderRadius: vars.radius.xl,
            },
        },
        shadow: {
            sm: {
                boxShadow: vars.shadow.sm,
            },
            md: {
                boxShadow: vars.shadow.md,
            },
            lg: {
                boxShadow: vars.shadow.lg,
            },
        },
    },
    compoundVariants: [
        ...CARD_COLORS.flatMap((color) =>
            CARD_VARIANTS.map((variant) => {
                const tokens = getColorTokens(color, variant);

                if (variant === 'outlined') {
                    return {
                        variants: { color, variant },
                        style: {
                            border: `1px solid ${tokens.border}`,
                        },
                    };
                }

                if (variant === 'soft') {
                    return {
                        variants: { color, variant },
                        style: {
                            border: `1px solid ${tokens.border}`,
                            backgroundColor: tokens.background,
                        },
                    };
                }

                return {
                    variants: { color, variant },
                    style: {
                        backgroundColor: tokens.background,
                    },
                };
            }),
        ),
    ],
    defaultVariants: {
        variant: 'solid',
        color: 'grey',
        size: 'md',
        shadow: 'md',
    },
});

export type CardVariants = RecipeVariants<typeof CardStyle>;
