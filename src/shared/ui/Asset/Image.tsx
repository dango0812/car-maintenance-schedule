import { type AssetProps } from './types';

type ImageModule = {
    default: string;
};

const imageAssets = import.meta.glob('/src/shared/assets/images/*.{webp,png,jpg,jpeg}', {
    eager: true,
}) as Record<string, ImageModule>;

export interface ImageProps extends AssetProps {
    /** 이미지 파일명 (`/src/shared/assets/images/` 경로의 이미지를 로드합니다.) */
    name: string;
    /** 이미지 설명 */
    alt?: string;
}

/**
 * 이미지를 렌더링하는 컴포넌트입니다.
 *
 * @param name - 이미지 파일명 (`/src/shared/assets/images/` 경로 기준)
 * @param alt - 이미지 설명
 * @param width - 가로 너비
 * @param height - 세로 높이
 * @param className - 추가 스타일 클래스
 * @param style - 인라인 스타일 객체
 */
export function Image({ name, alt, width, height, className, style, ...rest }: ImageProps) {
    const imageModule = imageAssets[`/src/shared/assets/images/${name}`];

    if (!imageModule) {
        console.error(`Not Found Image: ${name}`);
        return null;
    }

    const imgSrc = imageModule.default;
    return (
        <img
            src={imgSrc}
            alt={alt || name}
            width={width}
            height={height}
            loading="lazy"
            className={className}
            style={style}
            {...rest}
        />
    );
}
