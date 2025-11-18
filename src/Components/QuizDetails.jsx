import React, { useContext } from 'react';
import { mainContext } from '../Contexts/Context';
import { questions as importedQuestions } from '../Data/questions';

const QuizDetails = () => {
  const questions = importedQuestions;
  const { name, difficulty, category, current } = useContext(mainContext);
  return (
    <div className="text-left">
      <div className="header py-6 pb-3">
        <h2 className="font-bold text-xl text-(--foreground)">{name}'s Quiz</h2>
        <p className="text-(--muted-foreground) text-sm">
          {category} • {difficulty}
        </p>
      </div>
      <div className="progressContainer">
        <div className="progressText flex justify-between items-end">
          <p className="text-(--muted-foreground)">Progress</p>
          <p className="text-(--foreground) text-sm">
            {current + 1} / {questions.length}
          </p>
        </div>
        <div className="mainProgress relative bg-(--card) w-full h-2.5 mt-2.5 rounded-2xl">
          <div
            style={{
              width: ((current + 1) / questions.length) * 100 + '%',
            }}
            className="ongoingProgress absolute top-0 left-0 h-full bg-linear-to-br from-(--primary) to-(--accent) rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
