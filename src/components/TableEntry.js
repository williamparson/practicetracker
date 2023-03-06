import React from "react";
import "./TableEntry.css";

function TableEntry(props) {
  return (
    <div className="container">
      <div>
        {(parseInt(props.month) + 1).toString()}/{(parseInt(props.date) + 1).toString()}
      </div>
      <div>{props.duration}</div>
      <div className="description">{props.description}</div>
    </div>
  );
}

export default TableEntry;
