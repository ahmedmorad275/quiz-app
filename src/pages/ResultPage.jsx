import React from "react";
import { GoTrophy } from "react-icons/go";

const ResultPage = () => {
  return (
    <section>
      <GoTrophy />
      <div className="resultBox bg-(--card) gap-2 p-6 py-4 border border-(--primary)/20 shadow-sm text-(--card-foreground) rounded-xl my-8">
        {/* Main Text */}
        <div className="text my-4 mt-0">
          <h2 className="font-bold text-xl text-(--foreground)">
            Quiz Completed
          </h2>
          <p className="text-(--muted-foreground) text-sm">General • Medium</p>
        </div>
        {/* Score Text */}
        <div className="scoreText my-4">
          <h2>
            <span className="font-bold text-xl text-(--error)">
              Keep Trying!
            </span>
          </h2>
          <p className="text-(--muted-foreground)">Great job, admin!</p>
        </div>
        {/* Score Numbers */}
        <div className="scoreNum flex items-center my-4 justify-center">
          <div className="correctAnswers flex-1 flex flex-col justify-center items-center bg-(--card) px-10 py-4 border border-(--primary)/40 shadow-sm text-(--card-foreground) rounded-xl">
            <GoTrophy />
            <p className="pt-2 font-bold text-(foreground) text-lg">0</p>
            <p className="text-(--muted-foreground) text-sm">Correct Answers</p>
          </div>
          <div className="accuracy flex-1 flex flex-col justify-center items-center text-center bg-(--card) px-10 py-4 border border-(--primary)/40 shadow-sm text-(--card-foreground) rounded-xl" >
            <GoTrophy />
            <p className="pt-2 text-(foreground) font-bold text-lg">0%</p>
            <p className="text-(--muted-foreground) text-sm">Accuracy</p>
          </div>
        </div>
        {/* Stats */}
        <div className="stats text-left border border-(--primary)/40 shadow-sm my-4 p-3 rounded-lg">
          <p className="flex justify-between text-(--muted-foreground) text-sm mb-2">
            Total Questions: <span className="text-(--foreground) font-bold">5</span>
          </p>
          <p className="flex justify-between text-(--muted-foreground) text-sm">
            Wrong Answers: <span className="text-(--foreground) font-bold">3</span>
          </p>
        </div>
        {/* Best Score */}
        <div
          className="bestScoreResult
          bg-(--card) flex items-center justify-center gap-2 p-6 py-4
          border border-(--primary)/40 shadow-sm text-sm text-(--muted-foreground)
          rounded-xl my-4"
        >
          <GoTrophy className="text-(--primary) text-lg"/>
          <p>Best Score: <span className="text-md font-bold text-(--foreground)">1</span></p>
        </div>
        {/* Buttons */}
        <div className="buttons">
          <button>Play again</button>
          <button>Home</button>
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
