import React, { useState } from "react";
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

  return (
    <div
      className="dropDown__wrapper"
      tabIndex={0}
      onBlur={() => setListOpen(false)}
    >
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
