import { useMemo } from 'react';
import { createStore, applyMiddleware, Store, Action } from 'redux';
import { persistStore } from 'redux-persist';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

import rootReducer from './root-reducer';

let store: Store;

interface StateInterface {
  trending?:
    | {
        readonly trendingCoins: {
          id: number;
          imageSrc: string;
          coinName: string;
          coinSymbol: string;
        }[];
        readonly loading: boolean;
        readonly error?: string | undefined;
      }
    | undefined;
  _persist?: { version: number; rehydrated: boolean } | undefined;
}

export const initStore = (initialState: StateInterface) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
};

export const initializeStore = (preloadedState: StateInterface) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    // store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: StateInterface) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default persistStore;
