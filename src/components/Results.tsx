import React, { useState, useEffect } from "react";
import Header from "./Header";
import Search from "./Search";
import SingleList from "./SingleList";
import DoubleList from "./DoubleList";
import { lists } from "../assets/lists";

type ResultsProps = {
  options: string[];
  lang1: string;
  lang2: string;
  setLang1: (lang1: string) => void;
  setLang2: (lang2: string) => void;
  setGender: (gender: string) => void;
  gender: Gender;
  setCurrentComponent: (currentComponent: string) => void;
  langPair: "enTr" | "enEs" | "esTr";
};

type Gender = "male" | "female";

type List = "same" | "equivalent" | "similar";

const Results = ({
  options,
  lang1,
  lang2,
  setLang1,
  setLang2,
  gender,
  setGender,
  setCurrentComponent,
  langPair,
}: ResultsProps) => {
  const listNames: List[] = ["same", "equivalent", "similar"];
  const [currentListName, setCurrentListName] = useState<List>("same");
  const [currentList, setCurrentList] = useState<any>([]);

  useEffect(() => {
    const list = lists[langPair][currentListName][gender];
    setCurrentList(list);
  }, [langPair, currentListName, gender]);

  return (
    <div className="results__wrapper">
      <Header setCurrentComponent={setCurrentComponent} />
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
      <div className="results__tabs">
        {listNames.map((name, index) => (
          <div
            key={index}
            className={`results__tab ${
              name === currentListName && "results__tab--selected"
            }`}
            onClick={() => setCurrentListName(name)}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="results__list">
        {currentListName === "same" ? (
          <SingleList list={currentList} />
        ) : (
          <DoubleList list={currentList} />
        )}
      </div>
    </div>
  );
};

export default Results;
