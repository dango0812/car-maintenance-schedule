import { createGlobalThemeContract } from '@vanilla-extract/css';

export const gap = {
    g0: '0px',
    g4: '4px',
    g6: '6px',
    g8: '8px',
    g10: '10px',
    g12: '12px',
    g16: '16px',
    g20: '20px',
    g24: '24px',
    g26: '26px',
    g30: '30px',
    g40: '40px',
    g50: '50px',
    g60: '60px',
} as const;

export const gapContract = createGlobalThemeContract(gap, (_, path) => {
    return `gap-${path.join('-')}`;
});
