import { useNavigate } from "react-router";

const ErrorElement = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
        Oops! Something went wrong
      </h1>
      <p className="text-base md:text-lg text-gray-600 mb-6 max-w-md">
        We couldn’t load this page. Please try again later or go back to
        continue exploring BookNest.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorElement;
