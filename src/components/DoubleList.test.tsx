import React from "react";
import { shallow } from "../Enzyme";
import DoubleList from "./DoubleList";

const list = [
  { english: "thomas", turkish: "tolga" },
  { english: "brian", turkish: "berk" },
  { english: "sally", turkish: "salha" },
];

// const currentListName = "same";
const currentListName = "similar";

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
  it("should render RadioButton component if currentListName is similar", () => {
    expect(component.find("RadioButtons")).toHaveLength(1);
  });
});
