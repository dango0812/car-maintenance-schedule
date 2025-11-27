import { createGlobalThemeContract } from '@vanilla-extract/css';

export const margin = {
    m0: '0px',
    m4: '4px',
    m6: '6px',
    m8: '8px',
    m10: '10px',
    m12: '12px',
    m16: '16px',
    m20: '20px',
    m24: '24px',
    m26: '26px',
    m30: '30px',
    m40: '40px',
    m50: '50px',
    m60: '60px',
    m80: '80px',
    m120: '120px',
    m140: '140px',
} as const;

export const marginContract = createGlobalThemeContract(margin, (_, path) => {
    return `margin-${path.join('-')}`;
});
