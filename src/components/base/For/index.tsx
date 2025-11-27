export interface ForProps<T> {
    each: T[] | readonly T[];
    fallback?: React.ReactNode;
    children: (item: T, index: number) => React.ReactNode;
}

export const For = <T,>({ each, fallback, children }: ForProps<T>) => {
    if (each.length === 0) {
        return fallback || null;
    }

    return each.map((item, index) => children(item, index));
};
