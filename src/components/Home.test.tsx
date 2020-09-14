import React from "react";
import { shallow } from "../Enzyme";
import Home from "./Home";

describe("Home", () => {
  it("should contain wrapper div", () => {
    const component = shallow(<Home />);
    expect(component.find(".home__wrapper")).toHaveLength(1);
  });
  it("should render Header component", () => {
    const component = shallow(<Home />);
    expect(component.find("Header")).toHaveLength(1);
  });
});
