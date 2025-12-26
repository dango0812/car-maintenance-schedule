export interface ForProps<T> {
    /** 순회할 배열 (빈 배열일 경우 fallback 렌더링) */
    each: T[] | readonly T[];
    /** 배열이 비어 있을 때 렌더링할 노드 */
    fallback?: React.ReactNode;
    /** 각 아이템을 렌더링하기 위한 render function */
    children: (item: T, index: number) => React.ReactNode;
}

/**
 * 배열을 순회하며 렌더링하기 위한 컴포넌트입니다.
 *
 * 내부적으로 `Array.map`을 감싸 JSX 표현을 단순화하는 용도로 사용됩니다.
 * 렌더링 제어 로직만 담당합니다.
 *
 * @example
 * const items = [];
 * <For each={items} fallback={<Empty />}>
 *      {(item) => <Item key={item.id} {...item}/>}
 * </For>
 */

export function For<T>({ each, fallback, children }: ForProps<T>): React.ReactNode {
    if (each.length === 0) {
        return fallback || null;
    }

    return each.map((item, index) => children(item, index));
}
