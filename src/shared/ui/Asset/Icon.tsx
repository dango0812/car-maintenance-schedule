import { type AssetProps } from './types';

type SvgModule = {
    default: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const iconAssets = import.meta.glob('/src/shared/assets/icons/*.svg', {
    query: '?react',
    eager: true,
}) as Record<string, SvgModule>;

interface IconProps extends AssetProps {
    /** 아이콘 파일명 (`/src/shared/assets/icons/` 경로의 아이콘을 로드합니다.) */
    name: string;
    /** 아이콘 색상 (기본 값 : currentColor) */
    color?: string;
}

/**
 * SVG 아이콘을 렌더링하는 컴포넌트입니다.
 *
 * @param name - 아이콘 파일명 (`/src/assets/icons/` 경로 기준)
 * @param color - 아이콘 색상 (기본: `currentColor`)
 * @param width - 가로 너비
 * @param height - 세로 높이
 * @param className - 추가 스타일 클래스
 * @param style - 인라인 스타일 객체
 */
export function Icon({ name, color, width, height, className, style, ...rest }: IconProps) {
    const iconModule = iconAssets[`/src/shared/assets/icons/${name}.svg`];

    if (!iconModule) {
        console.error(`Not Found Icon: ${name}`);
        return null;
    }

    const SvgIcon = iconModule.default;
    return (
        <SvgIcon
            width={width}
            height={height}
            color={color || 'currentColor'}
            className={className}
            style={style}
            {...rest}
        />
    );
}
