import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { serverLink } from "../../constants";
import { createApi } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverLink }),
  tagTypes: ["borrow", "summary"],
  endpoints: (builder) => ({
    borrowBook: builder.mutation({
      query: (body) => ({ url: "api/borrow", method: "POST", body }),
      invalidatesTags: ["borrow", "summary"],
    }),
    getBorrowSummary: builder.query({
      query: () => "api/borrow",
      providesTags: ["summary"],
    }),
  }),
});

export const { useBorrowBookMutation,useGetBorrowSummaryQuery } = borrowApi;
