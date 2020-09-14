import React from "react";
import Header from "./Header";
import SingleList from "./SingleList";

type ResultsProps = {
  options: string[];
  lang1: string;
  lang2: string;
  setLang1: (lang1: string) => void;
  setLang2: (lang2: string) => void;
  setGender: (gender: string) => void;
  gender: string;
  setCurrentComponent: (currentComponent: string) => void;
};

const Results = ({
  options,
  lang1,
  lang2,
  setLang1,
  setLang2,
  gender,
  setGender,
  setCurrentComponent,
}: ResultsProps) => {
  return (
    <div className="results__wrapper">
      <Header />
      <div className="results__list">
        <SingleList />
      </div>
    </div>
  );
};

export default Results;
