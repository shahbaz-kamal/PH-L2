"use client";

import { useRouter } from "next/navigation";

export const Home = () => {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };
  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <h3>Home Page</h3>

      <button onClick={handleGoToDashboard} className="bg-amber-300 rounded-md px-2 py-1 text-black cursor-pointer">
        Dashboard
      </button>
    </div>
  );
};

export default Home;
