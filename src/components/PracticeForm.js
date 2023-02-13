import React from 'react';
import classes from './NewMeetupForm.module.css';
function PracticeForm() {
    return(
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='title'>
                    Meetup Title
                    <input type='text' required id='title' />
                </label>
            </div>
        </form>
    )
}

export default PracticeForm;