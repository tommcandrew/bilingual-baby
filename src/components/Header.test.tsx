import React from "react";
import { shallow } from "../Enzyme";
import Header from "./Header";

const setCurrentComponent = jest.fn();

describe("Header", () => {
  const component = shallow(
    <Header setCurrentComponent={setCurrentComponent} />
  );
  it("should contain a wrapper div", () => {
    expect(component.find(".header__wrapper")).toHaveLength(1);
  });
  it("should contain the title", () => {
    expect(component.text()).toContain("Bilingual Baby Name Finder");
  });
  it("should change component when clicked on ", () => {
    const title = component.find(".header__title");
    title.simulate("click");
    expect(setCurrentComponent).toHaveBeenCalledWith("Home");
  });
});
