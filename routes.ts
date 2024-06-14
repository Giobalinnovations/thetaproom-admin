/**
 * An array of public routes that do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = [
  '/',
  '/about-us',
  '/collections',
  '/contact-us',
  // '/new-post',
];

/**
 * An array of routes that are used for authentication.
 * these route will redirect user to login user to the dasshboard pages
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/register'];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for api authentication.
 *
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after loggin in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = '/dashboard';
