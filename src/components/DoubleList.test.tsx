import React from "react";
import { shallow } from "../Enzyme";
import DoubleList from "./DoubleList";

const list = [
  { english: "thomas", turkish: "tolga" },
  { english: "brian", turkish: "berk" },
  { english: "sally", turkish: "salha" },
];

const currentListName = "same";

describe("DoubleList", () => {
  const component = shallow(
    <DoubleList list={list} currentListName={currentListName} />
  );
  it("should contain wrapper div", () => {
    expect(component.find(".doubleList__wrapper")).toHaveLength(1);
  });
  it("should render same number of items as in list", () => {
    expect(component.find(".doubleList__item")).toHaveLength(list.length);
  });
  // it("should display message if there are no list items", () => {
  //   expect(component.find(".doubleList__message")).toHaveLength(1);
  // });
  it("should render radio buttons", () => {
    expect(component.find(".doubleList__radio")).toHaveLength(1);
  });
});
