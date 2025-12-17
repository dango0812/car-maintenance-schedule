import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { border, borderContract } from 'src/styles/tokens/border.css';
import { colors, colorsContract } from 'src/styles/tokens/colors.css';
import { font, fontContract } from 'src/styles/tokens/font.css';
import { gap, gapContract } from 'src/styles/tokens/gap.css';
import { margin, marginContract } from 'src/styles/tokens/margin.css';
import { opacity, opacityContract } from 'src/styles/tokens/opacity.css';
import { padding, paddingContract } from 'src/styles/tokens/padding.css';
import { radius, radiusContract } from 'src/styles/tokens/radius.css';
import { shadow, shadowContract } from 'src/styles/tokens/shadow.css';
import { zIndex, zIndexContract } from 'src/styles/tokens/zIndex.css';
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
