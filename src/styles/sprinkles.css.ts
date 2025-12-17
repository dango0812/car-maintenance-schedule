import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from './vars.css';

const layoutProperties = defineProperties({
    properties: {
        position: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
        display: ['none', 'flex', 'grid', 'block', 'inline', 'inline-block', 'inline-flex'],
        flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
        flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
        justifyContent: ['normal', 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
        alignItems: ['normal', 'stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
        alignContent: ['normal', 'stretch', 'flex-start', 'flex-end', 'center', 'space-between'],
        alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'stretch'],
        flex: ['none', 'auto', 'initial', '1'],
        flexBasis: ['auto', 'min-content', 'max-content', 'content', 'fit-content'],
        flexGrow: [0, 1],
        flexShrink: [0, 1],
        gap: vars.gap,
        cursor: ['default', 'pointer', 'wait', 'not-allowed'],
    },
});

export const sprinkles = createSprinkles(layoutProperties);

export type LayoutProperties = Parameters<typeof sprinkles>[0];
