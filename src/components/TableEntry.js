import React from "react";
function TableEntry(props) {
  return (
    <div>
      <h2>
        {props.month}/{props.date} {props.duration} {props.description}
      </h2>
    </div>
  );
}
export default TableEntry;
