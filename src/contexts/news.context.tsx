import { createContext, FC, useContext, useState } from 'react';
import { NewsItem } from '../types/types';

export interface NewsContext {
  newsLoading: boolean;
  setNewsLoading: (state: boolean) => void;

  news?: NewsItem[];
  setNews: (news?: NewsItem[]) => void;
}

export const NewsContextImpl = createContext<NewsContext>(null!);

export function useNews() {
  return useContext(NewsContextImpl);
}

interface NewsProviderProps {
  initialData?: NewsItem[];
}

export const NewsProvider: FC<NewsProviderProps> = ({
  children,
  initialData,
}) => {
  const [news, setNews] = useState(initialData);
  const [newsLoading, setNewsLoading] = useState(false);

  return (
    <NewsContextImpl.Provider
      value={{ newsLoading, setNewsLoading, news, setNews }}
    >
      {children}
    </NewsContextImpl.Provider>
  );
};

export const selectNews = () => {
  const { newsLoading, news } = useNews();
  return {
    newsLoading,
    news,
  };
};
