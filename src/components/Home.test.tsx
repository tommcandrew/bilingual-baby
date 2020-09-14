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
  it("should render two DropDown components for languages", () => {
    expect(component.find("DropDown")).toHaveLength(2);
  });
  it("should render one Toggle component for gender", () => {
    expect(component.find("Toggle")).toHaveLength(1);
  });
  it("should render a search button", () => {
    expect(component.find(".home__search")).toHaveLength(1);
  });
});
