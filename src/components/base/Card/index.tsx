import { forwardRef } from 'react';
import clsx from 'clsx';

import { CardStyle, type CardVariants } from 'styles/base/card.css';
import { sprinkles } from 'styles/sprinkles.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    variant?: NonNullable<CardVariants>['variant'];
    color?: NonNullable<CardVariants>['color'];
    size?: NonNullable<CardVariants>['size'];
    shadow?: NonNullable<CardVariants>['shadow'];
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ children, className, variant = 'solid', color = 'white', size = 'md', shadow = 'md', ...rest }, ref) => (
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
