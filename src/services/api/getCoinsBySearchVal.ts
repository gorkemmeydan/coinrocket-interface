import { MARKETDATA_SEARCH_ENDPOINT } from '../../config';
import axiosInstance from '../../lib/axios';
import { convertToMarketItemsMap } from '../service-utils/convertToMarketItemsMap';

interface SearchValResponse {
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

// const convertToQueryFormat = (items: String[]): String => {
//   let searchVal = '';
//   let count = 0;

//   if (typeof items !== 'undefined') {
//     items.forEach((item) => {
//       const isEmpty = typeof item === 'undefined';
//       if (!isEmpty) {
//         if (count == 0) searchVal += item;
//         else searchVal += '%2C' + item;
//         count++;
//       }
//     });
//   }

//   return searchVal;
// };

const convertToQueryFormat = (items: string[]): URLSearchParams => {
  var params = new URLSearchParams();

  for (let i = 0; i < items.length; i++) {
    params.append('searchval', items[i]);
  }

  return params;
};

export const getCoinsBySearchVal = async (coinNames: string[]) => {
  try {
    const response: SearchValResponse = await axiosInstance.get(
      MARKETDATA_SEARCH_ENDPOINT,
      {
        params: convertToQueryFormat(coinNames),
      }
    );

    const marketItemsMap = convertToMarketItemsMap(response);

    return marketItemsMap;
  } catch (err) {
    console.log('Marketdata searchval err ', err);
    return [];
  }
};
