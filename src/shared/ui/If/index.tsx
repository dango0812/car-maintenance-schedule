export interface IfProps {
    /** 조건이 true 일때 children 을 렌더링합니다. */
    condition: boolean;
    /** 조건이 true 일때 렌더링할 노드 */
    children: React.ReactNode;
}

/**
 * 조건에 따라 children 을 렌더링하는 컴포넌트입니다.
 *
 * JSX 에서 `condition && <Component />` 패턴을 추상화하여
 * 가독성을 높이기 위한 용도로 사용됩니다.
 * 렌더링 제어 로직만 담당합니다.
 *
 * @example
 * <If condition={isOpen}>
 *      <ProfileModal />
 * </If>
 */

export function If({ condition, children }: IfProps): React.ReactNode {
    return condition ? children : null;
}
