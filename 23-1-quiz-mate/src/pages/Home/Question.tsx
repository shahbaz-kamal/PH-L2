import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hook";
import QuizControll from "./QuizControll";

const Question = () => {
  const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const question = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];
  console.log(userAnswer);
  console.log(questions);

  const handleAnswer = (answer: string) => {
    console.log(answer);
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
          <CardHeader className="font-bold text-blue-600">
            <CardTitle>
              {currentQuestionIndex + 1}. {question.questions}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              {question.options.map((option, index) => (
                <Button
                  onClick={() => handleAnswer(option)}
                  key={index}
                  className="bg-green-500 text-black"
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
