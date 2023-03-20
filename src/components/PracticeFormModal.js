import React from "react";
import FormHandler from "./FormHandler";
/*
Some of the processes in this code were adapted from those found in the
Academind React tutorial: https://youtu.be/Dorf8i6lCuk
Accessed January 2023
*/
function PracticeFormModal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  //these functions we create can be forwarded if necessary (like we did with the backdrop) or executed right in the file whose state they affect.
  return (
    <div className="modal">
      <p>Practice Information (click submit and then close)</p>
      <FormHandler />
      <button className="btn btn--alt" onClick={cancelHandler}>
        Close
      </button>
    </div>
  );
}

export default PracticeFormModal;
