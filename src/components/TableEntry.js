import React from "react";
import "./TableEntry.css";

function TableEntry(props) {
  return (
    <div className="container">
      <div>
        {props.month}/{props.date}
      </div>
      <div>{props.duration}</div>
      <div className="description">{props.description}</div>
    </div>
  );
}

export default TableEntry;
