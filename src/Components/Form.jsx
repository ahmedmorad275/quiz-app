import React from 'react';
import { LuZap } from 'react-icons/lu';

const Form = () => {
  return (
    <div
      id="loginForm"
      className="text-left bg-(--card) gap-2 p-6 py-4 border border-(--primary)/20 shadow-sm text-(--card-foreground) rounded-xl my-8">
      <div className="main-text">
        <h2 className="font-semibold mb-1.5 text-2xl">Ready to Begin?</h2>
        <p className="text-sm text-(--muted-foreground)">
          Enter your details and select your preferences
        </p>
      </div>
      <form>
        {/* User Name Input */}
        <div className="nameBox flex flex-col space-y-2 my-4">
          <label
            htmlFor="name"
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className=" focus:outline-2 focus:outline-(--primary) outline-0 flex h-10 w-full rounded-md border border-(--input) bg-(--background) px-3 py-2 ring-offset-(--background) file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-(--foreground) placeholder:text-(--muted-foreground) disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base"
          />
        </div>
        {/* Category Selection */}
        <div className="categoryBox flex flex-col space-y-2 my-4">
          <label
            htmlFor="category"
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="focus:outline-2 focus:outline-(--primary) outline-0 flex h-10 w-full rounded-md border border-(--input) bg-(--background) px-3 py-2 ring-offset-(--background) file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-(--foreground) placeholder:text-(--muted-foreground) disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base cursor-pointer">
            <option value="general">General Knowledge</option>
            <option value="science">Science</option>
            <option value="movies">Movies</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        {/* Difficulty Selection */}
        <div className="difficultyBox flex flex-col space-y-2 my-4">
          <label
            htmlFor="difficulty"
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base">
            Difficulty
          </label>
          <select
            name="difficulty"
            id="difficulty"
            className="focus:outline-2 focus:outline-(--primary) outline-0 flex h-10 w-full rounded-md border border-(--input) bg-(--background) px-3 py-2 ring-offset-(--background) file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-(--foreground) placeholder:text-(--muted-foreground) disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base cursor-pointer">
            <option value="easy">Easy</option>
            <option value="medium" selected>
              Medium
            </option>
            <option value="hard">Hard</option>
          </select>
        </div>
        {/* Submit Button */}
        <div className=" ">
          <button
            type="submit"
            className="my-3 bg-(--primary) py-2 px-3 rounded-lg justify-center hover:opacity-85 items-center gap-2 transition-opacity inline-flex w-full cursor-pointer">
            <LuZap />
            Start Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
