import React from "react";

type SingleListProps = {
  list: string[];
};

const SingleList = ({ list = [] }: SingleListProps) => {
  return (
    <div className="singleList__wrapper">
      {typeof list[0] === "string" &&
        list.length &&
        list.map((item, index) => (
          <div key={index} className="singleList__item">
            {item}
          </div>
        ))}
      {!list.length && <p className="singleList__message">No names found.</p>}
    </div>
  );
};

export default SingleList;
