import React from "react";
import { shallow } from "../Enzyme";
import Home from "./Home";

describe("Home", () => {
  const component = shallow(<Home />);
  it("should contain wrapper div", () => {
    expect(component.find(".home__wrapper")).toHaveLength(1);
  });
  it("should render Header component", () => {
    expect(component.find("Header")).toHaveLength(1);
  });
  it("should display an instruction", () => {
    expect(component.find("h2").text()).toContain("Choose");
  });
  it("should render two DropDown components", () => {
    expect(component.find("DropDown")).toHaveLength(2);
  });
});
