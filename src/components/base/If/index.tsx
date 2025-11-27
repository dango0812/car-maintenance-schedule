interface IfProps {
    condition: boolean;
    children: React.ReactNode;
}

export const If = ({ condition, children }: IfProps) => {
    return condition ? children : null;
};
