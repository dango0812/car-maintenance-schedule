import { LazyMotion, m } from 'motion/react';

const loadFeatures = () => import('./features').then((res) => res.default);

interface MotionProviderProps {
    children: React.ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
    return (
        // strict 모드는 m 컴포넌트만 사용하도록 강제하여 번들 크기를 줄임
        <LazyMotion strict features={loadFeatures}>
            <m.div style={{ height: '100%' }}>{children}</m.div>
        </LazyMotion>
    );
}
