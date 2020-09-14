import React, { useState, useEffect } from "react";
import Header from "./Header";
import SingleList from "./SingleList";
import { lists } from "../assets/lists";

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
  const [listName, setListName] = useState("same");
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    setCurrentList();
  }, [listName]);

  return (
    <div className="results__wrapper">
      <Header />
      <div className="results__list">
        <SingleList list={currentList} />
      </div>
    </div>
  );
};

export default Results;
