import React from "react";
import QuizDetails from "../Components/QuizDetails";
import QuizBox from "../Components/QuizBox";

const QuizPage = () => {
  return (
    <section>
      <QuizDetails />
      <QuizBox />
      {/* Answer Result */}
      <div className="answerResult">
        <div className="correct border-2 rounded-lg border-(--success) p-3.5 my-4 text-(--success) font-bold">
          <p>✓ Correct!</p>
        </div>
        <div className="wrong border-2 rounded-lg border-(--error) p-3.5 my-4">
          <p className="text-(--error) font-bold">✗ Incorrect</p>
        </div>
      </div>
    </section>
  );
};

export default QuizPage;
