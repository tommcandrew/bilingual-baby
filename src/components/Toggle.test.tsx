import React from "react";
import { shallow } from "../Enzyme";
import Toggle from "./Toggle";

const selectedOption = "male";
const toggle = jest.fn();

describe("Toggle", () => {
  const component = shallow(
    <Toggle selectedOption={selectedOption} toggle={toggle} />
  );
  it("should contain wrapper div", () => {
    expect(component.find(".toggle__wrapper")).toHaveLength(1);
  });
  it("should contain wrapper div", () => {
    expect(component.find(".toggle__wrapper")).toHaveLength(1);
  });
  it("should contain switch div", () => {
    expect(component.find(".toggle__switch")).toHaveLength(1);
  });
  it("should have male classname if male is selected", () => {
    expect(component.find(".toggle__wrapper--male")).toHaveLength(1);
  });
  it("should call toggle function when clicked", () => {
    component.simulate("click");
    expect(toggle).toHaveBeenCalledTimes(1);
  });
});
