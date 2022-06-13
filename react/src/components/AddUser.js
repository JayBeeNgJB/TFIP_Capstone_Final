import React, { useRef } from 'react';

import classes from './AddUser.module.css';

function AddUser(props) {
  const fNameRef = useRef('');
  const lNameRef = useRef('');
  const emailRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const user = {
      fName: fNameRef.current.value,
      lName: lNameRef.current.value,
      email: emailRef.current.value,
    };

    props.onAddUser(user);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='fName'>First Name</label>
        <input type='text' id='fName' ref={fNameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='lName'>Last Name</label>
        <input type='text' id='lName' ref={lNameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' ref={emailRef} />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default AddUser;
