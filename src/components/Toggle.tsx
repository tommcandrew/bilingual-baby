import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus, faMars } from "@fortawesome/free-solid-svg-icons";

type ToggleProps = {
  selectedOption: string;
  toggle: () => void;
  setOption: (option: string) => void;
};

const Toggle = ({ selectedOption, toggle, setOption }: ToggleProps) => {
  return (
    <div className="toggle__wrapper">
      <FontAwesomeIcon
        icon={faMars}
        title={"male"}
        className={"toggle__male"}
        onClick={() => setOption("male")}
      />
      <input
        type="checkbox"
        className="toggle__checkbox"
        id="checkbox"
        onChange={toggle}
      />
      <label
        htmlFor="checkbox"
        className={`toggle__inner toggle__inner--${selectedOption}`}
      >
        <div className="toggle__switch"></div>
      </label>
      <FontAwesomeIcon
        icon={faVenus}
        title={"female"}
        className={"toggle__female"}
        onClick={() => setOption("female")}
      />
    </div>
  );
};

export default Toggle;
