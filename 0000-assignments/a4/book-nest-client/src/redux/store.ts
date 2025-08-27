import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./features/books/bookSlice";
import { bookApi } from "./api/bookApi";
import { borrowApi } from "./api/borrowApi";
import { borrowSlice } from "./features/Borrow/borrowSlice";

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [borrowApi.reducerPath]: borrowApi.reducer,
    borrow: borrowSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(bookApi.middleware)
      .concat(borrowApi.middleware);
  },
});
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
