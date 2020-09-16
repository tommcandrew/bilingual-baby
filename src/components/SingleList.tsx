import React from "react";
import { capitalise } from "../utils/capitalise";

type SingleListProps = {
  list: string[];
};

const SingleList = ({ list = [] }: SingleListProps) => {
  return (
    <div className="singleList__wrapper">
      {typeof list[0] === "string" &&
        list.length &&
        list.map((item, index) => (
          <div key={index} className="singleList__line">
            <div className="singleList__item">{capitalise(item)}</div>
          </div>
        ))}
      {!list.length && <p className="singleList__message">No names found.</p>}
    </div>
  );
};

export default SingleList;
