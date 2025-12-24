import React from 'react';
import clsx from 'clsx';
import { mapValues } from 'es-toolkit';

import { type GridSprinkles, gridSprinkles } from '~/shared/styles/base/grid.css';
import { sprinkles } from '~/shared/styles/sprinkles.css';

export interface GridProps {
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
    /** 열 사이의 간격 */
    colGap?: string;
    /** 행 사이의 간격 */
    rowGap?: string;
    /** 생성할 열의 개수 (기본: 12) */
    colCount?: number;
}

type SpanValue = number | Record<string, number>;

interface GridItemProps extends Omit<GridSprinkles, 'span'> {
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
    /** 추가 스타일 클래스 */
    className?: string;
    /** 차지할 열의 개수 (단일 숫자 또는 반응형 객체) */
    span: SpanValue;
}

/**
 * 숫자 또는 반응형 객체 값을 CSS Grid span 문법으로 변환합니다.
 * (예: 4 -> 'span 4', { mobile: 12 } -> { mobile: 'span 12' })
 * @param value - 차지할 열의 개수 (단일 숫자 또는 반응형 객체)
 * @returns CSS Grid span 속성에 적용 가능한 문자열 또는 객체
 */
const normalizeSpan = (value: SpanValue): GridSprinkles['span'] => {
    if (typeof value === 'number') {
        return `span ${value}` as GridSprinkles['span'];
    }

    return mapValues(value, (v) => `span ${v}`) as GridSprinkles['span'];
};

/**
 * Grid 레이아웃 아이템
 *
 * @param children - 내부에 표시될 콘텐츠
 * @param className - 추가 스타일 클래스
 * @param span - 차지할 열의 개수 (단일 숫자 또는 반응형 객체)
 */
function GridItem({ children, className, span }: GridItemProps) {
    return <div className={clsx(gridSprinkles({ span: normalizeSpan(span) }), className)}>{children}</div>;
}

/**
 * Grid 컴포넌트
 *
 * @param children - 내부에 표시될 콘텐츠
 * @param colGap - 열 사이의 간격
 * @param rowGap - 행 사이의 간격
 * @param colCount - 생성할 열의 개수 (기본: 12)
 *
 * @example
 * <Grid colCount={12} colGap="20px">
 *      <Grid.Item span={6}>좌측 콘텐츠</Grid.Item>
 *      <Grid.Item span={6}>우측 콘텐츠</Grid.Item>
 * </Grid>
 */
export function Grid({ children, colGap = '12px', rowGap = '12px', colCount = 12 }: GridProps) {
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
}

Grid.Item = GridItem;
