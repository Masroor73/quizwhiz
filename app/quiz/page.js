"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import questions from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      // Go to result page after saving score to localStorage 
      localStorage.setItem("quizScore", score);
      localStorage.setItem("quizTotal", questions.length);
      router.push("/result");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <QuestionCard
        question={questions[current]}
        onNext={handleNext}
        onAnswer={handleAnswer}
        isLast={current === questions.length - 1}
      />
    </div>
  );
}
