import { createGlobalThemeContract } from '@vanilla-extract/css';

export const radius = {
    none: '0px',
    xs: '6px',
    sm: '10px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '30px',
    full: '9999px',
} as const;

export const radiusContract = createGlobalThemeContract(radius, (_, path) => {
    return `radius-${path.join('-')}`;
});
