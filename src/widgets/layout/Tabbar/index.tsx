import clsx from 'clsx';
import type React from 'react';

import * as styles from './style.css';

import { FlexBox } from '~/shared/ui/FlexBox';
import { Typography } from '~/shared/ui/Typography';

interface TabbarProps {
    /** 추가 스타일 클래스 */
    className?: string;
    /** 내부에 표시될 콘텐츠 */
    children: React.ReactNode;
    /** 인라인 스타일 객체 */
    style?: React.CSSProperties;
}

interface TabbarActionProps {
    /** 추가 스타일 클래스 */
    className?: string;
    /** 아이콘 */
    icon: React.ReactNode;
    /** 이름 */
    label: string;
    /** 현재 Tab 인지 */
    isActive?: boolean;
    /** Tab 클릭 비활성화 상태 여부 */
    disabled?: boolean;
    /** 클릭 이벤트 핸들러 */
    onClick?: (event: React.MouseEvent<HTMLButtonElement & HTMLAnchorElement>) => void;
}

/**
 * Tabbar 개별 아이템 컴포넌트
 * @param className - 추가 스타일 클래스
 * @param icon - 아이콘
 * @param isActive - 이름
 * @param label - 현재 Tab 인지
 * @param disabled - Tab 클릭 비활성화 상태 여부
 * @param onClick - 클릭 이벤트 핸들러
 */
function TabbarAction({ className, icon, isActive, label, disabled, onClick }: TabbarActionProps) {
    return (
        <button
            type="button"
            className={clsx(styles.TabbarActionStyle({ active: isActive }), className)}
            disabled={disabled}
            onClick={onClick}
        >
            <FlexBox direction="column" alignItems="center" justifyContent="center" gap="g4">
                {icon}

                <Typography
                    as="span"
                    variant="body"
                    style={{
                        color: 'inherit',
                        fontWeight: 'inherit',
                    }}
                >
                    {label}
                </Typography>
            </FlexBox>
        </button>
    );
}

/**
 * Tabbar 컴포넌트
 * @param children - 내부에 표시될 콘텐츠
 * @param className - 추가 스타일 클래스
 * @param style - 인라인 스타일 객체
 */
export function Tabbar({ children, className, style }: TabbarProps) {
    return (
        <FlexBox direction="row" alignItems="center" className={clsx(styles.TabbarStyle, className)} style={style}>
            {children}
        </FlexBox>
    );
}

Tabbar.Action = TabbarAction;
