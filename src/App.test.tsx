import React from "react";
import { shallow } from "./Enzyme";
import App from "./App";

describe("App", () => {
  it("should render Home component", () => {
    const component = shallow(<App />);
    expect(component.find("Home")).toHaveLength(1);
  });
});
