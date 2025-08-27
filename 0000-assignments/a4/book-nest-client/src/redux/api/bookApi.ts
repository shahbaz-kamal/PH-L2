import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { serverLink } from "../../constants";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: serverLink,
  }),
  tagTypes: ["books", "details"],
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (body) => ({ url: "api/books", method: "POST", body }),
      invalidatesTags: ["books"],
    }),
    getAllBook: builder.query({
      query: () => "api/books",
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id: string) => `api/books/${id}`,
      providesTags: ["details"],
    }),
    updateBook: builder.mutation({
      query: ({ id, body }: { id: string; body: any }) => ({
        url: `api/books/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["details", "books"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `api/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books", "details"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetAllBookQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
