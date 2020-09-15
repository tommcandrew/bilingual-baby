import React from "react";
import DropDown from "./DropDown";
import Toggle from "./Toggle";

type SearchProps = {
  options: string[];
  lang1: string;
  lang2: string;
  setLang1: (lang1: string) => void;
  setLang2: (lang2: string) => void;
  setGender: (gender: string) => void;
  gender: string;
  setCurrentComponent: (currentComponent: string) => void;
};

const Search = ({
  options,
  lang1,
  lang2,
  setLang1,
  setLang2,
  gender,
  setGender,
  setCurrentComponent,
}: SearchProps) => {
  return (
    <div className="search__wrapper">
      <div className="search__dropDowns">
        <DropDown
          options={options}
          selectedOption={lang1}
          selectOption={setLang1}
          disabledOption={lang2}
        />
        <DropDown
          options={options}
          selectedOption={lang2}
          selectOption={setLang2}
          disabledOption={lang1}
        />
      </div>
      <Toggle
        toggle={() => setGender(gender === "male" ? "female" : "male")}
        selectedOption={gender}
        setOption={setGender}
      />
      <button
        className="search__button"
        onClick={() => setCurrentComponent("Results")}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
