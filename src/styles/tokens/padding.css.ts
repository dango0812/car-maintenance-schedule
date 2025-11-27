import { createGlobalThemeContract } from '@vanilla-extract/css';

export const padding = {
    p0: '0px',
    p4: '4px',
    p6: '6px',
    p8: '8px',
    p10: '10px',
    p12: '12px',
    p16: '16px',
    p20: '20px',
    p24: '24px',
    p26: '26px',
    p30: '30px',
    p40: '40px',
    p50: '50px',
    p60: '60px',
    p80: '80px',
    p120: '120px',
    p140: '140px',
} as const;

export const paddingContract = createGlobalThemeContract(padding, (_, path) => {
    return `padding-${path.join('-')}`;
});
