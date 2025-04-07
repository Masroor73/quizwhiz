"use client";

import { useState } from "react";

export default function QuestionCard({ question, onNext, isLast, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isCorrect = selectedOption === question.answer;

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onAnswer(isCorrect);
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    onNext();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto text-black">
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      <ul className="space-y-2">
        {question.options.map((option, index) => (
          <li
            key={index}
            className={`p-3 rounded cursor-pointer border ${
              selectedOption === option
                ? "bg-blue-200 border-blue-400"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => !isSubmitted && setSelectedOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          Submit Answer
        </button>
      ) : (
        <div className="mt-4">
          <p className={`font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
            {isCorrect ? "Correct!" : `Incorrect. Correct answer: ${question.answer}`}
          </p>
          <button
            onClick={handleNext}
            className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            {isLast ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}
