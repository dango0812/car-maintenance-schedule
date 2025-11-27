import { createVar, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from 'styles/vars.css';

export const TextVisibleVar = createVar();

const BUTTON_VARIANTS = ['solid', 'soft'] as const;
const BUTTON_COLORS = ['black', 'grey', 'blue', 'orange', 'red', 'green'] as const;

const getColorTokens = (color: (typeof BUTTON_COLORS)[number], variant: (typeof BUTTON_VARIANTS)[number]) => {
    if (variant === 'solid') {
        return {
            base: color === 'black' ? vars.colors.black : vars.colors[color][500],
            hover: color === 'black' ? vars.colors.blackAlpha[800] : vars.colors[color][600],
        };
    }
    return {
        base: color === 'black' ? vars.colors.blackAlpha[800] : vars.colors[color][100],
        hover: color === 'black' ? vars.colors.black : vars.colors[color][200],
    };
};

export const ButtonStyle = recipe({
    base: {
        border: 'none',
        outline: 'none',
        userSelect: 'none',
        borderRadius: vars.radius.sm,
        transition: 'all 300ms ease-in-out',
    },
    variants: {
        variant: {
            solid: {
                color: vars.colors.white,
                ':disabled': {
                    color: vars.colors.grey[400],
                    backgroundColor: vars.colors.greyAlpha[300],
                },
            },
            soft: {
                ':disabled': {
                    color: vars.colors.grey[400],
                    backgroundColor: vars.colors.greyAlpha[300],
                },
            },
        },
        color: {
            black: {
                color: vars.colors.white,
            },
            grey: {
                color: vars.colors.grey[600],
            },
            blue: {
                color: vars.colors.blue[600],
            },
            orange: {
                color: vars.colors.orange[600],
            },
            red: {
                color: vars.colors.red[600],
            },
            green: {
                color: vars.colors.green[600],
            },
        },
        size: {
            sm: {
                height: '40px',
                fontSize: vars.font.size.s12,
                padding: `${vars.padding.p6} ${vars.padding.p12}`,
            },
            md: {
                height: '48px',
                fontSize: vars.font.size.s14,
                padding: `${vars.padding.p10} ${vars.padding.p16}`,
            },
            lg: {
                height: '56px',
                fontSize: vars.font.size.s16,
                padding: `${vars.padding.p8} ${vars.padding.p20}`,
            },
        },
        fullWidth: {
            true: {
                width: '100%',
            },
            false: {},
        },
        loading: {
            true: {
                opacity: vars.opacity.op80,
            },
            false: {},
        },
    },
    compoundVariants: [
        ...BUTTON_COLORS.flatMap((color) =>
            BUTTON_VARIANTS.map((variant) => {
                const { base, hover } = getColorTokens(color, variant);
                return {
                    variants: { color, variant },
                    style: {
                        ...(variant === 'solid' ? { color: vars.colors.white } : {}),
                        backgroundColor: base,
                        selectors: {
                            '&:not(:disabled):not([aria-disabled="true"]):hover': {
                                backgroundColor: hover,
                            },
                            '&:not(:disabled):not([aria-disabled="true"]):active': {
                                backgroundColor: hover,
                            },
                        },
                    },
                };
            }),
        ),
    ],
    defaultVariants: {
        size: 'md',
        color: 'black',
        variant: 'solid',
        fullWidth: false,
    },
});

export const ButtonTextStyle = style({
    gap: vars.gap.g8,
    fontSize: 'inherit',
    fontWeight: vars.font.weight.semiBold,
    lineHeight: vars.font.lineHeight.md,
    letterSpacing: vars.font.letterSpacing.md,
    visibility: TextVisibleVar,
});

export type ButtonVariants = RecipeVariants<typeof ButtonStyle>;
