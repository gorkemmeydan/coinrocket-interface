import { createContext, FC, useContext, useState } from 'react';
import { CoinData } from 'types';

export interface MarketContext {
  marketLoading: boolean;
  setMarketLoading: (state: boolean) => void;

  coins?: CoinData[];
  setCoins: (coins?: CoinData[]) => void;
}

export const MarketContextImpl = createContext<MarketContext>(null!);

export function useMarket() {
  return useContext(MarketContextImpl);
}

interface MarketProviderProps {
  initialData?: CoinData[];
}

export const MarketProvider: FC<MarketProviderProps> = ({
  children,
  initialData,
}) => {
  const [coins, setCoins] = useState(initialData);
  const [marketLoading, setMarketLoading] = useState(false);

  return (
    <MarketContextImpl.Provider
      value={{ marketLoading, setMarketLoading, coins, setCoins }}
    >
      {children}
    </MarketContextImpl.Provider>
  );
};
