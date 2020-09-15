import React, { useState, useEffect } from "react";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalise } from "../utils/capitalise";

type DropDownProps = {
  options: string[];
  selectedOption: string;
  selectOption: (option: string) => void;
  disabledOption: string;
};

const DropDown = ({
  options = [],
  selectedOption,
  selectOption,
  disabledOption,
}: DropDownProps) => {
  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const handleSelectOption = (option: string) => {
    selectOption(option);
    setListOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      const ignoreElements = [
        "dropDown__arrow",
        "dropDown__option",
        "dropDown__display",
      ];
      const target: any = e.target;
      for (let i = 0; i < target.classList.length; i++) {
        if (ignoreElements.includes(target.classList[i])) {
          return;
        }
      }
      setListOpen(false);
    });
  }, []);

  return (
    <div className="dropDown__wrapper">
      <button type="button" className="dropDown__display" onClick={toggleList}>
        {capitalise(selectedOption)}
        {listOpen ? (
          <FontAwesomeIcon icon={faAngleUp} className="dropDown__arrow" />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} className="dropDown__arrow" />
        )}
      </button>
      {listOpen && (
        <div className="dropDown__list">
          {options.map((option, index) => (
            <button
              key={index}
              className="dropDown__option"
              onClick={() => handleSelectOption(option)}
              disabled={option === disabledOption}
            >
              {capitalise(option)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
