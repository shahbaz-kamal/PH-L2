import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { quizData } from "@/pages/Home/quizData";

export interface QuizData {
  id: number;
  questions: string;
  options: string[];
  correctAnswer: string;
}
// Define a type for the slice state
export interface QuizState {
  questions: QuizData[];
}

// Define the initial state using that type
const initialState: QuizState = {
    questions: quizData,
};

export const quizSlice = createSlice({
  name: "quiz",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// export const {  } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.quiz.value;

export default quizSlice.reducer;
