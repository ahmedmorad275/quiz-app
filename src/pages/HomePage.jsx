import React from "react";
import BestScore from "../Components/BestScore";
import Cards from "../Components/Cards";
import Form from "../Components/Form";
import Header from "../Components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <BestScore />
      <Form />
      <Cards />
    </>
  );
};

export default HomePage;
