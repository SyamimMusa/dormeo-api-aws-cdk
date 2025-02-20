export const authRoutes = [
    {
        path: 'auth/login',
        method: 'POST',
        lambdaPath: '../lambda/auth/login', // Relative path from this file
    },
    {
        path: 'auth/register',
        method: 'POST',
        lambdaPath: '../lambda/auth/register',
    },
];