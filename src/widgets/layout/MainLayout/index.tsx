import { useCallback } from 'react';
import { matchPath, Outlet, useLocation, useNavigate } from 'react-router-dom';

import * as styles from './style.css';

import { paths, type PathValues } from '~/shared/constants/paths';
import Asset from '~/shared/ui/Asset';
import { Container } from '~/shared/ui/Container';
import { FlexBox } from '~/shared/ui/FlexBox';
import { For } from '~/shared/ui/For';
import { Tabbar } from '~/widgets/layout/Tabbar';

const TAB_ITEMS = [
    { label: '대시보드', icon: 'dashboard', path: paths.dashboard },
    { label: '서비스 정보', icon: 'wrench-screwdriver', path: paths.service },
    { label: '게시판', icon: 'chat-bubble', path: paths.community },
    { label: '프로필', icon: 'user-circle', path: paths.profile },
];

export function MainLayout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    // 현재 브라우저 경로와 탭의 경로가 일치하는지 확인
    const isCurrentTab = useCallback(
        (path: PathValues) => {
            return !!matchPath({ path, end: true }, pathname);
        },
        [pathname],
    );

    // 클릭 시, 해당 경로로 이동하는 핸들러
    const handleTabClick = useCallback(
        (path: PathValues) => {
            navigate(path);
        },
        [navigate],
    );

    return (
        <main className={styles.RootStyle}>
            <Container className={styles.WrapperStyle} size="sm" style={{ padding: 0 }}>
                <FlexBox direction="column" style={{ width: '100%' }}>
                    <FlexBox className={styles.ContentWrapperStyle} direction="column" flex="1">
                        <Outlet />
                    </FlexBox>

                    <Tabbar>
                        <For each={TAB_ITEMS}>
                            {({ label, icon, path }) => (
                                <Tabbar.Action
                                    key={icon}
                                    label={label}
                                    icon={<Asset.Icon name={icon} width={24} height={24} />}
                                    isActive={isCurrentTab(path)}
                                    onClick={() => handleTabClick(path as PathValues)}
                                />
                            )}
                        </For>
                    </Tabbar>
                </FlexBox>
            </Container>
        </main>
    );
}
