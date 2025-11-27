import React from 'react';
import { FlexBox } from 'components/base/FlexBox';

import { sprinkles } from 'styles/sprinkles.css';

interface GridProps {
    children: React.ReactNode;
    colGap?: string;
    rowGap?: string;
    colCount?: number;
}

interface GridItemProps {
    children: React.ReactNode;
    span?: number;
}

const GridItem = ({ children, span = 1 }: GridItemProps) => {
    return (
        <FlexBox
            justifyContent="center"
            alignItems="center"
            style={{
                gridColumn: `span ${span}`,
            }}
        >
            {children}
        </FlexBox>
    );
};

export const Grid = ({ children, colGap = '12px', rowGap = '12px', colCount = 12 }: GridProps) => {
    return (
        <div
            className={sprinkles({ display: 'grid' })}
            style={{
                gridTemplateColumns: `repeat(${colCount}, 1fr)`,
                width: '100%',
                rowGap: rowGap,
                columnGap: colGap,
            }}
        >
            {children}
        </div>
    );
};

Grid.Item = GridItem;
