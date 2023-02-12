import React from "react";
function PracticeFormBackdrop(props) {
  return <div className='backdrop' onClick={props.onCancel} />;
}

export default PracticeFormBackdrop;
