import React from "react";
import "./TableEntry.css";

function TableEntry({ day, month, year, duration, description }) {
  const displayMonth = parseInt(month, 10) + 1;
  const displayDay = parseInt(day, 10);
  const displayYear = year != null ? year : "";

  return (
    <div className="container">
      <div>
        {displayMonth}/{displayDay}
        {displayYear ? `/${displayYear}` : ""}
      </div>
      <div>{duration}</div>
      <div className="description">{description}</div>
    </div>
  );
}

export default TableEntry;
