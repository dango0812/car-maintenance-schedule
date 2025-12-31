import { style } from '@vanilla-extract/css';

import { vars } from '~/shared/styles/vars.css';
import bgImage from '~/shared/assets/background/overlay-1.webp';

export const RootStyle = style({
    position: 'relative',
    height: '100dvh',
    overflow: 'hidden',

    selectors: {
        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,

            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',

            opacity: vars.opacity.op10,
        },
    },
});

export const WrapperStyle = style({
    width: '100%',
    maxWidth: '420px',
    margin: 'auto',
    padding: vars.padding.p20,
});
