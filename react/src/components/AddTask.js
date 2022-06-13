import React, { useRef, useState, useCallback } from 'react';



import classes from './AddUser.module.css';

// For date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

function AddTask(props, owner) {
  const taskNameRef = useRef('');
  const descriptionRef = useRef('');
  const dueDateRef = useRef('');
  const [startDate, setStartDate] = useState(new Date());

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const task = {
      taskName: taskNameRef.current.value,
      description: descriptionRef.current.value,
      dueDate: format(new Date(startDate), 'yyyy-MM-dd'),
    };
    props.onAddTask(task);
  }
  // console.log("selected date", startDate)
  // console.log("new date", format(new Date(startDate), 'yyyy-MM-dd '))
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='taskName'>Task Name</label>
        <input type='text' id='taskName' ref={taskNameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>Description</label>
        <input type='text' id='description' ref={descriptionRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='dueDate'>Due Date</label><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        {/* <input type='text' id='dueDate' ref={dueDateRef} /> */}
      </div>      
        <button>Add Task</button>
        
        
    </form>
  );
  
}

export default AddTask;
