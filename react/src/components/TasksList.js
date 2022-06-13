import React from 'react';

import Movie from './Task';
import classes from './TasksList.module.css';

const TaskList = (props) => {
  // console.log("list2", props.tasks)
  return (
    <ul className={classes['task-list']}>
      {props.tasks.map((task) => (
        <Movie
          key = {task.taskId}
          taskId={task.taskId}
          taskName={task.taskName}
          description={task.description}
          due={task.dueDate}
          status={task.taskStatus}
        />
      ))}
    </ul>
  );
};

export default TaskList;


