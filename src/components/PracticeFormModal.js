import React from "react";
import PracticeForm from "./PracticeForm";
function PracticeFormModal(props) {
  function cancelHandler() {
    props.onCancel(); 
    //this is an alternative to handling different things within a self-made component
  }
  //these functions we create can be forwarded if necessary (like we did with the backdrop) or executed right in the file whose state they affect.
  function confirmHandler() {
    props.submitHandler();
    props.onConfirm();
  }
  return (
    <div className='modal'>
      <p>Practice Information</p>
      <PracticeForm />
      <button className='btn btn--alt' onClick={cancelHandler}>
        Cancel
      </button>
      <button className='btn' onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default PracticeFormModal;
