import React from 'react';

import Movie from './User';
import classes from './UsersList.module.css';

const UserList = (props) => {
  return (
    <ul className={classes['users-list']}>
      {props.users.map((user) => (
        <Movie
          key={user.taskId}
          name={user.taskName}
          email={user.description}
          due={user.dueDate}
        />

      ))}
    </ul>
  );
};

export default UserList;
