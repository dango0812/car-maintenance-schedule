import { style } from '@vanilla-extract/css';

import { vars } from 'styles/vars.css';

export const OverlayStyle = style({
    position: 'fixed',
    inset: 0,
    backgroundColor: vars.colors.blackAlpha[400],
    backdropFilter: 'blur(4px)',
    zIndex: vars.zIndex.modalOverlay,
});

export const ModalStyle = style({
    backgroundColor: vars.colors.white,
    padding: vars.padding.p20,
    borderRadius: vars.radius.lg,
    boxShadow: vars.shadow.lg,
});
