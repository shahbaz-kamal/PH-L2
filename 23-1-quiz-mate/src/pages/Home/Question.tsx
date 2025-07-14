import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import QuizControll from "./QuizControll";
import { setAnswer } from "@/redux/features/quizSlice";

const Question = () => {
  const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );

  const dispatch = useAppDispatch();
  const question = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    dispatch(
      setAnswer({
        questionIndex: currentQuestionIndex,
        answer,
      })
    );
  };
  return (
    <div className="container mx-auto">
      <div className="text-center my-4">
        <h3 className="text-green-500 text-5xl underline">
          Questions(total-{questions.length})
        </h3>
      </div>
      <div className=" gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-blue-600">
              {currentQuestionIndex + 1}. {question.questions}
            </CardTitle>
            <CardTitle className="ml-5 text-gray-600">
              question ({currentQuestionIndex + 1} of {questions.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              {question.options.map((option, index) => (
                <Button
                  variant={option === currentAnswer ? "default" : "outline"}
                  onClick={() => handleAnswer(option)}
                  key={index}
                  className=""
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <QuizControll></QuizControll>
      </div>
    </div>
  );
};

export default Question;
