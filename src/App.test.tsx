import React from "react";
import { shallow } from "./Enzyme";
import App from "./App";

describe("App", () => {
  const component = shallow(<App />);
  it("should contain wrapper component", () => {
    expect(component.find(".app__wrapper")).toHaveLength(1);
  });
  it("should render Home component", () => {
    expect(component.find("Home")).toHaveLength(1);
  });
  it("should not render Results component by default ", () => {
    expect(component.find("Results")).toHaveLength(0);
  });
});
