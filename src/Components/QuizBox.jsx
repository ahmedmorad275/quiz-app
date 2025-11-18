import React, { useContext, useEffect, useRef, useState } from "react";
import { FiClock } from "react-icons/fi";
import { questions as importedQuestions } from "../Data/questions";
import { mainContext } from "../Contexts/Context";
import { useNavigate } from "react-router-dom";

const QuizBox = () => {
  const questions = importedQuestions;
  const { timer, setTimer, current, setCurrent } = useContext(mainContext);

  const [width, setWidth] = useState(100);
  const [correct, setCorrect] = useState("");

  const navigate = useNavigate();

  // =============================
  // Timer Logic
  useEffect(() => {
    const TIMER = setInterval(() => {
      setWidth((prev) => (prev > 0 ? prev - 5 : 100));

      setTimer((prev) => {
        if (prev > 0) return prev - 1;

        // Time finished → next question
        setCorrect(false);
        setCurrent((c) => c + 1);
        return 20;
      });
    }, 1000);

    return () => clearInterval(TIMER);
  }, []);

  // =============================
  // Navigate to result
  useEffect(() => {
    if (current === questions.length) {
      navigate("/result");
      setCurrent(0);
    }
  }, [current]);

  // =============================

  function handleClick(e) {
    const element = e.currentTarget; 

    if (element.id === questions[current].answer) {
      // Correct
      element.className =
        "answer bg-(--success)/40 rounded-lg p-3 items-center cursor-pointer transition-colors flex gap-2.5 border border-(--success)";
      setCorrect("true");

      setTimeout(() => {
        setCurrent((prev) => prev + 1);
        resetState(element);
      }, 2000);
    } else {
      // Wrong
      element.className =
        "answer bg-(--error)/40 rounded-lg p-3 items-center cursor-pointer transition-colors flex gap-2.5 border border-(--error)";
      setCorrect("false");

      setTimeout(() => {
        setCurrent((prev) => prev + 1);
        resetState(element);
      }, 2000);
    }
  }

  function resetState(el) {
    setWidth(100);
    setTimer(20);
    setCorrect("");

    el.className =
      "answer bg-(--background) rounded-lg p-3 items-center cursor-pointer hover:bg-(--card)/80 hover:scale-y-105 transition-colors flex gap-2.5 border border-(--primary)/40";
  }

  if (!questions[current]) return null;

  return (
    <div className="questionModal mt-4 text-left bg-(--card) p-4 rounded-lg">
      {/* Count Down Bar */}
      <div className="timerCountDown my-3 flex items-center gap-2.5 justify-between">
        <FiClock
          className={`${timer > 5 ? "text-(--foreground)" : "text-(--error)"}`}
        />
        <div className="countDownBar flex-1 ">
          <div
            style={{
              width: width + "%",
            }}
            className={`w-5/5 h-1.5 ${
              timer > 5 ? "bg-linear-to-br" : "bg-(--error)"
            } from-(--primary) to-(--accent) rounded-2xl`}
          ></div>
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

      {/* Question */}
      <div className="questionText mt-2 mb-6">
        <h2 className="font-bold text-lg">{questions[current].question}</h2>
      </div>

      {/* Answers */}
      <div className="answers flex flex-col gap-2">
        {["A", "B", "C", "D"].map((l) => (
          <div
            key={l}
            id={l}
            onClick={handleClick}
            className="answer bg-(--background) rounded-lg p-3 items-center cursor-pointer hover:bg-(--card)/80 hover:scale-y-105 transition-colors flex gap-2.5 border border-(--primary)/40"
          >
            <div className="letter bg-(--primary)/20 font-semibold w-8 text-(--primary) h-8 flex items-center justify-center rounded-full p-1.5">
              <p>{l}</p>
            </div>
            <div className="answerText text-(--foreground) font-semibold">
              {questions[current][l]}
            </div>
          </div>
        ))}
      </div>

      <div className="answerResult">
        {correct === "true" ? (
          <div className="correct border-2 text-center rounded-lg border-(--success) p-3.5 my-4 text-(--success) font-bold">
            <p>✓ Correct!</p>
          </div>
        ) : correct === "false" ? (
          <div className="wrong border-2 text-center rounded-lg border-(--error) p-3.5 my-4">
            <p className="text-(--error) font-bold">✗ Incorrect</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default QuizBox;
