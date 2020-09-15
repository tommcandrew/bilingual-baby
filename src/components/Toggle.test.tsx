import React from "react";
import { shallow } from "../Enzyme";
import Toggle from "./Toggle";

const selectedOption = "male";
const toggle = jest.fn();
const setOption = jest.fn();

describe("Toggle", () => {
  const component = shallow(
    <Toggle
      selectedOption={selectedOption}
      toggle={toggle}
      setOption={setOption}
    />
  );
  it("should contain wrapper div", () => {
    expect(component.find(".toggle__wrapper")).toHaveLength(1);
  });
  it("should contain switch div", () => {
    expect(component.find(".toggle__switch")).toHaveLength(1);
  });
  it("should have male classname if male is selected", () => {
    expect(component.find(".toggle__inner--male")).toHaveLength(1);
  });
  it("should call toggle function when clicked", () => {
    const inner = component.find(".toggle__checkbox");
    inner.simulate("change");
    expect(toggle).toHaveBeenCalledTimes(1);
  });
});
