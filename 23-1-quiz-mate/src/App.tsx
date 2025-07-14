import Question from "./pages/Home/Question";
import  QuizSummary from "./pages/Home/QuizSummary";
import { useAppSelector } from "./redux/hook";

function App() {
  const { isQuizComplete } = useAppSelector((state) => state.quiz);
  return (
    <div className="">
      {isQuizComplete ? <QuizSummary></QuizSummary> : <Question></Question>}
    </div>
  );
}

export default App;
