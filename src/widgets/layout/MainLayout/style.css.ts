import { style } from '@vanilla-extract/css';

import { vars } from '~/shared/styles/vars.css';

export const RootStyle = style({
    backgroundColor: vars.colors.grey[50],
});

export const WrapperStyle = style({
    height: '100dvh',
    backgroundColor: vars.colors.white,
    boxShadow: vars.shadow.md,
});

export const ContentWrapperStyle = style({
    minHeight: 0,
    overflow: 'auto',
});
