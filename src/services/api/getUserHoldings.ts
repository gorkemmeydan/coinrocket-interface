import { USER_HOLDINGS_ENDPOINT } from 'config';
import axiosInstance from '@lib/axios';
import { UserHoldings } from 'types';
import { convertToUserHoldingsMap } from '../service-utils/convertToUserHoldingsMap';

interface IUserHoldingsResponse {
  data: UserHoldings;
}

export const getUserHoldings = async (email: string | undefined) => {
  try {
    const response: IUserHoldingsResponse = await axiosInstance.get(
      USER_HOLDINGS_ENDPOINT,
      {
        params: {
          email: email,
        },
      }
    );
    return convertToUserHoldingsMap(response);
  } catch (err) {
    console.log('User holdings error ', err);
    let empty: UserHoldings = {
      id: -1,
      email: '',
      portfolio: [],
      watchList: [],
    };
    return empty;
  }
};
