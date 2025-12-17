import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from 'src/styles/breakpoints.css';

const responsiveProperties = defineProperties({
    conditions: {
        xs: {},
        sm: { '@media': `screen and (min-width: ${breakpoints.sm})` },
        md: { '@media': `screen and (min-width: ${breakpoints.md})` },
        lg: { '@media': `screen and (min-width: ${breakpoints.lg})` },
        xl: { '@media': `screen and (min-width: ${breakpoints.xl})` },
    },
    defaultCondition: 'xs',
    properties: {
        gridTemplateColumns: [
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
            'repeat(5, 1fr)',
            'repeat(6, 1fr)',
            'repeat(7, 1fr)',
            'repeat(8, 1fr)',
            'repeat(9, 1fr)',
            'repeat(10, 1fr)',
            'repeat(11, 1fr)',
            'repeat(12, 1fr)',
        ],
        gridColumn: [
            'span 1',
            'span 2',
            'span 3',
            'span 4',
            'span 5',
            'span 6',
            'span 7',
            'span 8',
            'span 9',
            'span 10',
            'span 11',
            'span 12',
        ],
    },
    shorthands: {
        colCount: ['gridTemplateColumns'],
        span: ['gridColumn'],
    },
});

export const gridSprinkles = createSprinkles(responsiveProperties);
export type GridSprinkles = Parameters<typeof gridSprinkles>[0];
