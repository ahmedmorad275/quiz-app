import React from 'react';
import { GoTrophy } from 'react-icons/go';
import { PiMedalBold } from 'react-icons/pi';
import { LuTarget } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
  let navigate = useNavigate();
  function goToQuizPage(target) {
    navigate(`/${target}`);
  }
  return (
    <section className="mt-8">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full p-6 shadow-glow bg-gradient-to-r from-(--muted) to-(--secondary)">
          <GoTrophy className="w-16 h-16 taxt-(--primary-foreground)" />
        </div>
      </div>
      {/* Result Box */}
      <div className="resultBox bg-(--card) gap-2 p-6 py-4 border border-(--primary)/20 shadow-sm text-(--card-foreground) rounded-xl my-8 mt-10">
        {/* Main Text */}
        <div className="text my-4 mt-0">
          <h2 className="font-bold text-xl mb-2 text-(--foreground)">
            Quiz Completed
          </h2>
          <p className="text-(--muted-foreground) text-sm">General • Medium</p>
        </div>
        {/* Score Text */}
        <div className="scoreText my-4">
          <h2 className="mb-1">
            <span className="font-bold text-3xl text-(--error)">
              Keep Trying!
            </span>
          </h2>
          <p className="text-(--muted-foreground)">Great job, admin!</p>
        </div>
        {/* Score Numbers */}
        <div className="scoreNum flex items-center my-6 gap-3 justify-center">
          <div className="correctAnswers flex-1 flex flex-col justify-center items-center bg-(--card) px-10 py-4 border border-(--primary)/40 shadow-sm text-(--card-foreground) rounded-xl">
            <LuTarget className="w-8 h-8 mb-2 text-(--primary)" />
            <p className="pt-1 pb-1 font-bold text-(foreground) text-3xl ">0</p>
            <p className="text-(--muted-foreground) text-sm">Correct Answers</p>
          </div>
          <div className="accuracy flex-1 flex flex-col justify-center items-center text-center bg-(--card) px-10 py-4 border border-(--primary)/40 shadow-sm text-(--card-foreground) rounded-xl">
            <PiMedalBold className="w-8 h-8 mb-2 text-(--primary)" />
            <p className="pt-1 pb-1 text-(foreground) font-bold text-3xl ">
              0%
            </p>
            <p className="text-(--muted-foreground) text-sm">Accuracy</p>
          </div>
        </div>
        {/* Stats */}
        <div className="stats text-left border border-(--primary)/40 shadow-sm my-4 p-3 rounded-lg">
          <p className="flex justify-between text-(--muted-foreground) text-sm mb-2">
            Total Questions:{' '}
            <span className="text-(--foreground) font-bold">5</span>
          </p>
          <p className="flex justify-between text-(--muted-foreground) text-sm">
            Wrong Answers:{' '}
            <span className="text-(--foreground) font-bold">3</span>
          </p>
        </div>
        {/* Best Score */}
        <div
          className="bestScoreResult
          bg-(--card) flex items-center justify-center gap-2 p-6 py-4
          border border-(--primary)/40 shadow-sm text-sm text-(--muted-foreground)
          rounded-xl my-4">
          <GoTrophy className="text-(--primary) text-lg" />
          <p>
            Best Score:{' '}
            <span className="text-md font-bold text-(--foreground)">1</span>
          </p>
        </div>
        {/* Buttons */}
        <div className="buttons grid grid-cols-2 gap-4">
          <button
            onClick={() => goToQuizPage('quiz')}
            className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-(--primary) text-(--primary-foreground) hover:bg-(--primary)/90 shadow-md hover:shadow-lg transition-all duration-300 h-11 rounded-md px-8 w-full">
            Play again
          </button>
          <button
            onClick={() => goToQuizPage('')}
            className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-(--primary)/20 bg-(--background) hover:bg-(--primary)/5 hover:border-(--primary)/40 transition-all duration-300 h-11 rounded-md px-8 w-full">
            Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
