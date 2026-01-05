export const paths = {
    home: '/',
    dashboard: '/dashboard',
    service: '/service',
    community: '/community',
    profile: '/profile',
    signIn: '/sign-in',
    signUp: '/sign-up',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    page404: '/404',
} as const;

export type PathValues = (typeof paths)[keyof typeof paths];
