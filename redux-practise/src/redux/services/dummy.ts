import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const dataApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    // getAllProducts (reading)
    getAllTodo: builder.query({
      query: () => `/todos`,
    }),
  }),
});

export const { useGetAllTodoQuery } = dataApi;
