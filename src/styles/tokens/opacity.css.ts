import { createGlobalThemeContract } from '@vanilla-extract/css';

export const opacity = {
    op5: '0.05',
    op10: '0.1',
    op20: '0.2',
    op30: '0.3',
    op40: '0.4',
    op50: '0.5',
    op60: '0.6',
    op70: '0.7',
    op80: '0.8',
    op90: '0.9',
    op95: '0.95',
    op100: '1',
} as const;

export const opacityContract = createGlobalThemeContract(opacity, (_, path) => {
    return `opacity-${path.join('-')}`;
});
