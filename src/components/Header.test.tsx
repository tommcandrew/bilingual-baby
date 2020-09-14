import React from "react";
import { shallow } from "../Enzyme";
import Header from "./Header";

describe("Header", () => {
  it("should contain a wrapper div", () => {
    const component = shallow(<Header />);
    expect(component.find(".header__wrapper")).toHaveLength(1);
  });
  it("should contain the title", () => {
    const component = shallow(<Header />);
    expect(component.text()).toContain("Bilingual Baby Name Finder");
  });
});
