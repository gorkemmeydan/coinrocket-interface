import { MARKETDATA_TRENDING_ENDPOINT } from '../../config';
import axiosInstance from '../../lib/axios';
import { convertToTrendingItemsMap } from '../service-utils/convertToTrendingItemsMap';

interface ITrendingResponse {
  data: { coins: any[] };
}

export const getTrending = async () => {
  try {
    const response: ITrendingResponse = await axiosInstance.get(
      MARKETDATA_TRENDING_ENDPOINT
    );
    const trendingItemsMap = convertToTrendingItemsMap(response);
    return trendingItemsMap;
  } catch (err) {
    console.log('Marketdata trending error ', err);
    return [];
  }
};
