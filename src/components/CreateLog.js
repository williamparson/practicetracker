import React from "react";
import { useState, useEffect } from "react";
import PracticeFormBackdrop from "./PracticeFormBackdrop";
import PracticeFormModal from "./PracticeFormModal";
import PracticeForm from "./PracticeForm";
/*
Some of the processes in this code were adapted from those found in the
Academind React tutorial: https://youtu.be/Dorf8i6lCuk
Accessed January 2023
*/
function CreateLog(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function formOpen() {
    setModalIsOpen(true);
  }
  function formClose() {
    setModalIsOpen(false);
  }
  useEffect(() => {
    props.onVariableChange(modalIsOpen);
  }, [!modalIsOpen]);

  return (
    <div>
      <button className="btn" onClick={formOpen}>
        Add practice
      </button>
      {modalIsOpen && (
        <PracticeFormModal
          onCancel={formClose}
          onConfirm={formClose}
          submitHandler={PracticeForm.submitHandler}
        />
      )}
      {modalIsOpen && <PracticeFormBackdrop onCancel={formClose} />}
    </div>
  );
}
//{modalIsOpen && <PracticeFormModal />} means that if the first is true, then render the modal (the second is returned). otherwise, do nothing. This operator works because the second will
export default CreateLog;
