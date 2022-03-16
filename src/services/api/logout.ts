import { AUTH_PASSWORD, AUTH_USERNAME, PROXY_LOGOUT } from 'config';
import axiosInstance from '@lib/axios';

export const logout = async () => {
  try {
    const response = await axiosInstance.post<{ loggedIn: boolean }>(
      PROXY_LOGOUT,
      {},
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        auth: {
          username: AUTH_USERNAME,
          password: AUTH_PASSWORD,
        },
      }
    );
    return response.data.loggedIn;
  } catch (err) {
    console.log('Logout error', err);
    return true;
  }
};
