export const endpoints = {
  signUp: () => '/accounts/register',
  requestAuthCode: () => '/sessions/auth/request-code',
  authWithCode: () => '/sessions/auth/code',
  authWithPassword: () => '/sessions/auth/password',
}
