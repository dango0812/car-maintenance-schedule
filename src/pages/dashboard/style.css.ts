import { style } from '@vanilla-extract/css';

import { vars } from '~/shared/styles/vars.css';

export const RootLayoutStyle = style({
    backgroundColor: vars.colors.whiteAlpha[500],
});

export const RootContainerStyle = style({
    backgroundColor: vars.colors.blueAlpha[100],
    padding: `${vars.padding.p0} ${vars.padding.p20}`,
});

export const HeaderStyle = style({
    height: '60px',
});
