import React from "react";
import { shallow } from "../Enzyme";
import SingleList from "./SingleList";

// const list = ["thomas", "nildeniz", "nildeniz"];
const list = [];

describe("SingleList", () => {
  const component = shallow(<SingleList list={list} />);
  it("should contain wrapper div", () => {
    expect(component.find(".singleList__wrapper")).toHaveLength(1);
  });
  it("should render all list items", () => {
    expect(component.find(".singleList__item")).toHaveLength(list.length);
  });
  it("should display message if there are no list items", () => {
    expect(component.find(".singleList__message")).toHaveLength(1);
  });
});
