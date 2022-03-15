import { USER_SIGNUP_ENDPONT } from '../../config';
import axiosInstance from '../../lib/axios';
import { SignUpData } from '../../types/types';

export const signup = async (signupData: SignUpData) => {
  try {
    const response = await axiosInstance.post(USER_SIGNUP_ENDPONT, signupData);
    return response.data;
  } catch (err) {
    console.log('Signup Err ', err);
    return false;
  }
};
