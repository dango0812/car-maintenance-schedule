import { createElement } from 'react';
import clsx from 'clsx';

import {
    type TypographySprinkles,
    typographySprinkles,
    type TypographyVariant,
    variantStyle,
} from 'src/styles/base/typography.css';

export type TypographyTag =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'pre'
    | 'del'
    | 'ins'
    | 'em'
    | 'label'
    | 'span'
    | 'p';

export interface TypographyProps extends TypographySprinkles {
    as?: TypographyTag;
    children: React.ReactNode;
    className?: string;
    variant?: TypographyVariant;
}
export const Typography = ({
    as = 'p',
    children,
    className,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    whiteSpace,
    variant,
    ...rest
}: TypographyProps) => {
    const baseStyle = variant ? typographySprinkles({ ...variantStyle[variant] }) : '';
    const overrideStyle = typographySprinkles({ color, fontSize, fontWeight, lineHeight, whiteSpace });

    return createElement(
        as,
        {
            className: clsx(baseStyle, overrideStyle, className),
            ...rest,
        },
        children,
    );
};
