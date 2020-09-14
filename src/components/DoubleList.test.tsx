import React from "react";
import { shallow } from "../Enzyme";
import DoubleList from "./DoubleList";

const list = [
  { english: "thomas", turkish: "tolga" },
  { english: "brian", turkish: "berk" },
  { english: "sally", turkish: "salha" },
];

describe("DoubleList", () => {
  const component = shallow(<DoubleList list={list} />);
  it("should contain wrapper div", () => {
    expect(component.find(".doubleList__wrapper")).toHaveLength(1);
  });
  it("should render same number of items as in list", () => {
    expect(component.find(".doubleList__item")).toHaveLength(list.length);
  });
});
