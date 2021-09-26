import { configureStore, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { pilesSlice } from './Slices';
import { ThunkAction } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    piles: pilesSlice.reducer,
    // updates: updatesReducer,
    // user: userReducer,
    // favorites: favoritesReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
