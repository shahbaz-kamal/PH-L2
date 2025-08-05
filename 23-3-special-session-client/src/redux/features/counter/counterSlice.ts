import { createSlice } from "@reduxjs/toolkit";

export interface CounterSlice {
  id: number;
  count: number;
}
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment:state=>{
      state.value +=1
    }
  },
});

export const {increment}=counterSlice.actions


