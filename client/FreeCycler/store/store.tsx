import { configureStore } from '@reduxjs/toolkit';
import pilesReducer from './Reducers';

export const store = configureStore({
  reducer: {
    piles: pilesReducer,
    // updates: updatesReducer,
    // user: userReducer,
    // favorites: favoritesReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
