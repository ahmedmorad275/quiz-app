import React, { useContext, useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';
import { questions as importedQuestions } from '../Data/questions';
import { mainContext } from '../Contexts/Context';
import { useNavigate } from 'react-router-dom';
const QuizBox = () => {
  const questions = importedQuestions;
  const { timer, setTimer, current, setCurrent, correctAnswers, wrongAnswers } =
    useContext(mainContext);
  const newTime = timer;
  const [width, setWidth] = useState(100);
  const newWidth = width;
  // $$$$$$$$$$$$$$$$$$$$$$$$$
  // Updating UI after specific Time
  useEffect(() => {
    const TIMER = setInterval(() => {
      setWidth(() => {
        if (width > 0) {
          return newWidth - 5;
        } else {
          setCurrent((prev) => {
            return prev + 1;
          });
          setWidth(100);
        }
      });
      setTimer(() => {
        if (timer > 0) {
          return newTime - 1;
        } else {
          setTimer(20);
        }
      });
    }, 1000);
    return () => {
      clearInterval(TIMER);
    };
  });
  // $$$$$$$$$$$$$$$$$$$$$$$$$
  // Go to Result Page
  let navigate = useNavigate();
  if (current === questions.length) {
    navigate('/result');
  }

  function handleClick(e) {
    if (e.target.id === questions[current].answer) {
      correctAnswers.push(questions[current].answer);
      e.target.classList.add('correctAnswer');
      setCurrent((prev) => {
        return prev + 1;
      });
      setWidth(100);
      setTimer(20);
    } else {
      wrongAnswers.push(questions[current].answer);
      e.target.classList.add('wrongAnswer');
      setCurrent((prev) => {
        return prev + 1;
      });
      setWidth(100);
      setTimer(20);
    }
  }
  // $$$$$$$$$$$$$$$$$$$$$$$$$
  // Rendering Component
  return (
    <div className="questionModal mt-4 text-left bg-(--card) p-4 rounded-lg">
      {/* Count Down Bar */}
      <div className="timerCountDown my-3 flex items-center gap-2.5 justify-between">
        <FiClock
          className={`${timer > 5 ? 'text-(--foreground)' : 'text-(--error)'}`}
        />
        <div className="countDownBar flex-1 ">
          <div
            style={{
              width: width + '%',
            }}
            className={`w-5/5 h-1.5 ${
              timer > 5 ? 'bg-linear-to-br' : 'bg-(--error)'
            } from-(--primary) to-(--accent) rounded-2xl`}></div>
        </div>
        <div>
          <p className="text-(--foreground) text-sm">{timer} s</p>
        </div>
      </div>
      {/* Questions Number */}
      <div className="questionsNum text-sm font-medium text-(--primary)">
        <p>
          Question {current + 1} of {questions.length}
        </p>
      </div>
      {/* Question Text */}
      <div className="questionText mt-2 mb-6">
        <h2 className="font-bold text-lg">{questions[current].question}</h2>
      </div>
      {/* Question Answers */}
      <div className="answers flex flex-col gap-2">
        <div
          onClick={handleClick}
          id="A"
          className="answer bg-(--background) rounded-lg p-3 items-center cursor-pointer hover:bg-(--card)/80 hover:scale-y-105 transition-colors hover:border-2 flex gap-2.5 border border-(--primary)/40">
          <div className="letter bg-(--primary)/20 font-semibold w-8 text-(--primary) h-8 flex items-center justify-center rounded-full p-1.5">
            <p>A</p>
          </div>
          <div className="answerText text-(--foreground) font-semibold">
            {questions[current].A}
          </div>
        </div>
        <div
          onClick={handleClick}
          id="B"
          className="answer bg-(--background) rounded-lg p-3 items-center cursor-pointer hover:bg-(--card)/80 hover:scale-y-105 transition-colors hover:border-2 flex gap-2.5 border border-(--primary)/40">
          <div className="letter bg-(--primary)/20 font-semibold w-8 text-(--primary) h-8 flex items-center justify-center rounded-full p-1.5">
            <p>B</p>
          </div>
          <div className="answerText text-(--foreground) font-semibold">
            {questions[current].B}
          </div>
        </div>
        <div
          onClick={handleClick}
          id="C"
          className="answer bg-(--background) rounded-lg p-3 items-center cursor-pointer hover:bg-(--card)/80 hover:scale-y-105 transition-colors hover:border-2 flex gap-2.5 border border-(--primary)/40">
          <div className="letter bg-(--primary)/20 font-semibold w-8 text-(--primary) h-8 flex items-center justify-center rounded-full p-1.5">
            <p>C</p>
          </div>
          <div className="answerText text-(--foreground) font-semibold">
            {questions[current].C}
          </div>
        </div>
        <div
          onClick={handleClick}
          id="D"
          className="answer bg-(--background) rounded-lg p-3 items-center cursor-pointer hover:bg-(--card)/80 hover:scale-y-105 transition-colors hover:border-2 flex gap-2.5 border border-(--primary)/40">
          <div className="letter bg-(--primary)/20 font-semibold w-8 text-(--primary) h-8 flex items-center justify-center rounded-full p-1.5">
            <p>D</p>
          </div>
          <div className="answerText text-(--foreground) font-semibold">
            {questions[current].D}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizBox;
