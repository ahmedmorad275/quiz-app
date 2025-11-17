import React from 'react';
import { GoTrophy } from 'react-icons/go';

const BestScore = () => {
  return (
    <div
      id="bestScoreBox"
      className="bg-(--card) flex items-center justify-center gap-2 p-6 py-4 border border-(--primary)/40 shadow-sm text-(--card-foreground) rounded-xl my-8">
      <GoTrophy />
      <p className="text-lg font-semibold">Best Score: 1</p>
    </div>
  );
};

export default BestScore;
