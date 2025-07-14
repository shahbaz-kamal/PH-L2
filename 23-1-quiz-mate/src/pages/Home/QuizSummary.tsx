import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hook";

const QuizSummary = () => {
  const { questions, userAnswer } = useAppSelector((state) => state.quiz);
  console.log(questions, userAnswer);
  // counting correct answer
  const handleCorrectAnswer = (): number => {
    const correctAnswerArray = questions.filter(
      (question, index) => question.correctAnswer === userAnswer[index]
    );
    return correctAnswerArray.length;
  };
  const correctAnswer = handleCorrectAnswer();
  console.log(correctAnswer);
  // incorrect answer count
  const incorrectAnswer: number = questions.length - correctAnswer;
  // correct answer percentage
  const percentage: number = ((correctAnswer / questions.length) * 100).toFixed(
    2
  );
  console.log(percentage);
  let message: string = "";
  if (percentage > 80) {
    message = "Great job. keep practising";
  } else if (percentage > 50 && percentage < 80) {
    message = "need to practise more";
  } else message = "Poor Performance";
  return (
    <div className="container mx-auto">
      <h3 className="text-green-500 text-5xl underline text-center my-5">
        Quiz Summary
      </h3>
      <Card className="max-w-lg mx-auto p-6 shadow-xl rounded-xl">
        <CardContent>
          <h3 className="mb-2">
            You got {correctAnswer} out of {questions.length}
          </h3>
          {/* progress bar */}
          <div className="space-y-2">
            <Progress value={percentage} />
            <div>
              <span className="mr-2">{percentage}%</span>
              <span>Performance: Good</span>
            </div>
            <div>
              <p>
                <strong>Incorrect Answers:</strong> {incorrectAnswer}
              </p>
            </div>
            {message ? <div>{message}</div> : ""}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSummary;
