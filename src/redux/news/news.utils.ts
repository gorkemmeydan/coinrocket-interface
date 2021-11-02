import { NewsItem } from '../../types/types';

export const convertToNewsItemMap = (response: {
  data: { data: any[] };
}): NewsItem[] => {
  let coinMap: NewsItem[] = [];

  response.data.data.forEach((element) => {
    const newsItem = {
      id: element.id,
      title: element.title,
      published_at: element.published_at,
      content: element.content,
      newsUrl: element.url,
    };
    coinMap.push(newsItem);
  });

  return coinMap;
};
