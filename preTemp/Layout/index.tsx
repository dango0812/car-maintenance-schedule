import { Asset, Container, FlexBox, IconButton, Spacing, Typography } from 'src/components/base';
import Logo from 'src/components/common/Logo';

import * as styles from 'src/styles/pages/dashboard.css';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.RootLayoutStyle}>
            <Container className={styles.RootContainerStyle} size="sm">
                <FlexBox direction="column" width="100%">
                    <FlexBox className={styles.HeaderStyle} alignItems="center">
                        <FlexBox alignItems="center" justifyContent="space-between" width="100%">
                            <Logo />
                            <div>Right Content</div>
                        </FlexBox>
                    </FlexBox>

                    <Spacing height="10px" />

                    <FlexBox direction="column" justifyContent="center">
                        <Typography fontSize="s14" fontWeight="semiBold" color="grey">
                            현재 주행거리
                        </Typography>
                        <FlexBox alignItems="flex-end" gap="g10">
                            <Typography as="h4" variant="h4" color="blue">
                                3,450 km{' '}
                            </Typography>
                            <IconButton variant="soft" size="md" color="blue">
                                <Asset.Icon name="edit" width={32} height={32} />
                            </IconButton>
                        </FlexBox>
                    </FlexBox>

                    {children}
                </FlexBox>
            </Container>
        </div>
    );
}
