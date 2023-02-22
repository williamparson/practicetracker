import React from "react";
import "./TableEntry.css";

function TableEntry(props) {
  return (
    <div className="table-entry">
      <div className="date">{props.month}/{props.date}</div>
      <div className="duration">{props.duration}</div>
      <div className="description">{props.description}</div>
    </div>
  );
}

export default TableEntry;
