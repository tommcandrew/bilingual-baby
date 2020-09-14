import React from "react";
import DropDown from "./DropDown";
import Toggle from "./Toggle";

type HomeProps = {
  options: string[];
  lang1: string;
  lang2: string;
  setLang1: (lang1: string) => void;
  setLang2: (lang2: string) => void;
  setGender: (gender: string) => void;
  gender: string;
  setCurrentComponent: (currentComponent: string) => void;
};

const Home = ({
  options,
  lang1,
  lang2,
  setLang1,
  setLang2,
  gender,
  setGender,
  setCurrentComponent,
}: HomeProps) => {
  return (
    <div className="home__wrapper">
      <h1>Bilingual Baby Name Finder</h1>
      <h2>Choose two languages and a gender:</h2>
      <div>
        <DropDown
          options={options}
          selectedOption={lang1}
          selectOption={setLang1}
        />
        <DropDown
          options={options}
          selectedOption={lang2}
          selectOption={setLang2}
        />
      </div>
      <Toggle
        toggle={() => setGender(gender === "male" ? "female" : "male")}
        selectedOption={gender}
      />
      <button
        className="home__search"
        onClick={() => setCurrentComponent("Results")}
      >
        Search
      </button>
    </div>
  );
};

export default Home;
