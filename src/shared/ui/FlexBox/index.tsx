import clsx from 'clsx';

import { sprinkles } from '~/shared/styles/sprinkles.css';

export interface FlexBoxProps {
    /** 추가 스타일 클래스 */
    className?: string;
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
    /** 주축 방향 'row', 'column', 'row-reverse', 'column-reverse' */
    direction?: Parameters<typeof sprinkles>[0]['flexDirection'];
    /** 주축 정렬 방식 'normal', 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly' */
    justifyContent?: Parameters<typeof sprinkles>[0]['justifyContent'];
    /** 교차축 정렬 방식 'normal', 'stretch', 'flex-start', 'flex-end', 'center', 'baseline' */
    alignItems?: Parameters<typeof sprinkles>[0]['alignItems'];
    /** 줄 바꿈 여부 'nowrap', 'wrap', 'wrap-reverse' */
    wrap?: Parameters<typeof sprinkles>[0]['flexWrap'];
    /** flex 속성 'none', 'auto', 'initial', '1' */
    flex?: Parameters<typeof sprinkles>[0]['flex'];
    /** 남는 공간을 얼마나 차지할지 0 or 1*/
    flexGrow?: Parameters<typeof sprinkles>[0]['flexGrow'];
    /** 공간이 부족할 때 얼마나 줄어들지 0 or 1 */
    flexShrink?: Parameters<typeof sprinkles>[0]['flexShrink'];
    /** 기본 크기 설정 'auto', 'min-content', 'max-content', 'content', 'fit-content' */
    flexBasis?: Parameters<typeof sprinkles>[0]['flexBasis'];
    /** 아이템 사이의 간격 */
    gap?: Parameters<typeof sprinkles>[0]['gap'];
    /** 가로 너비 */
    width?: string;
    /** 세로 높이 */
    height?: string;
    /** 인라인 스타일 객체 */
    style?: React.CSSProperties;
}

/**
 * FlexBox 컴포넌트
 *
 * @param children - 내부에 표시될 콘텐츠
 * @param className - 추가 스타일 클래스
 * @param direction - 'row' | 'column' | 'row-reverse' | 'column-reverse'
 * @param justifyContent - 'normal' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
 * @param alignItems - 'normal' | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
 * @param wrap - 'nowrap' | 'wrap' | 'wrap-reverse'
 * @param flex - 'none' | 'auto' | 'initial' | '1'
 * @param flexGrow - 0 | 1
 * @param flexShrink - 0 | 1
 * @param flexBasis - 'auto' | 'min-content' | 'max-content' | 'content' | 'fit-content'
 * @param gap - 아이템 사이의 간격
 * @param width - 가로 너비
 * @param height - 세로 높이
 * @param style - 인라인 스타일 객체
 *
 */
export function FlexBox({
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
    gap,
    width,
    height,
    style,
}: FlexBoxProps) {
    return (
        <div
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
                    gap,
                }),
                className,
            )}
            style={{
                width,
                height,
                ...style,
            }}
        >
            {children}
        </div>
    );
}
