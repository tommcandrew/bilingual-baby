import React from "react";

type ToggleProps = {
  selectedOption: string;
  toggle: () => void;
};

const Toggle = ({ selectedOption, toggle }: ToggleProps) => {
  return (
    <div
      className={`toggle__wrapper toggle__wrapper--${selectedOption}`}
      onClick={toggle}
    >
      <div className="toggle__switch"></div>
    </div>
  );
};

export default Toggle;
