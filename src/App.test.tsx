import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render hello world heading", () => {
    const component = shallow(<App />);
    expect(component.text()).toContain("Hello World");
  });
});
