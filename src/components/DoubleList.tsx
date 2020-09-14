import React from "react";

type DoubleListProps = {
  list: object[];
};

const DoubleList = ({ list }: DoubleListProps) => {
  return (
    <div className="doubleList__wrapper">
      {list.map((item, index) => (
        <div key={index} className="doubleList__item"></div>
      ))}
    </div>
  );
};

export default DoubleList;
