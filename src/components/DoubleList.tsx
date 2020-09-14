import React, { useState } from "react";

type DoubleListProps = {
  list: { [key: string]: any[] }[];
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
      <div className="doubleList__radio">
        {currentListName === "similar" &&
          radioOptions.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={option}
                name="matches"
                value={option}
                onChange={handleRadioClick}
                checked={option === matchType}
              />
              <label htmlFor={option}>{option.match}</label>
            </div>
          ))}
      </div>
      {list.length &&
        list
          .filter(
            (item) =>
              Number(item.match) >= radioOptions.indexOf(matchType) + 1 ||
              !item.match
          )
          .map((item, index) => (
            <div key={index} className="doubleList__item">
              <div>{item[Object.keys(item)[0]]}</div>
              <div>{item[Object.keys(item)[1]]}</div>
            </div>
          ))}
      {!list.length && <p className="doubleList__message">No names found.</p>}
    </div>
  );
};

export default DoubleList;
