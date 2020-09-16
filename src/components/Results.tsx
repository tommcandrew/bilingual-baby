import React, { useState, useEffect } from "react";
import Header from "./Header";
import SingleList from "./SingleList";
import DoubleList from "./DoubleList";
import { lists } from "../assets/lists";

type ResultsProps = {
  gender: Gender;
  setCurrentComponent: (currentComponent: string) => void;
  langPair: "enTr" | "enEs" | "esTr";
};

type Gender = "male" | "female";

type List = "same" | "equivalent" | "similar";

const Results = ({ gender, setCurrentComponent, langPair }: ResultsProps) => {
  const listNames: List[] = ["same", "equivalent", "similar"];
  const [currentListName, setCurrentListName] = useState<List>("same");
  const [currentList, setCurrentList] = useState<any>([]);

  useEffect(() => {
    const list = lists[langPair][currentListName][gender];
    setCurrentList(list);
  }, [langPair, currentListName, gender]);

  return (
    <div className="results__wrapper">
      <Header setCurrentComponent={setCurrentComponent} gender={gender} />
      <div className="results__list-wrapper">
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
        {currentListName === "same" ? (
          <SingleList list={currentList} />
        ) : (
          <DoubleList list={currentList} currentListName={currentListName} />
        )}
      </div>
      <button
        className="results__back"
        onClick={() => setCurrentComponent("Home")}
      >
        Back
      </button>
    </div>
  );
};

export default Results;
