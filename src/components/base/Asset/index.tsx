import Lottie, { LottieProps } from 'lottie-react';

export interface AssetProps {
    className?: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
}

/* --------------------------------------------------- */

type SvgModule = { default: React.ComponentType<React.SVGProps<SVGSVGElement>> };
const iconAssets = import.meta.glob('/src/assets/icons/*.svg', {
    query: '?react',
    eager: true,
}) as Record<string, SvgModule>;

export interface IconProps extends AssetProps {
    /**
     * Icon 파일명 (예: 'warning')
     * 경로 : /src/assets/icons/*
     */
    name: string;
    /**
     * vars colors
     */
    color?: string;
}

const Icon = ({ name, color, width, height, className, style, ...rest }: IconProps) => {
    const iconPath = `/src/assets/icons/${name}.svg`;
    const iconModule = iconAssets[iconPath];

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
};

/* --------------------------------------------------- */

type ImageModule = { default: string };
const imageAssets = import.meta.glob('/src/assets/images/*.{webp,png,jpg,jpeg}', {
    eager: true,
}) as Record<string, ImageModule>;

export interface ImageProps extends AssetProps {
    /**
     * Image 파일명 (예: 'profile.png')
     * 경로 : /src/assets/images/*
     */
    name: string;
    alt?: string;
}

const Image = ({ name, alt, width, height, className, style, ...rest }: ImageProps) => {
    const imagePath = `/src/assets/images/${name}`;
    const imageModule = imageAssets[imagePath];

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
};

/* --------------------------------------------------- */

type LottieDataModule = { default: object };
const lottieAssets = import.meta.glob('/src/assets/lotties/*.json', {
    eager: true,
}) as Record<string, LottieDataModule>;

export interface LottieAssetProps extends AssetProps, LottieProps {
    /**
     * Lottie JSON 파일명 (예: 'loading.json')
     */
    name: string;
}

const LottieAsset = ({ name, width, height, className, style, ...rest }: LottieAssetProps) => {
    const lottiePath = `/src/assets/lotties/${name}.json`;
    const lottieModule = lottieAssets[lottiePath];

    if (!lottieModule) {
        console.error(`Not Found Lottie JSON: ${name}`);
        return null;
    }

    const animationData = lottieModule.default;

    return (
        <Lottie
            animationData={animationData}
            width={width}
            height={height}
            style={style}
            className={className}
            {...rest}
        />
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const Asset = { Icon, Image, Lottie: LottieAsset };
export default Asset;
