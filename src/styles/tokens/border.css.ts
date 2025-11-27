import { createGlobalThemeContract } from '@vanilla-extract/css';

export const border = {
    none: '0',
    sm: '0.7px solid',
    md: '1px solid',
    lg: '2px solid',
} as const;

export const borderContract = createGlobalThemeContract(border, (_, path) => {
    return `border-${path.join('-')}`;
});
