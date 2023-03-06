import React from "react";
import CreateLog from "./CreateLog";
import { useState, useEffect } from "react";
import TableEntry from "./TableEntry";
import "./MainPage.css";

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPracticeData, setLoadedPracticeData] = useState([]);

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
  }, []);

  if (isLoading) {
    //currently, this is triggering because there's no response from the database. however, use ! to get the normal return when hard coding
    return (
      <div>
        <CreateLog />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <CreateLog />
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
