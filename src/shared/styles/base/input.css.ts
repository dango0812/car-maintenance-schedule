import { globalStyle, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '../vars.css';

globalStyle('input[type=number]::-webkit-inner-spin-button', {
    WebkitAppearance: 'none',
    margin: vars.margin.m0,
});

globalStyle('input[type=number]::-webkit-outer-spin-button', {
    WebkitAppearance: 'none',
    margin: vars.margin.m0,
});

globalStyle('input[type=number]', {
    MozAppearance: 'textfield',
});

const INPUT_VARIANTS = ['outlined', 'solid'] as const;
const INPUT_COLORS = ['grey', 'blue', 'orange', 'red', 'green'] as const;

/**
 * variant x color 조합에 따른 컬러 토큰 계산
 */
const getTokens = (variant: (typeof INPUT_VARIANTS)[number], color: (typeof INPUT_COLORS)[number]) => {
    const borderBase = vars.colors[color][300];
    const borderHover = vars.colors[color][400];
    const alphaBg = vars.colors[`${color}Alpha`][200];
    return variant === 'outlined'
        ? {
              border: `${vars.border.md} ${borderBase}`,
              hoverBorder: borderHover,
              color: vars.colors[color][700],
              backgroundColor: 'transparent',
          }
        : {
              border: `${vars.border.md} ${borderBase}`,
              hoverBorder: borderHover,
              color: vars.colors[color][700],
              backgroundColor: alphaBg,
          };
};

export const ContainerStyle = recipe({
    base: {
        gap: vars.gap.g6,
    },
    variants: {
        fullWidth: {
            true: {
                width: '100%',
            },
            false: {},
        },
    },
});

export const LabelStyle = recipe({
    base: {
        fontWeight: vars.font.weight.medium,
        color: vars.colors.grey[700],
    },
    variants: {
        size: {
            sm: {
                fontSize: vars.font.size.s12,
            },
            md: {
                fontSize: vars.font.size.s14,
            },
            lg: {
                fontSize: vars.font.size.s16,
            },
        },
    },
});

export const RequiredMarkStyle = style({
    color: vars.colors.red[500],
    fontSize: vars.font.size.s16,
    margin: `${vars.margin.m0} ${vars.margin.m4}`,
    userSelect: 'none',
});

export const InputStyle = recipe({
    base: {
        width: '100%',
        fontFamily: 'inherit',
        transition: 'all 0.3s ease',
        outline: 'none',
        borderRadius: vars.radius.sm,
        '::placeholder': {
            color: vars.colors.grey[400],
        },
        ':disabled': {
            cursor: 'not-allowed',
            opacity: vars.opacity.op60,
        },
    },
    variants: {
        variant: {
            outlined: {
                backgroundColor: 'inherit',
            },
            solid: {},
        },
        color: {
            grey: {},
            blue: {},
            orange: {},
            red: {},
            green: {},
        },
        size: {
            sm: {
                height: '36px',
                fontSize: vars.font.size.s12,
            },
            md: {
                height: '40px',
                fontSize: vars.font.size.s14,
            },
            lg: {
                height: '44px',
                fontSize: vars.font.size.s16,
            },
        },
        fullWidth: {
            true: {
                width: '100%',
            },
            false: {
                width: 'auto',
            },
        },
        disabled: {
            true: {},
            false: {},
        },
        error: {
            true: {
                border: `${vars.border.md} ${vars.colors.red[500]} !important`,
            },
            false: {},
        },
        hasStartDecorator: {
            true: {
                paddingLeft: vars.padding.p30,
            },
            false: {
                paddingLeft: vars.padding.p12,
            },
        },
    },
    compoundVariants: [
        ...INPUT_COLORS.flatMap((color) =>
            INPUT_VARIANTS.map((variant) => {
                const token = getTokens(variant, color);
                return {
                    variants: { color, variant },
                    style: {
                        color: token.color,
                        border: token.border,
                        backgroundColor: token.backgroundColor,
                        selectors: {
                            '&:hover': { borderColor: token.hoverBorder },
                            '&:active': { borderColor: token.hoverBorder },
                            '&:focus': { borderColor: token.hoverBorder },
                        },
                    },
                };
            }),
        ),
        {
            variants: {
                variant: 'solid',
                error: true,
            },
            style: {
                backgroundColor: vars.colors.redAlpha[100],
            },
        },
    ],
    defaultVariants: {
        variant: 'outlined',
        color: 'grey',
        size: 'md',
        fullWidth: false,
        disabled: false,
        error: false,
        hasStartDecorator: false,
    },
});

export const StartDecoratorStyle = recipe({
    base: {
        width: '20px',
        height: '20px',
        top: '50%',
        left: '8px',
        transform: 'translateY(-50%)',
        color: vars.colors.grey[600],
    },
    variants: {
        disabled: {
            true: {
                opacity: vars.opacity.op60,
                cursor: 'not-allowed',
            },
            false: {
                opacity: vars.opacity.op100,
                cursor: 'default',
            },
        },
    },
});

export const HelperTextStyle = recipe({
    base: {
        fontSize: vars.font.size.s12,
        margin: vars.margin.m0,
        transition: 'color 0.2s ease',
        padding: `${vars.padding.p0} ${vars.padding.p4}`,
    },
    variants: {
        error: {
            true: {
                color: vars.colors.red[500],
            },
            false: {
                color: vars.colors.grey[600],
            },
        },
        disabled: {
            true: {
                opacity: vars.opacity.op60,
                cursor: 'not-allowed',
            },
            false: {
                opacity: 1,
                cursor: 'default',
            },
        },
    },
});

export type InputVariants = RecipeVariants<typeof InputStyle>;
