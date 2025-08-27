import { createSlice } from "@reduxjs/toolkit";
import type { InitialStateBorrow } from "../../../types/borrow";

const initialStateBorrow: InitialStateBorrow = {
  value: 0,
  borrowSummaryData: [],
};
export const borrowSlice = createSlice({
  name: "borrow",
  initialState: initialStateBorrow,
  reducers: {
    setBorrowSummaryData: (state, action) => {
      const { borrowSummaryData } = action.payload;
      state.borrowSummaryData = borrowSummaryData;
    },
  },
});

export default borrowSlice.reducer;

export const { setBorrowSummaryData } = borrowSlice.actions;
