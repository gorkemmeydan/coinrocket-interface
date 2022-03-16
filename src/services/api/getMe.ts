import { USER_ME_ENDPOINT } from 'config';
import axiosInstance from '@lib/axios';

interface IMeResponse {
  data: { email: string };
}

export const getMe = async () => {
  try {
    const response: IMeResponse = await axiosInstance.get(USER_ME_ENDPOINT);
    return response.data.email;
  } catch (err) {
    console.log('Username getting error ', err);
    return undefined;
  }
};
