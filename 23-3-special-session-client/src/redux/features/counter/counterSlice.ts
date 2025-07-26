import { createSlice } from "@reduxjs/toolkit";

export interface CounterSlice {
  id: number;
  count: number;
}
const initialState: CounterSlice[] = [
  { id: 1, count: 0 },
  { id: 2, count: 2 },
];

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});
