import React from "react";
/*
Some of the processes in this code were adapted from those found in the
Academind React tutorial: https://youtu.be/Dorf8i6lCuk
Accessed January 2023
*/
function PracticeFormBackdrop(props) {
  return <div className="backdrop" onClick={props.onCancel} />;
}

export default PracticeFormBackdrop;
