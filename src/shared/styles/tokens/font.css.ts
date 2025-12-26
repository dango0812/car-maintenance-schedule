import { createGlobalThemeContract } from '@vanilla-extract/css';

export const font = {
    size: {
        s12: '0.75rem',
        s14: '0.875rem',
        s16: '1rem',
        s18: '1.125rem',
        s20: '1.25rem',
        s22: '1.375rem',
        s24: '1.5rem',
        s30: '1.875rem',
        s36: '2.25rem',
        s40: '2.5rem',
        s44: '2.75rem',
        s48: '3rem',
    },
    weight: {
        /**
         * thin = 100
         */
        thin: '100',
        // extraLight: '200',
        light: '300',
        regular: '400',
        medium: '500',
        // semiBold: '600',
        bold: '700',
    },
    letterSpacing: {
        sm: '-0.02em',
        md: '-0.01em',
        lg: '0em',
    },
    lineHeight: {
        sm: '118%',
        md: '126%',
        lg: '134%',
    },
} as const;

export const fontContract = createGlobalThemeContract(font, (_, path) => {
    return `font-${path.join('-')}`;
});
