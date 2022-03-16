import { MARKETDATA_TOP100_ENDPOINT } from 'config';
import axiosInstance from '@lib/axios';
import { convertToMarketItemsMap } from '../service-utils/convertToMarketItemsMap';

interface ITop100Response {
  data: {
    id: any;
    market_cap_rank: any;
    image: any;
    name: any;
    symbol: any;
    current_price: any;
    price_change_24h: any;
    price_change_percentage_24h: any;
    market_cap: any;
    sparkline_in_7d: { price: number[] };
  }[];
}

export const getMarketTop100 = async () => {
  try {
    const response: ITop100Response = await axiosInstance.get(
      MARKETDATA_TOP100_ENDPOINT
    );
    const marketItemsMap = convertToMarketItemsMap(response);
    return marketItemsMap;
  } catch (err) {
    console.log('Marketdata top100 error ', err);
    return [];
  }
};
