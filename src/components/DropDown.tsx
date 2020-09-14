import React, { useState } from "react";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DropDownProps = {
  options: string[];
  selectedOption: string;
  selectOption: (option: string) => void;
};

const DropDown = ({
  options = [],
  selectedOption,
  selectOption,
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
    <div className="dropDown__wrapper">
      <button type="button" className="dropDown__display" onClick={toggleList}>
        {selectedOption}
        {listOpen ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
        )}
      </button>
      {listOpen && (
        <div className="dropDown__list">
          {options.map((option, index) => (
            <button
              key={index}
              className="dropDown__option"
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
