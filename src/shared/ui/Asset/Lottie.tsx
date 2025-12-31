import Lottie, { type LottieOptions } from 'lottie-react';

type LottieDataModule = {
    default: object;
};

const lottieAssets = import.meta.glob('/src/shared/assets/lotties/*.json', {
    eager: true,
}) as Record<string, LottieDataModule>;

interface LottieAssetProps extends Omit<LottieOptions, 'animationData'> {
    /** Lottie 파일명 (`/src/shared/assets/lotties/` 경로의 Lottie 파일을 로드합니다.) */
    name: string;
}

/**
 * Lottie 애니메이션을 렌더링하는 컴포넌트입니다.
 
 * @param name - 애니메이션 파일명 (`/src/shared/assets/lotties/` 경로 기준)
 * @param width - 가로 너비
 * @param height - 세로 높이
 * @param className - 추가 스타일 클래스
 * @param style - 인라인 스타일 객체
 * 
 * @description Lottie 옵션
 * https://lottiereact.com/components/Lottie#props
 */
export function LottieAsset({ name, width, height, className, style, ...rest }: LottieAssetProps) {
    const lottieModule = lottieAssets[`/src/shared/assets/lotties/${name}.json`];

    if (!lottieModule) {
        console.error(`Not Found Lottie JSON: ${name}`);
        return null;
    }

    const animationData = lottieModule.default;

    return (
        <Lottie
            {...rest}
            animationData={animationData}
            style={{
                width,
                height,
                ...style,
            }}
            className={className}
        />
    );
}
