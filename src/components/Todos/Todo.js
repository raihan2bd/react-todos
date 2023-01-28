import React from 'react';
import PropTypes from 'prop-types';

import classes from './Todo.module.css';

const Todo = ({
  id, threadId, title, isCompleted,
}) => (
  <li className={classes.todo}>
    <input
      type="checkbox"
      checked={isCompleted}
      onChange={() => console.log('checked')}
    />
    <h3>{title}</h3>
    <div className={classes.actions}>
      <button type="button" onClick={() => console.log('Edit button is click')}>
        Edit
      </button>
      <button
        type="button"
        onClick={() => console.log('Delete Button is clicked', id, threadId)}
      >
        Delete
      </button>
    </div>
  </li>
);

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  threadId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default Todo;
