import React from "react";
import { FiClock } from "react-icons/fi";

const QuizBox = () => {
  return (
    <div className="questionModal mt-4 text-left bg-(--card) p-4 rounded-lg">
      {/* Count Down Bar */}
      <div className="timerCountDown my-3 flex items-center gap-2.5 justify-between">
        <FiClock />
        <div className="countDownBar flex-1 ">
          <div className="w-5/5 h-1.5 bg-linear-to-br from-(--primary) to-(--accent) rounded-2xl"></div>
        </div>
        <div>
          <p className="text-(--foreground) text-sm">15 s</p>
        </div>
      </div>
      {/* Questions Number */}
      <div className="questionsNum text-sm font-medium text-(--primary)">
        <p>Question 1 of 5</p>
      </div>
      {/* Question Text */}
      <div className="questionText mt-2 mb-6">
        <h2 className="font-bold text-lg">
          How many planets are in our solar system?
        </h2>
      </div>
      {/* Question Answers */}
      <div className="answers flex flex-col gap-2">
        <div className="answer bg-(--background) rounded-lg p-3 items-center cursor-pointer hover:bg-(--card)/80 hover:scale-y-105 transition-colors hover:border-2 flex gap-2.5 border border-(--primary)/40">
          <div className="letter bg-(--primary)/20 font-semibold w-8 text-(--primary) h-8 flex items-center justify-center rounded-full p-1.5">
            <p>A</p>
          </div>
          <div className="text text-(--foreground) font-semibold">7</div>
        </div>
        <div className="answer bg-(--background) rounded-lg p-3 items-center cursor-pointer hover:bg-(--card)/80 hover:scale-y-105 transition-colors hover:border-2 flex gap-2.5 border border-(--primary)/40">
          <div className="letter bg-(--primary)/20 font-semibold w-8 text-(--primary) h-8 flex items-center justify-center rounded-full p-1.5">
            <p>B</p>
          </div>
          <div className="text text-(--foreground) font-semibold">8</div>
        </div>
        <div className="answer bg-(--background) rounded-lg p-3 items-center cursor-pointer hover:bg-(--card)/80 hover:scale-y-105 transition-colors hover:border-2 flex gap-2.5 border border-(--primary)/40">
          <div className="letter bg-(--primary)/20 font-semibold w-8 text-(--primary) h-8 flex items-center justify-center rounded-full p-1.5">
            <p>C</p>
          </div>
          <div className="text text-(--foreground) font-semibold">9</div>
        </div>
        <div className="answer bg-(--background) rounded-lg p-3 items-center cursor-pointer hover:bg-(--card)/80 hover:scale-y-105 transition-colors hover:border-2 flex gap-2.5 border border-(--primary)/40">
          <div className="letter bg-(--primary)/20 font-semibold w-8 text-(--primary) h-8 flex items-center justify-center rounded-full p-1.5">
            <p>D</p>
          </div>
          <div className="text text-(--foreground) font-semibold">10</div>
        </div>
      </div>
    </div>
  );
};

export default QuizBox;
