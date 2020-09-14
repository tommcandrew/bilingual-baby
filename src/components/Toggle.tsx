import React from "react";

type ToggleProps = {
  selectedOption: string;
  selectOption: (option: string) => void;
};

const Toggle = ({ selectedOption, selectOption }: ToggleProps) => {
  return (
    <div className={`toggle__wrapper toggle__wrapper--${selectedOption}`}>
      <div className="toggle__switch"></div>
    </div>
  );
};

export default Toggle;
