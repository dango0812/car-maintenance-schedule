import { createElement } from 'react';
import clsx from 'clsx';

import {
    type TypographySprinkles,
    typographySprinkles,
    type TypographyVariant,
    variantStyle,
} from '~/shared/styles/base/typography.css';

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
    /** 렌더링할 HTML 태그 */
    as?: TypographyTag;
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
    /** 추가 스타일 클래스 */
    className?: string;
    /** 스타일 "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "caption" | "title" | "body" */
    variant?: TypographyVariant;
    /** 인라인 스타일 객체 */
    style?: React.CSSProperties;
}

/**
 * Typography 공용 컴포넌트
 *
 * @param as - 렌더링할 HTML 태그
 * @param children - 내부에 표시될 콘텐츠
 * @param className - 추가 스타일 클래스
 * @param variant - "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "caption" | "title" | "body"
 * @param color - 글자 색상
 * @param fontSize - 글자 크기
 * @param fontWeight - 글자 두께
 * @param lineHeight - 줄 간격
 * @param whiteSpace - 공백 처리 방식
 * @param style - 인라인 스타일 객체
 *
 */
export const Typography = ({
    as = 'p',
    children,
    className,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    whiteSpace,
    variant,
    style,
    ...rest
}: TypographyProps) => {
    const baseStyle = variant ? typographySprinkles({ ...variantStyle[variant] }) : '';
    const overrideStyle = typographySprinkles({ color, fontSize, fontWeight, lineHeight, whiteSpace });

    return createElement(
        as,
        {
            className: clsx(baseStyle, overrideStyle, className),
            style,
            ...rest,
        },
        children,
    );
};
