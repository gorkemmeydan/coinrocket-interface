import { PORTFOLIO_GET_ENDPOINT } from 'config';
import axiosInstance from '@lib/axios';
import { UserPortfolioItem } from 'types';
import { convertToPortfolioItemsMap } from '../service-utils/convertToPortfolioItemsMap';

interface IPortfolioResponse {
  data: UserPortfolioItem[];
}

export const getPortfolio = async (email: string | undefined) => {
  try {
    const response: IPortfolioResponse = await axiosInstance.get(
      PORTFOLIO_GET_ENDPOINT,
      {
        params: {
          email: email,
        },
      }
    );
    return convertToPortfolioItemsMap(response);
  } catch (err) {
    console.log('Get Portfolio error ', err);
    return [];
  }
};
