import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render Home component", () => {
    const component = shallow(<App />);
    expect(component.find("Home")).toHaveLength(1);
  });
});
