import React from 'react';
import PropTypes from 'prop-types';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';

import Button from '../UI/Button';
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
      <Button
        onClick={() => console.log('Edit Button is click')}
        extraClass={classes.btn_actions}
      >
        <FaRegEdit />
      </Button>
      <Button
        onClick={() => console.log('Delete Button is clicked', id, threadId)}
        extraClass={classes.btn_actions}
      >
        <FaRegTrashAlt />
      </Button>
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
