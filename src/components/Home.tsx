import React from "react";
import Search from "./Search";
import BabyBoy from "../assets/images/BabyBoy.png";
import BabyGirl from "../assets/images/BabyGirl.png";

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
      <h1 className="home__title">
        <span>Bilingual</span> <span>Baby</span>
      </h1>
      <p className="home__instruction">
        Choose two languages and a gender to find the perfect name for your
        baby:
      </p>
      <Search
        options={options}
        lang1={lang1}
        lang2={lang2}
        setLang1={setLang1}
        setLang2={setLang2}
        setGender={setGender}
        gender={gender}
        setCurrentComponent={setCurrentComponent}
      />
      <img
        src={BabyBoy}
        alt="baby boy"
        className="home__baby home__baby--boy"
      />
      <img
        src={BabyGirl}
        alt="baby girl"
        className="home__baby home__baby--girl"
      />
    </div>
  );
};

export default Home;
