import PropTypes from 'prop-types';
import { FaRegTrashAlt, FaRegEdit, FaRegPlusSquare } from 'react-icons/fa';

import Todos from '../Todos/Todos';
import Button from '../UI/Button';
import CircelProgress from '../UI/CircleProgress';
import classes from './TodoThread.module.css';

const TodoThread = ({
  id, name, totalTodos, finishedTodos, percentage,
}) => {
  const threadClasses = totalTodos - finishedTodos === 0
    ? `${classes.todo_thread} ${classes.completed}`
    : classes.todo_thread;

  return (
    <li id={id} className={threadClasses}>
      <div className={classes.thread_info}>
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
          <CircelProgress percentage={percentage} />
        </div>
        <div className={classes.thread_actions}>
          <Button
            onClick={() => console.log('Delete Thread Button is called!')}
            extraClass={classes.btn_actions}
          >
            <FaRegTrashAlt />
          </Button>
          <Button
            onClick={() => console.log('Edit Thread Button is called!')}
            extraClass={classes.btn_actions}
          >
            <FaRegEdit />
          </Button>
          <Button
            onClick={() => console.log('Add Thread Button is called!')}
            extraClass={classes.btn_actions}
          >
            <FaRegPlusSquare />
          </Button>
        </div>
      </div>
      <div className={classes.thread_todos}>
        <h3>Todos</h3>
        <Todos threadId={id} />
      </div>
    </li>
  );
};

TodoThread.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  totalTodos: PropTypes.number.isRequired,
  finishedTodos: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default TodoThread;
