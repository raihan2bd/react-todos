import PropTypes from 'prop-types';
import { FaRegTrashAlt, FaRegEdit, FaRegPlusSquare } from 'react-icons/fa';

import CircelProgress from '../UI/CircleProgress';
import classes from './TodoThread.module.css';

const TodoThread = ({
  id, name, totalTodos, finishedTodos,
}) => (
  <li id={id} className={classes.todo_thread}>
    <div className={classes.thread_details}>
      <h3 className={classes.thread_name}>{name}</h3>
      <div className={classes.thread_spec}>
        <span>
          <h4>Total Todos: </h4>
          {totalTodos}
        </span>
        <span>
          <h4>Finished Todos: </h4>
          {finishedTodos}
        </span>
      </div>
    </div>
    <div className={classes.thread_progress}>
      <CircelProgress percentage={(finishedTodos / totalTodos) * 100} />
    </div>
    <div className={classes.thread_actions}>
      <button type="button">
        <FaRegTrashAlt />
      </button>
      <button type="button">
        <FaRegEdit />
      </button>
      <button type="button">
        <FaRegPlusSquare />
      </button>
    </div>
  </li>
);

TodoThread.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  totalTodos: PropTypes.number.isRequired,
  finishedTodos: PropTypes.number.isRequired,
};

export default TodoThread;
