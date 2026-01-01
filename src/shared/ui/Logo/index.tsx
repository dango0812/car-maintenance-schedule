import { memo } from 'react';
import { Link } from 'react-router-dom';

import Asset from '../Asset';
import { FlexBox } from '../FlexBox';
import { Typography } from '../Typography';

import * as styles from './logo.css';

import { paths } from '~/shared/constants/paths';

interface LogoProps {
    /** 클릭 시 이동 가능 여부 */
    enabledClick?: boolean;
    /** 클릭 시 이동할 경로 */
    path?: string;
    /** 인라인 스타일 객체 */
    style?: React.CSSProperties;
}

/**
 * Logo 컴포넌트 내부 요소
 */
const LogoComponent = () => {
    return (
        <FlexBox alignItems="center" justifyContent="center">
            <Asset.Icon name="logo" width={48} height={56} />
            <Typography className={styles.LogoTypographyStyle} as="span" variant="h6" fontWeight="bold" color="black">
                차쟁이
            </Typography>
        </FlexBox>
    );
};

/**
 * Logo 공용 컴포넌트
 *
 * @param enabledClick - 클릭 시 이동 가능 여부
 * @param path - 클릭 시 이동할 경로 (기본값: 홈 경로)
 * @param style - 인라인 스타일 객체
 *
 */

const Logo = ({ enabledClick = true, path = paths.home, ...rest }: LogoProps) => {
    if (enabledClick) {
        return (
            <Link to={path} {...rest}>
                <LogoComponent />
            </Link>
        );
    }

    return (
        <div {...rest}>
            <LogoComponent />
        </div>
    );
};

export default memo(Logo);
