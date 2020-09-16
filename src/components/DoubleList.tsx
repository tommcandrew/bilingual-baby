import React, { useState } from "react";
import RadioButtons from "./RadioButtons";
import { capitalise } from "../utils/capitalise";

type DoubleListProps = {
  list: { [key: string]: string | number }[];
  currentListName: string;
};

const radioOptions = ["all", "close", "closest"];

const DoubleList = ({ list, currentListName }: DoubleListProps) => {
  const [matchType, setMatchType] = useState<string>("all");

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedMatchType = e.target.value;
    setMatchType(selectedMatchType);
  };

  return (
    <div className="doubleList__wrapper">
      {currentListName === "similar" && (
        <RadioButtons
          options={radioOptions}
          handleChange={handleRadioClick}
          matchType={matchType}
        />
      )}
      {list.length &&
        list
          .filter(
            (item) =>
              item.match >= radioOptions.indexOf(matchType) + 1 || !item.match
          )
          .map((item, index) => (
            <div key={index} className="doubleList__line">
              <div className="doubleList__item">
                <div>{capitalise(item[Object.keys(item)[0]])}</div>
                <div>{capitalise(item[Object.keys(item)[1]])}</div>
              </div>
            </div>
          ))}
      {!list.length && <p className="doubleList__message">No names found.</p>}
    </div>
  );
};

export default DoubleList;
