import React from "react";
import Header from "./Header";
import DropDown from "./DropDown";

const options = ["english", "turkish", "spanish"];

const Home = () => {
  return (
    <div className="home__wrapper">
      <Header />
      <h2>Choose two languages and a gender:</h2>
      <div>
        <DropDown options={options} />
        <DropDown options={options} />
      </div>
    </div>
  );
};

export default Home;
