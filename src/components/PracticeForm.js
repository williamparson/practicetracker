import React, { useState } from "react";
import classes from "./PracticeForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PracticeForm({ onAddPractice }) {
  const [startDate, setStartDate] = useState(new Date());

  function submitHandler(event) {
    event.preventDefault();

    const form = event.target;
    const duration = form.duration.value.trim();
    const description = form.description.value.trim();

    if (!duration || Number(duration) <= 0) {
      return;
    }

    const practiceData = {
      day: startDate.getDate(),
      month: startDate.getMonth(),
      year: startDate.getFullYear(),
      duration: Number(duration),
      description,
    };

    onAddPractice(practiceData);
    form.reset();
    setStartDate(new Date());
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="date">Date</label>
        <DatePicker
          id="date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          maxDate={new Date()}
        />
        <label htmlFor="duration">How many minutes you practiced for:</label>
        <input
          id="duration"
          name="duration"
          type="number"
          min="1"
          required
        />
        <label htmlFor="description">Describe what you practiced:</label>
        <textarea
          id="description"
          name="description"
          required
          rows="5"
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default PracticeForm;
