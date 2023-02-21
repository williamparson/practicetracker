import React from "react";
function TableEntry(props) {
  return (
    <div>
      <h1>{props.month}</h1>
      <h1>{props.date}</h1>
      <h1>{props.duration}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}
export default TableEntry;
