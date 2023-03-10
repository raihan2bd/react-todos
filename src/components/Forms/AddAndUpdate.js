/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';

import { threadSliceActions } from '../../redux/todoThreads/todoThreads';
import { todoSliceActions } from '../../redux/todos/todos';
import Button from '../UI/Button';
import classes from './AddAndUpdate.module.css';

const AddAndUpdate = ({ action, onClose, data }) => {
  const [title, setTitle] = useState(
    action === 'edit-thread' || action === 'edit-todo' ? data.title : '',
  );
  const [isFormTouched, setIsFormTouched] = useState(false);
  const dispatch = useDispatch();
  let errorMessage = null;
  if ((action === 'add-thread' || action === 'edit-thread') && isFormTouched) {
    if (title.trim().length < 3 || title.trim().length > 35) {
      errorMessage = 'Title is required and it should be 3 char to 35 char Long!!';
    }
  } else if (
    (title.trim().length < 3 || title.trim().length > 55)
    && isFormTouched
  ) {
    errorMessage = 'Title is required and it should be 3 char to 55 char Long!!';
  } else {
    errorMessage = null;
  }

  const titleChangeHandler = (event) => {
    setIsFormTouched(true);
    setTitle(event.target.value);
  };

  const blurChangeHandler = () => {
    setIsFormTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsFormTouched(true);
    if (errorMessage || !isFormTouched) {
      return;
    }

    if (action === 'add-thread') {
      dispatch(threadSliceActions.addThread({ id: uuidV4(), title }));
    } else if (action === 'edit-thread') {
      dispatch(threadSliceActions.editThread({ id: data.id, title }));
    } else if (action === 'add-todo') {
      dispatch(
        todoSliceActions.addTodo({
          id: uuidV4(),
          threadId: data.id,
          title,
          isCompleted: false,
        }),
      );
    } else if (action === 'edit-todo') {
      dispatch(
        todoSliceActions.editTodo({
          id: data.id,
          threadId: data.threadId,
          title,
          isCompleted: false,
        }),
      );
    }
    onClose();
  };

  const inputClasses = errorMessage
    ? `${classes.form_control} ${classes.input_invalid}`
    : classes.form_control;

  const formContent = (
    <div className={classes.form_container}>
      {action === 'add-thread' && <h3>Add a New Thread</h3>}
      {action === 'edit-thread' && <h3>Edit Thread</h3>}
      {action === 'add-todo' && <h3>Add a New Todo</h3>}
      {action === 'edit-todo' && <h3>Edit Todo</h3>}
      <div className={inputClasses}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Please Entered your title here"
            value={title}
            onChange={titleChangeHandler}
            onBlur={blurChangeHandler}
          />
        </label>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className={classes.action}>
        <Button extraClass={classes.btn_cancel} onClick={onClose}>
          Cancel
        </Button>
        <Button extraClass={classes.btn_submit} onClick={submitHandler}>
          {action === 'add-thread' || action === 'add-todo'
            ? 'Submit'
            : 'Update'}
        </Button>
      </div>
    </div>
  );
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      {formContent}
    </form>
  );
};

export default AddAndUpdate;
