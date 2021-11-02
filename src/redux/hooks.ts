import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState, AppThunk } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch | AppThunk>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
