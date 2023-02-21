import React from "react";
import CreateLog from "./CreateLog";
import { useState } from "react";
import TableEntry from "./TableEntry";
function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPracticeData, setLoadedPracticeData] = useState([])
  fetch(
    "https://computer-science-ia-53874-default-rtdb.firebaseio.com/practices"
  )
    .then((response) => {
      return response.json(); //exists as a default function, but returns a promise
    })
    .then((data) => {
        setIsLoading(false);
        setLoadedPracticeData(data);
    });
  if (isLoading) { //currently, this is triggering because there's no response from the database. however, use ! to get the normal return when hard coding
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
      <TableEntry month = {"1"} date = {"4"} description = {"asdf"} duration = {"12"}/>
    </div>
  );
}
export default MainPage;
