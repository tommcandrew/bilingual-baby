import React from "react";
import { shallow } from "../Enzyme";
import DropDown from "./DropDown";
import { capitalise } from "../utils/capitalise";

const options = ["english", "turkish", "spanish"];
const selectedOption = "english";
const selectOption = jest.fn();

describe("DropDown", () => {
  let component = shallow(
    <DropDown
      options={options}
      selectedOption={selectedOption}
      selectOption={selectOption}
      disabledOption={"turkish"}
    />
  );
  it("should contain a wrapper div", () => {
    expect(component.find(".dropDown__wrapper")).toHaveLength(1);
  });
  it("should contain a dropDown__display component", () => {
    expect(component.find(".dropDown__display")).toHaveLength(1);
  });
  it("should not display options list by default", () => {
    expect(component.find(".dropDown__list")).toHaveLength(0);
  });
  it("should display options list after clicking on display", () => {
    const button = component.find(".dropDown__display");
    button.simulate("click");
    expect(component.find(".dropDown__list")).toHaveLength(1);
  });
  it("should display list with same number of items as options prop", () => {
    expect(component.find(".dropDown__option")).toHaveLength(options.length);
  });
  it("should display selected option in display component", () => {
    expect(component.find(".dropDown__display").text()).toContain(
      capitalise(selectedOption)
    );
  });
  it("should not display options list after clicking on option", () => {
    const option = component.find(".dropDown__option").at(0);
    option.simulate("click");
    expect(component.find(".dropDown__list")).toHaveLength(0);
  });
  it("should call the select option function with the selected option on click", () => {
    const button = component.find(".dropDown__display");
    button.simulate("click");
    const option = component.find(".dropDown__option").at(0);
    const optionText = option.text();
    option.simulate("click");
    expect(selectOption).toHaveBeenCalledWith(optionText.toLowerCase());
  });
});
