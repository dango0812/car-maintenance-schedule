import React from 'react';
import clsx from 'clsx';
import { mapValues } from 'es-toolkit';

import { type GridSprinkles, gridSprinkles } from 'src/styles/base/grid.css';
import { sprinkles } from 'src/styles/sprinkles.css';

export interface GridProps {
    children: React.ReactNode;
    colGap?: string;
    rowGap?: string;
    colCount?: number;
}

type SpanValue = number | Record<string, number>;

interface GridItemProps extends Omit<GridSprinkles, 'span'> {
    children: React.ReactNode;
    className?: string;
    span: SpanValue;
}

const normalizeSpan = (value: SpanValue): GridSprinkles['span'] => {
    if (typeof value === 'number') {
        return `span ${value}` as GridSprinkles['span'];
    }

    return mapValues(value, (v) => `span ${v}`) as GridSprinkles['span'];
};

const GridItem = ({ children, className, span }: GridItemProps) => {
    return <div className={clsx(gridSprinkles({ span: normalizeSpan(span) }), className)}>{children}</div>;
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
