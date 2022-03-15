import { createContext, FC, useContext, useState } from 'react';
import { UserHoldings } from '../types/types';

export interface HoldingsContext {
  holdingsLoading: boolean;
  setHoldingsLoading: (state: boolean) => void;

  holdings?: UserHoldings;
  setHoldings: (holdings?: UserHoldings) => void;
}

export const HoldingsContextImpl = createContext<HoldingsContext>(null!);

export function useHoldings() {
  return useContext(HoldingsContextImpl);
}

interface HoldingsProviderProps {
  initialData?: UserHoldings;
}

export const HoldingsProvider: FC<HoldingsProviderProps> = ({
  children,
  initialData,
}) => {
  const [holdings, setHoldings] = useState(initialData);
  const [holdingsLoading, setHoldingsLoading] = useState(false);

  return (
    <HoldingsContextImpl.Provider
      value={{ holdingsLoading, setHoldingsLoading, holdings, setHoldings }}
    >
      {children}
    </HoldingsContextImpl.Provider>
  );
};

export const selectHoldings = () => {
  const { holdingsLoading, holdings } = useHoldings();
  return {
    holdingsLoading,
    holdings,
  };
};
