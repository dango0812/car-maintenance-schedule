import { globalStyle } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '../breakpoints.css';
import { fontContract } from '../tokens/font.css';
import { vars } from '../vars.css';

globalStyle('body', {
    color: vars.colors.black,
    fontFamily: fontContract.family,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    wordBreak: 'keep-all',
    overflowWrap: 'break-word',
    lineHeight: fontContract.lineHeight.md,
});

globalStyle('h1, h2, h3, h4, h5, h6, pre, del, ins, em, label, span, p', {
    marginBlock: 0,
    paddingBlock: 0,
});

const typographyProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: { '@media': `screen and (min-width: ${breakpoints.md})` },
        desktop: { '@media': `screen and (min-width: ${breakpoints.lg})` },
    },
    defaultCondition: 'mobile',
    properties: {
        color: {
            white: vars.colors.white,
            black: vars.colors.black,
            grey: vars.colors.grey[700],
            blue: vars.colors.blue[600],
            orange: vars.colors.orange[600],
            red: vars.colors.red[600],
            green: vars.colors.green[600],
        },
        fontSize: vars.font.size,
        fontWeight: vars.font.weight,
        lineHeight: vars.font.lineHeight,
        whiteSpace: ['normal', 'pre', 'pre-wrap', 'pre-line', 'nowrap'],
    },
});

export const typographySprinkles = createSprinkles(typographyProperties);
export type TypographySprinkles = Parameters<typeof typographySprinkles>[0];

export const variantStyle = {
    h1: {
        fontSize: 's48',
        fontWeight: 'bold',
        lineHeight: 'lg',
    },
    h2: {
        fontSize: 's44',
        fontWeight: 'bold',
        lineHeight: 'lg',
    },
    h3: {
        fontSize: 's40',
        fontWeight: 'bold',
        lineHeight: 'lg',
    },
    h4: {
        fontSize: 's36',
        fontWeight: 'bold',
        lineHeight: 'lg',
    },
    h5: {
        fontSize: 's30',
        fontWeight: 'bold',
        lineHeight: 'md',
    },
    h6: {
        fontSize: 's24',
        fontWeight: 'bold',
        lineHeight: 'md',
    },
    title: {
        fontSize: 's18',
        fontWeight: 'regular',
        lineHeight: 'md',
    },
    body: {
        fontSize: 's16',
        fontWeight: 'regular',
    },
    caption: {
        fontSize: 's14',
        fontWeight: 'regular',
    },
} as const;

export type TypographyVariant = keyof typeof variantStyle;
