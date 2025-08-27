
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import { dataApi } from "./services/dummy";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(dataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
