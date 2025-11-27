import { createGlobalThemeContract } from '@vanilla-extract/css';

import { colors } from 'styles/tokens/colors.css';

export const shadow = {
    sm: `0 0 4px 0 ${colors.greenAlpha[100]}, 0 4px 16px 0 ${colors.greenAlpha[100]}`,
    md: `0 8px 16px 0 ${colors.greyAlpha[200]}, 0 4px 8px 0 ${colors.greyAlpha[100]}`,
    lg: `0 24px 40px 0 ${colors.greyAlpha[50]}, 0 16px 24px 0 ${colors.greyAlpha[200]}, 0 0 8px 0 ${colors.greyAlpha[100]}`,
} as const;

export const shadowContract = createGlobalThemeContract(shadow, (_, path) => {
    return `shadow-${path.join('-')}`;
});
