import React from 'react';
import Profile from './Profile';
import useForceUpdate from './Profile';

import classes from './Task.module.css';

function deleteButton(name){
  // console.log("del1", name)
  // console.log("in delete")
  // console.log("del2", name)
  const taskId = {'taskId': name}

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskId)
  };
  // console.log("json", JSON.stringify(taskId))
  const response = fetch('http://localhost:5000/api/delTask', requestOptions);
  // const data = await response.json();
  // console.log(data);
}

const Task = (props) => {
  // console.log("list", props)
  return (
    <li className={classes.task}>
      
        {/* <h4>{props.taskId}</h4> */}
        <h2>{props.taskName}</h2>
        <h3>{props.description}</h3>
        <h3>Due on: {props.due}</h3>
        <button class="button button1" onClick={() => { deleteButton(props.taskId); ;} }>Delete</button>

    </li>
  );
};

export default Task;
