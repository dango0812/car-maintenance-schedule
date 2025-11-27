import { forwardRef } from 'react';
import clsx from 'clsx';

import { sprinkles } from 'styles/sprinkles.css';

interface FlexBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
    direction?: Parameters<typeof sprinkles>[0]['flexDirection'];
    justifyContent?: Parameters<typeof sprinkles>[0]['justifyContent'];
    alignItems?: Parameters<typeof sprinkles>[0]['alignItems'];
    wrap?: Parameters<typeof sprinkles>[0]['flexWrap'];
    flex?: Parameters<typeof sprinkles>[0]['flex'];
    flexGrow?: Parameters<typeof sprinkles>[0]['flexGrow'];
    flexShrink?: Parameters<typeof sprinkles>[0]['flexShrink'];
    flexBasis?: Parameters<typeof sprinkles>[0]['flexBasis'];
    width?: string;
    height?: string;
}

export const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>(
    (
        {
            className,
            children,
            direction = 'row',
            justifyContent = 'normal',
            alignItems = 'normal',
            wrap,
            flex,
            flexGrow,
            flexShrink,
            flexBasis,
            width,
            height,
            ...rest
        },
        ref,
    ) => {
        return (
            <div
                ref={ref}
                className={clsx(
                    sprinkles({
                        display: 'flex',
                        flexDirection: direction,
                        justifyContent: justifyContent,
                        alignItems: alignItems,
                        flexWrap: wrap,
                        flex,
                        flexGrow,
                        flexShrink,
                        flexBasis,
                    }),
                    className,
                )}
                style={{
                    width,
                    height,
                }}
                {...rest}
            >
                {children}
            </div>
        );
    },
);
