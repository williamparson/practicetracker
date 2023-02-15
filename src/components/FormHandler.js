import PracticeForm from "./PracticeForm";
import React from "react";
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
