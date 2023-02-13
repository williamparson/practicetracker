import React from "react";
import { useState } from "react";
import PracticeFormBackdrop from "./PracticeFormBackdrop";
import PracticeFormModal from "./PracticeFormModal";
function CreateLog() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //This is a react hook, which can only be called in react component functions (for our purposes)
  //argument passed in here is an initial value for the state. It'll be changed depending on what sequences of buttons the user clicks later.
  //useState returns an array with exactly 2 elements, so that's how we'll define it
  //first element contains currently stored value
  //second element contains a function that is used to change the value of the function, hence the name
  function formOpen() {
    console.log("clicked the add button");
    setModalIsOpen(true);
  }
  function formClose() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <button className="btn" onClick={formOpen}>
        Add practice
      </button>
      {modalIsOpen && <PracticeFormModal onCancel={formClose} onConfirm={formClose} />}
      {modalIsOpen && (
        <PracticeFormBackdrop onCancel={formClose}/>
      )}
    </div>
  );
}
//{modalIsOpen && <PracticeFormModal />} means that if the first is true, then render the modal (the second is returned). otherwise, do nothing. This operator works because the second will
export default CreateLog;
