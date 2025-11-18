import React, { useContext, useEffect, useState } from "react";
import { LuZap } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { mainContext } from "../Contexts/Context";

const Form = () => {
  let navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const { name, setName, category, setCategory, difficulty, setDifficulty } =
    useContext(mainContext);

  useEffect(() => {
    if (name.trim() !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name]);


  return (
    <div
      id="loginForm"
      className="text-left bg-(--card) gap-2 p-6 py-4 border border-(--primary)/20 shadow-sm text-(--card-foreground) rounded-xl my-8"
    >
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
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
          >
            Your Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
          >
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            id="category"
            className="focus:outline-2 focus:outline-(--primary) outline-0 flex h-10 w-full rounded-md border border-(--input) bg-(--background) px-3 py-2 ring-offset-(--background) file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-(--foreground) placeholder:text-(--muted-foreground) disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base cursor-pointer"
          >
            <option value="General Knowledge">General Knowledge</option>
            <option value="Science">Science</option>
            <option value="Movies">Movies</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
        {/* Difficulty Selection */}
        <div className="difficultyBox flex flex-col space-y-2 my-4">
          <label
            htmlFor="difficulty"
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
          >
            Difficulty
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            name="difficulty"
            id="difficulty"
            className="focus:outline-2 focus:outline-(--primary) outline-0 flex h-10 w-full rounded-md border border-(--input) bg-(--background) px-3 py-2 ring-offset-(--background) file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-(--foreground) placeholder:text-(--muted-foreground) disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-base cursor-pointer"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        {/* Submit Button */}
        <div className=" ">
          <button
            disabled={disabled}
            onClick={(e) => {
              e.preventDefault();
              if (!disabled) navigate("/quiz");
            }}
            id="submitBtn"
            type="button"
            className="my-3 bg-(--primary) py-2 px-3 rounded-lg justify-center items-center gap-2 transition-opacity inline-flex w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <LuZap />
            Start Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
