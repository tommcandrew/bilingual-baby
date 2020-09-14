import React from "react";
import Header from "./Header";
import DropDown from "./DropDown";

const Home = () => {
  return (
    <div className="home__wrapper">
      <Header />
      <h2>Choose two languages and a gender:</h2>
      <div>
        <DropDown />
        <DropDown />
      </div>
    </div>
  );
};

export default Home;
