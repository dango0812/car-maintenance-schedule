import clsx from 'clsx';

import { containerStyle, type ContainerVariants } from 'src/styles/base/container.css';
import { sprinkles } from 'src/styles/sprinkles.css';

export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: NonNullable<ContainerVariants>['size'];
    fullWidth?: NonNullable<ContainerVariants>['fullWidth'];
}

export const Container = ({ children, className, size, fullWidth, ...rest }: ContainerProps) => {
    return (
        <div
            className={clsx(
                containerStyle({ size, fullWidth }),
                sprinkles({
                    display: 'flex',
                    flexDirection: 'row',
                }),
                className,
            )}
            {...rest}
        >
            {children}
        </div>
    );
};
