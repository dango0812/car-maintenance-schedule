import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { border, borderContract } from './tokens/border.css';
import { colors, colorsContract } from './tokens/colors.css';
import { font, fontContract } from './tokens/font.css';
import { gap, gapContract } from './tokens/gap.css';
import { margin, marginContract } from './tokens/margin.css';
import { opacity, opacityContract } from './tokens/opacity.css';
import { padding, paddingContract } from './tokens/padding.css';
import { radius, radiusContract } from './tokens/radius.css';
import { shadow, shadowContract } from './tokens/shadow.css';
import { zIndex, zIndexContract } from './tokens/zIndex.css';

const themePalette = {
    colors,
    border,
    margin,
    padding,
    radius,
    opacity,
    shadow,
    font,
    gap,
    zIndex,
};

export const vars = createThemeContract({
    colors: colorsContract,
    border: borderContract,
    margin: marginContract,
    padding: paddingContract,
    radius: radiusContract,
    opacity: opacityContract,
    shadow: shadowContract,
    font: fontContract,
    gap: gapContract,
    zIndex: zIndexContract,
});

createGlobalTheme(':root', vars, themePalette);
