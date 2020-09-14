import React from "react";

type DoubleListProps = {
  list: { [key: string]: any[] }[];
};

const DoubleList = ({ list }: DoubleListProps) => {
  return (
    <div className="doubleList__wrapper">
      {list.length &&
        list.map((item, index) => (
          <div key={index} className="doubleList__item">
            <div>{item[Object.keys(item)[0]]}</div>
            <div>{item[Object.keys(item)[1]]}</div>
          </div>
        ))}
      {!list.length && <p className="doubleList__message">No names found.</p>}
    </div>
  );
};

export default DoubleList;
