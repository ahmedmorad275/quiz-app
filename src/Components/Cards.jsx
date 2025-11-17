import React from "react";
import { LuBrain, LuZap } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";

const Cards = () => {
  return (
    <section className="cards grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 justify-between items-center mb-3">
      <div className="transition-all duration-300 flex flex-col justify-center items-center  bg-(--card) px-10 py-4 border border-(--primary)/40 shadow-sm text-(--card-foreground) rounded-xl">
        <LuBrain />
        <h3 className="text-sm font-medium">Multiple Categories</h3>
      </div>
      <div className="transition-all duration-300 flex flex-col justify-center items-center  bg-(--card) px-10 py-4 border border-(--primary)/40 shadow-sm text-(--card-foreground) rounded-xl">
        <LuZap />
        <h3 className="text-sm font-medium">Timed Challenges</h3>
      </div>
      <div className="transition-all duration-300 flex flex-col justify-center items-center  bg-(--card) px-10 py-4 border border-(--primary)/40 shadow-sm text-(--card-foreground) rounded-xl">
        <GoTrophy />
        <h3 className="text-sm font-medium">Track Best Score</h3>
      </div>
    </section>
  );
};

export default Cards;
