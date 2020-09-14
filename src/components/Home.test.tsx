import React from "react";
import { shallow } from "../Enzyme";
import Home from "./Home";

const options = ["english", "turkish", "spanish"];
const lang1 = "english";
const lang2 = "turkish";
const setLang1 = jest.fn();
const setLang2 = jest.fn();
const gender = "male";
const setGender = jest.fn();
const setCurrentComponent = jest.fn();

describe("Home", () => {
  const component = shallow(
    <Home
      options={options}
      lang1={lang1}
      lang2={lang2}
      setLang1={setLang1}
      setLang2={setLang2}
      gender={gender}
      setGender={setGender}
      setCurrentComponent={setCurrentComponent}
    />
  );
  it("should contain wrapper div", () => {
    expect(component.find(".home__wrapper")).toHaveLength(1);
  });
  it("should contain h1", () => {
    expect(component.find("h1")).toHaveLength(1);
  });
  it("should display an instruction", () => {
    expect(component.find("h2").text()).toContain("Choose");
  });
  it("should render Search component", () => {
    expect(component.find("Search")).toHaveLength(1);
  });
});
