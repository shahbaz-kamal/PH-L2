import { Button } from "@/components/ui/button";

const QuizControll = () => {
  const handleNext = async () => {
    console.log("Next clicked");
  };
  const handlePrev = async () => {
    console.log("Prev clicked");
  };
  return (
    <div className="flex justify-between mt-2">
      <Button onClick={() => handlePrev()}>Previous</Button>
      <Button onClick={() => handleNext()}>Next</Button>
    </div>
  );
};

export default QuizControll;
