import React from "react";
function PracticeFormModal() {
  console.log("Currently rendering PracticeFormModal")
  //function formOpen() {
  //  console.log("clicked the add button");
  //}
  //<button className='btn' onClick={formOpen}>
  //Add practice
  //</button>
  return (
    <div className='modal'>
      <p>Practice Information</p>

      <button className='btn btn--alt'>Cancel</button>
      <button className='btn'>Confirm</button>
    </div>
  );
}

export default PracticeFormModal();
