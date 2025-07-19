import { useGetAllQuizQuery } from "@/redux/api/quizApi";
import React from "react";

const AllQuiz = () => {
  const { data, isLoading, isError } = useGetAllQuizQuery(undefined);
  console.log(data, isLoading);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>{
    data.map((quiz)=><div>
        <h2 className="text-2xl font-bold">{quiz.title}</h2>
        <p className="text-gray-600">{quiz.description}</p>
        <ul className="list-disc pl-5 mt-2">
            {quiz.questions.map((question, index) => (
            <li key={index} className="my-2">
                <strong>{index + 1}. {question.question}</strong>
                <ul className="list-inside list-circle">
                {/* {question.options.map((option, optIndex) => (
                    <li key={optIndex}>{option}</li>
                ))} */}
                </ul>
            </li>
            ))}
        </ul>
    </div>)}</div>;
};

export default AllQuiz;
