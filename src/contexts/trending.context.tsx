import { createContext, FC, useContext, useState } from 'react';
import { TrendingCoin } from '../types/types';

export interface TrendingContext {
  trendingLoading: boolean;
  setTrendingLoading: (state: boolean) => void;

  trendingCoins?: TrendingCoin[];
  setTrendingCoins: (trendingCoins: TrendingCoin[]) => void;
}

export const TrendingContextImpl = createContext<TrendingContext>(null!);

export function useTrending() {
  return useContext(TrendingContextImpl);
}

interface TrendingProviderProps {
  initialData?: TrendingCoin[];
}

export const TrendingProvider: FC<TrendingProviderProps> = ({
  children,
  initialData,
}) => {
  const [trendingCoins, setTrendingCoins] = useState(initialData);
  const [trendingLoading, setTrendingLoading] = useState(false);

  return (
    <TrendingContextImpl.Provider
      value={{
        trendingLoading,
        setTrendingLoading,
        trendingCoins,
        setTrendingCoins,
      }}
    >
      {children}
    </TrendingContextImpl.Provider>
  );
};

export const selectTrending = () => {
  const { trendingLoading, trendingCoins } = useTrending();
  return {
    trendingLoading,
    trendingCoins,
  };
};
