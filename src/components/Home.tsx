import React from "react";
import Search from "./Search";

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
    </div>
  );
};

export default Home;
