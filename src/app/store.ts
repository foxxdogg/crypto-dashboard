import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../slices/uiSlice';
import searchReducer from '../slices/searchSlice';
import { cryptoApi } from '../slices/cryptoApi';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    search: searchReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
