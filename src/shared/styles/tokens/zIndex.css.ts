import { createGlobalThemeContract } from '@vanilla-extract/css';

export const zIndex = {
    none: '0',
    z10: '10',
    z20: '20',
    z30: '30',
    z40: '40',
    z50: '50',
    z60: '60',
    z70: '70',
    z80: '80',
    z90: '90',
    z100: '100',
    modalOverlay: '1100',
    toast: '1200',
} as const;

export const zIndexContract = createGlobalThemeContract(zIndex, (_, path) => {
    return `zIndex-${path.join('-')}`;
});
