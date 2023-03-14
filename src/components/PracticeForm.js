import React, { useState } from "react";
import { useRef } from "react";
import classes from "./PracticeForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PracticeForm(props) {
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();
  const durationInputRef = useRef();
  const [startDate, setStartDate] = useState(new Date());
  //below will handle interaction with backend api
  //this function stores inputs after submission
  function submitHandler(event) {
    event.preventDefault();

    const enteredMonth = startDate.getMonth();
    const enteredDay = startDate.getDate();
    const enteredDuration = durationInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const practiceData = {
      day: enteredDay,
      month: enteredMonth,
      duration: enteredDuration,
      description: enteredDescription,
    };

    console.log(practiceData);
    
    props.onAddPractice(practiceData);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="date">Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          ref={dateInputRef}
        />
        <label htmlFor="duration">How many minutes you practiced for: </label>
        <input type="number" ref={durationInputRef} />
        <label htmlFor="description">Describe what you practiced:</label>
        <textarea
          id="description"
          required
          rows="5"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default PracticeForm;
