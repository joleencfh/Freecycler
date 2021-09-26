import { configureStore } from '@reduxjs/toolkit';
import { pilesSlice } from './Reducers';

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
