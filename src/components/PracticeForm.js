import React, { useState } from "react";
import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PracticeFormModal from "./PracticeFormModal";

function PracticeForm() {
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();
  const durationInputRef = useRef();
  const [startDate, setStartDate] = useState(new Date());
  //below will handle interaction with backend api
  function formSubmitHandler() {}
  //this function stores inputs after submission
  function submitHandler(event) {
    event.preventDefault();

    const enteredDate = dateInputRef.current.value;
    const enteredDuration = durationInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const practiceData = {
      date: enteredDate,
      duration: enteredDuration,
      description: enteredDescription,
    };

    console.log(practiceData);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='date'>Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          ref={dateInputRef}
        />
        <label htmlFor='duration'>How many minutes you practiced for: </label>
        <input type='number' ref={dateInputRef} />
        <label htmlFor='description'>Describe what you practiced:</label>
        <textarea
          id='description'
          required
          rows='5'
          ref={descriptionInputRef}
        ></textarea>
      </div>
    </form>
  );
}

export default PracticeForm;
