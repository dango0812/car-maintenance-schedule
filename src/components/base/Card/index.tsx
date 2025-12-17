import { forwardRef } from 'react';
import clsx from 'clsx';

import { CardStyle, type CardVariants } from 'src/styles/base/card.css';
import { sprinkles } from 'src/styles/sprinkles.css';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: NonNullable<CardVariants>['variant'];
    color?: NonNullable<CardVariants>['color'];
    size?: NonNullable<CardVariants>['size'];
    shadow?: NonNullable<CardVariants>['shadow'];
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ children, className, variant, color, size, shadow, ...rest }, ref) => (
        <div
            ref={ref}
            className={clsx(
                CardStyle({ variant, color, size, shadow }),
                sprinkles({
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                }),
                className,
            )}
            {...rest}
        >
            {children}
        </div>
    ),
);
