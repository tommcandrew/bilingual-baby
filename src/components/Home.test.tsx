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
  it("should render Header component", () => {
    expect(component.find("Header")).toHaveLength(1);
  });
  it("should display an instruction", () => {
    expect(component.find("h2").text()).toContain("Choose");
  });
  it("should render two DropDown components for languages", () => {
    expect(component.find("DropDown")).toHaveLength(2);
  });
  it("should render one Toggle component for gender", () => {
    expect(component.find("Toggle")).toHaveLength(1);
  });
  it("should render a search button", () => {
    expect(component.find(".home__search")).toHaveLength(1);
  });
  it("should call setCurrentComponent function when search button is clicked", () => {
    const button = component.find(".home__search");
    button.simulate("click");
    expect(setCurrentComponent).toHaveBeenCalledWith("Results");
  });
});
