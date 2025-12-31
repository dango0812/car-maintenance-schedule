import { style } from '@vanilla-extract/css';

import { vars } from '~/shared/styles/vars.css';

export const Divider = style({
    margin: `${vars.margin.m0} ${vars.margin.m4}`,
    color: vars.colors.grey[700],
    fontWeight: vars.font.weight.light,
    selectors: {
        '&::before': {
            content: '"l"',
        },
    },
});
