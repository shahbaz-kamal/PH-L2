import { Button } from "@/components/ui/button";
import {
  isQuizComplete,
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const QuizControll = () => {
  const { currentQuestionIndex, userAnswer, questions } = useAppSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();
  const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;
  // console.log(isAnswerSelected);
  const handleNext = async () => {
    console.log("Next clicked");
    if (isAnswerSelected) dispatch(nextQuestion());
    else alert("please select an answer");
  };
  const handlePrev = async () => {
    console.log("Prev clicked");
    dispatch(previousQuestion());
  };
  const handleSubmit = async () => {
    dispatch(isQuizComplete());
  };
  return (
    <div className="flex justify-between mt-2">
      <Button onClick={() => handlePrev()}>Previous</Button>
      {currentQuestionIndex === questions.length - 1 ? (
        <Button onClick={() => handleSubmit()}>Submit</Button>
      ) : (
        <Button onClick={() => handleNext()}>Next</Button>
      )}
    </div>
  );
};

export default QuizControll;
