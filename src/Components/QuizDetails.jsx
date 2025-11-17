import React from "react";

const QuizDetails = () => {
  return (
    <div className="text-left">
      <div className="header py-6 pb-3">
        <h2 className="font-bold text-xl text-(--foreground)">Ahmed's Quiz</h2>
        <p className="text-(--muted-foreground) text-sm">General • Medium</p>
      </div>
      <div className="progressContainer">
        <div className="progressText flex justify-between items-end">
          <p className="text-(--muted-foreground)">Progress</p>
          <p className="text-(--foreground) text-sm">1 / 5</p>
        </div>
        <div className="mainProgress relative bg-(--card) w-full h-2.5 mt-2.5 rounded-2xl">
          <div className="ongoingProgress absolute top-0 left-0 w-4/5 h-full bg-linear-to-br from-(--primary) to-(--accent) rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
