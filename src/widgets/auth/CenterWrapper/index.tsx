import * as styles from './style.css';

import { Card } from '~/shared/ui/Card';
import { FlexBox } from '~/shared/ui/FlexBox';

interface CenterWrapperProps {
    children: React.ReactNode;
}

export function CenterWrapper({ children }: CenterWrapperProps) {
    return (
        <FlexBox direction="column" alignItems="flex-start" justifyContent="flex-start" className={styles.RootStyle}>
            <div className={styles.WrapperStyle}>
                <Card variant="solid" color="white">
                    {children}
                </Card>
            </div>
        </FlexBox>
    );
}
