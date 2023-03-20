import PracticeForm from "./PracticeForm";
import React from "react";
/*
Some of the processes in this code were adapted from those found in the
Academind React tutorial: https://youtu.be/Dorf8i6lCuk
Accessed January 2023
*/
function FormHandler() {
  function addPracticeHandler(practiceData) {
    fetch(
      "https://computer-science-ia-53874-default-rtdb.firebaseio.com/practices.json",
      {
        method: "POST",
        body: JSON.stringify(practiceData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return <PracticeForm onAddPractice={addPracticeHandler} />;
}

export default FormHandler;
