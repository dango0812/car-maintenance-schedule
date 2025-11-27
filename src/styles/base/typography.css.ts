import { globalStyle } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from 'styles/breakpoints.css';
import { fontContract } from 'styles/tokens/font.css';
import { vars } from 'styles/vars.css';

globalStyle('body', {
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
        fontSize: vars.font.size,
        fontWeight: vars.font.weight,
        lineHeight: vars.font.lineHeight,
        whiteSpace: ['normal', 'pre', 'pre-wrap', 'pre-line', 'nowrap'],
    },
});

export const sprinkles = createSprinkles(typographyProperties);
export type TypographySprinkles = Parameters<typeof sprinkles>[0];

export const variants = {
    h1: sprinkles({
        fontSize: 's48',
        fontWeight: 'bold',
        lineHeight: 'lg',
    }),
    h2: sprinkles({
        fontSize: 's44',
        fontWeight: 'bold',
        lineHeight: 'lg',
    }),
    h3: sprinkles({
        fontSize: 's40',
        fontWeight: 'bold',
        lineHeight: 'lg',
    }),
    h4: sprinkles({
        fontSize: 's36',
        fontWeight: 'bold',
        lineHeight: 'lg',
    }),
    h5: sprinkles({
        fontSize: 's30',
        fontWeight: 'bold',
        lineHeight: 'md',
    }),
    h6: sprinkles({
        fontSize: 's24',
        fontWeight: 'bold',
        lineHeight: 'md',
    }),
    title: sprinkles({
        fontSize: 's20',
        fontWeight: 'regular',
        lineHeight: 'md',
    }),
    body: sprinkles({
        fontSize: 's16',
        fontWeight: 'regular',
    }),
    caption: sprinkles({
        fontSize: 's14',
        fontWeight: 'regular',
    }),
} as const;

export type TypographyVariant = keyof typeof variants;
