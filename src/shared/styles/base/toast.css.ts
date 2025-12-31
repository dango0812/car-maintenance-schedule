import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '~/shared/styles/vars.css';

export const ToastWrapperStyle = style({
    position: 'fixed',
    top: 20,
    left: 0,
    right: 0,
    zIndex: vars.zIndex.toast,
    gap: vars.gap.g10,
    width: '100%',
    minWidth: '375px',
    maxWidth: '375px',
    margin: 'auto',
    padding: `${vars.padding.p0} ${vars.padding.p20}`,
});

export const ToastItemStyle = recipe({
    base: {
        width: '100%',
        padding: vars.padding.p20,
        borderRadius: vars.radius.md,
        color: vars.colors.white,
        boxShadow: vars.shadow.md,
        fontWeight: vars.font.weight.medium,
        whiteSpace: 'pre-wrap',
        lineHeight: vars.font.lineHeight.md,
    },
    variants: {
        type: {
            success: {
                backgroundColor: vars.colors.green[300],
            },
            error: {
                backgroundColor: vars.colors.red[300],
            },
            info: {
                backgroundColor: vars.colors.blue[300],
            },
        },
    },
    defaultVariants: {
        type: 'info',
    },
});

export type ToastVariants = RecipeVariants<typeof ToastItemStyle>;
