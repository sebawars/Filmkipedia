export const setTokenStorage = (token) => window.localStorage.setItem('token', token);

export const getTokenStorage = () => window.localStorage.getItem('token');

export const removeTokenStorage = () => window.localStorage.removeItem('token');
