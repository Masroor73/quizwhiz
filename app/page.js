"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-full text-center text-black">
        <h1 className="text-3xl font-bold mb-4">Welcome to QuizWhiz 🎓</h1>
        <p className="text-md mb-6">Test your knowledge with a quick quiz!</p>
        <button
          onClick={() => router.push("/quiz")}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
