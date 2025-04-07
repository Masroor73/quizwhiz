"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const savedScore = localStorage.getItem("quizScore");
    const savedTotal = localStorage.getItem("quizTotal");
    setScore(Number(savedScore));
    setTotal(Number(savedTotal));
  }, []);

  const getMessage = () => {
    const percent = (score / total) * 100;
    if (percent === 100) return "🎉 Perfect score! You're a quiz master!";
    if (percent >= 75) return "💪 Great job!";
    if (percent >= 50) return "🙂 Not bad, keep learning!";
    return "📚 Keep practicing!";
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full text-black">
        <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
        <p className="text-lg mb-2">You scored {score} out of {total}</p>
        <p className="text-md font-medium mb-6">{getMessage()}</p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
