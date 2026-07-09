import React, { useState } from "react";
import PracticeFormBackdrop from "./PracticeFormBackdrop";
import PracticeFormModal from "./PracticeFormModal";

function CreateLog({ onPracticeAdded }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function formOpen() {
    setModalIsOpen(true);
  }

  function formClose() {
    setModalIsOpen(false);
  }

  function handlePracticeAdded() {
    formClose();
    if (onPracticeAdded) {
      onPracticeAdded();
    }
  }

  return (
    <div>
      <button className="btn" onClick={formOpen}>
        Add practice
      </button>
      {modalIsOpen && (
        <>
          <PracticeFormBackdrop onCancel={formClose} />
          <PracticeFormModal
            onCancel={formClose}
            onPracticeAdded={handlePracticeAdded}
          />
        </>
      )}
    </div>
  );
}

export default CreateLog;
