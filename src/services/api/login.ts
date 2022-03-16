import { AUTH_PASSWORD, AUTH_USERNAME, PROXY_LOGIN } from 'config';
import axiosInstance from '@lib/axios';

interface LoginProps {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginProps) => {
  try {
    const response = await axiosInstance.post<{ loggedIn: boolean }>(
      PROXY_LOGIN,
      new URLSearchParams({
        scope: 'openid',
        grant_type: 'password',
        username: email,
        password: password,
      }),
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
    console.log('Login error', err);
    return false;
  }
};
