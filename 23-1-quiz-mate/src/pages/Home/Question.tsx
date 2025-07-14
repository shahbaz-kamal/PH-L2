import { useAppSelector } from "@/redux/hook";

const Question = () => {
  const { questions } = useAppSelector((state) => state.quiz);
  console.log(questions);
  return <div>Question</div>;
};

export default Question;
