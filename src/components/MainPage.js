import React from "react";
import CreateLog from "./CreateLog";
import { useState, useEffect } from "react";
import TableEntry from "./TableEntry";
import "./MainPage.css";

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPracticeData, setLoadedPracticeData] = useState([]);
  const [shouldRerun, setShouldRerun] = useState(false);

  function handleChildVariableChange(value) {
    if (value === false) {
      setShouldRerun(true);
    }
  }
  useEffect(() => {
    fetch(
      "https://computer-science-ia-53874-default-rtdb.firebaseio.com/practices.json"
    )
      .then((response) => {
        return response.json(); //exists as a default function, but returns a promise
      })
      .then((data) => {
        const p = [];

        for (const key in data) {
          const practice = {
            id: key,
            ...data[key],
          };
          p.push(practice);
        }
        setIsLoading(false);
        setLoadedPracticeData(p);
      });
  }, [shouldRerun, []]);

  if (isLoading) {
    return (
      <div>
        <CreateLog onVariableChange={handleChildVariableChange} />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <CreateLog onVariableChange={handleChildVariableChange} />
      <div>
        <div className="header">
          <h1>Date</h1>
          <h1>Minutes</h1>
          <h1>Description</h1>
        </div>
        {loadedPracticeData.map((d) => {
          return (
            <div>
              <TableEntry
                date={d["day"]}
                month={d["month"]}
                description={d["description"]}
                duration={d["duration"]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MainPage;
