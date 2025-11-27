import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { border, borderContract } from 'styles/tokens/border.css';
import { colors, colorsContract } from 'styles/tokens/colors.css';
import { font, fontContract } from 'styles/tokens/font.css';
import { gap, gapContract } from 'styles/tokens/gap.css';
import { margin, marginContract } from 'styles/tokens/margin.css';
import { opacity, opacityContract } from 'styles/tokens/opacity.css';
import { padding, paddingContract } from 'styles/tokens/padding.css';
import { radius, radiusContract } from 'styles/tokens/radius.css';
import { shadow, shadowContract } from 'styles/tokens/shadow.css';
import { zIndex, zIndexContract } from 'styles/tokens/zIndex.css';
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
