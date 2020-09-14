import React, { useState } from "react";
import Header from "./Header";
import DropDown from "./DropDown";
import Toggle from "./Toggle";

const options = ["english", "turkish", "spanish"];

const Home = () => {
  const [selectedLang1, setSelectedLang1] = useState("english");
  const [selectedLang2, setSelectedLang2] = useState("turkish");

  return (
    <div className="home__wrapper">
      <Header />
      <h2>Choose two languages and a gender:</h2>
      <div>
        <DropDown
          options={options}
          selectedOption={selectedLang1}
          selectOption={setSelectedLang1}
        />
        <DropDown
          options={options}
          selectedOption={selectedLang2}
          selectOption={setSelectedLang2}
        />
      </div>
      <Toggle />
    </div>
  );
};

export default Home;
