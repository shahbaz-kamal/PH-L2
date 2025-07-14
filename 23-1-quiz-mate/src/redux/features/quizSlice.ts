import { quizData } from "./../../pages/Home/quizData";
import { createSlice } from "@reduxjs/toolkit";

export interface QuizData {
  id: number;
  questions: string;
  options: string[];
  correctAnswer: string;
}
// Define a type for the slice state
export interface QuizState {
  questions: QuizData[];
  currentQuestionIndex: 0;
  userAnswer: string[] | null;
}

// Define the initial state using that type
const initialState: QuizState = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
};

export const quizSlice = createSlice({
  name: "quiz",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswer[questionIndex] = answer;
    },
  },
});

// export const {  } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.quiz.value;

export default quizSlice.reducer;
