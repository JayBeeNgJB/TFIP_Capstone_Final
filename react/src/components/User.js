import React from 'react';

import classes from './User.module.css';

const User = (props) => {
  return (
    <li className={classes.user}>
      <h2>{props.name}</h2>
      <h3>{props.email}</h3>
      <h3>Due on: {props.due}</h3>
    </li>
  );
};

export default User;
