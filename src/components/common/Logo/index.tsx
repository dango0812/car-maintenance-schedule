import { memo } from 'react';
import { Link } from 'react-router-dom';

import LogoIcon from 'src/assets/icons/logo.svg?react';
import { FlexBox, Typography } from 'src/components/base';
import { paths } from 'src/routes/paths';

import * as styles from 'src/styles/common/logo.css';

interface LogoProps {
    enabledClick?: boolean;
    path?: string;
}

const Logo = ({ enabledClick = true, path = paths.home, ...rest }: LogoProps) => {
    if (enabledClick) {
        return (
            <Link className={styles.LinkStyle} to={path} {...rest}>
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

function LogoComponent() {
    return (
        <FlexBox alignItems="center" justifyContent="center">
            <LogoIcon width={48} height={56} />
            <Typography className={styles.LogoTypographyStyle} as="span" variant="h6" fontWeight="bold" color="black">
                차쟁이
            </Typography>
        </FlexBox>
    );
}

export default memo(Logo);
