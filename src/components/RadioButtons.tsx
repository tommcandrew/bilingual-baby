import React from "react";

type RadioButtonsProps = {
  options: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  matchType: string;
};

const RadioButtons = ({
  options,
  handleChange,
  matchType,
}: RadioButtonsProps) => {
  return (
    <div className="radioButtons__wrapper">
      {options.map((option, index) => (
        <div key={index} className="radioButtons__button">
          <input
            type="radio"
            id={option}
            name="matches"
            value={option}
            onChange={handleChange}
            checked={option === matchType}
            className="radioButtons__input"
          />
          <label htmlFor={option} className="radioButtons__label">
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
