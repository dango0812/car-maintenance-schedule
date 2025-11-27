import { forwardRef } from 'react';
import clsx from 'clsx';

import { IconButtonStyle, type IconButtonVariants } from 'styles/base/iconButton.css';
import { sprinkles } from 'styles/sprinkles.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: NonNullable<IconButtonVariants>['variant'];
    color?: NonNullable<IconButtonVariants>['color'];
    size?: NonNullable<IconButtonVariants>['size'];
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ children, className, variant = 'solid', color = 'grey', size = 'md', ...rest }, ref) => (
        <button
            ref={ref}
            role="button"
            type="button"
            className={clsx(
                IconButtonStyle({ variant, color, size }),
                sprinkles({
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                }),
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    ),
);
