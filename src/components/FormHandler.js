import PracticeForm from "./PracticeForm";
import React from "react";
import { addPractice } from "../services/practiceStorage";

function FormHandler({ onAddSuccess }) {
  function addPracticeHandler(practiceData) {
    addPractice(practiceData).then(() => {
      if (onAddSuccess) {
        onAddSuccess();
      }
    });
  }
  return <PracticeForm onAddPractice={addPracticeHandler} />;
}

export default FormHandler;
