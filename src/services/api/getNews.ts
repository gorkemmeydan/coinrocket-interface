import { NEWS_ENDPOINT } from 'config';
import axiosInstance from '@lib/axios';
import { convertToNewsItemMap } from '../service-utils/convertToNewsItemMap';

interface INewsResponse {
  data: { data: any[] };
}

export const getNews = async () => {
  try {
    const response: INewsResponse = await axiosInstance.get(NEWS_ENDPOINT);
    const newsItemsMap = convertToNewsItemMap(response);
    return newsItemsMap;
  } catch (err) {
    console.log('Marketdata trending error ', err);
    return [];
  }
};
