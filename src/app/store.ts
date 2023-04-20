import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './authSlice'
import movieReducer from './movieSlice'

export const store = configureStore({
  reducer: {
		auth: authReducer,
		movie: movieReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
