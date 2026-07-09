import React from "react";
import FormHandler from "./FormHandler";

function PracticeFormModal({ onCancel, onPracticeAdded }) {
  return (
    <div className="modal">
      <p>Practice Information</p>
      <FormHandler onAddSuccess={onPracticeAdded} />
      <button className="btn btn--alt" onClick={onCancel}>
        Close
      </button>
    </div>
  );
}

export default PracticeFormModal;
