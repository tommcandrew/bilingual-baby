import React from "react";
import { shallow } from "../Enzyme";
import Results from "./Results";

const options = ["english", "turkish", "spanish"];
const lang1 = "english";
const lang2 = "turkish";
const setLang1 = jest.fn();
const setLang2 = jest.fn();
const gender = "male";
const setGender = jest.fn();
const setCurrentComponent = jest.fn();
const langPair = "enTr";

describe("Results", () => {
  const component = shallow(
    <Results
      options={options}
      lang1={lang1}
      lang2={lang2}
      setLang1={setLang1}
      setLang2={setLang2}
      gender={gender}
      setGender={setGender}
      setCurrentComponent={setCurrentComponent}
      langPair={langPair}
    />
  );
  it("should contain wrapper div", () => {
    expect(component.find(".results__wrapper")).toHaveLength(1);
  });
  it("should render Header component", () => {
    expect(component.find("Header")).toHaveLength(1);
  });
  it("should render list component", () => {
    expect(component.find(".results__list")).toHaveLength(1);
  });
  it("should render SingleList component", () => {
    expect(component.find("SingleList")).toHaveLength(1);
  });
  it("should contain 3 tab elements", () => {
    expect(component.find(".results__tab")).toHaveLength(3);
  });
  it("should have the selected classname on first tab", () => {
    expect(
      component.find(".results__tab").at(0).hasClass("results__tab--selected")
    ).toBe(true);
  });
  it("should give the selected classname to tab after click", () => {
    const thirdTab = component.find(".results__tab").at(2);
    thirdTab.simulate("click");
    expect(
      component.find(".results__tab").at(2).hasClass("results__tab--selected")
    ).toBe(true);
  });
  it("should render DoubleList component if currentListName is Similar or Equivalent", () => {
    const secondTab = component.find(".results__tab").at(1);
    secondTab.simulate("click");
    expect(component.find("DoubleList")).toHaveLength(1);
  });
});
