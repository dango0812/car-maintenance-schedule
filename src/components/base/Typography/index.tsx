import { createElement } from 'react';
import clsx from 'clsx';

import { sprinkles, type TypographySprinkles, type TypographyVariant, variants } from 'styles/base/typography.css';

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
    fontSize,
    fontWeight,
    lineHeight,
    whiteSpace,
    variant,
    ...rest
}: TypographyProps) => {
    return createElement(
        as,
        {
            className: clsx(
                variant && variants[variant],
                sprinkles({ fontSize, fontWeight, lineHeight, whiteSpace }),
                className,
            ),
            ...rest,
        },
        children,
    );
};
