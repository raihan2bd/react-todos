import PropTypes from 'prop-types';
import { FaRegTrashAlt, FaRegEdit, FaRegPlusSquare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../redux/ui/uiSlice';
import AddAndUpdate from '../Forms/AddAndUpdate';

import Todos from '../Todos/Todos';
import Button from '../UI/Button';
import CircelProgress from '../UI/CircleProgress';
import Modal from '../UI/Modals/Modal';
import classes from './TodoThread.module.css';

const TodoThread = ({
  id, title, totalTodos, finishedTodos, percentage,
}) => {
  const showEditThreadModal = useSelector(
    (state) => state.ui.showEditThreadModal,
  );
  const showAddTodoModal = useSelector((state) => state.ui.showAddTodoModal);
  const dispatch = useDispatch();

  const threadClasses = totalTodos - finishedTodos === 0
    ? `${classes.todo_thread} ${classes.completed}`
    : classes.todo_thread;

  return (
    <li id={id} className={threadClasses}>
      <div className={classes.thread_info}>
        <div className={classes.thread_details}>
          <h3 className={classes.thread_title}>{title}</h3>
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
            onClick={() => dispatch(uiActions.openEditThreadModal())}
            extraClass={classes.btn_actions}
          >
            <FaRegEdit />
          </Button>
          <Button
            onClick={() => dispatch(uiActions.openAddTodoModal())}
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
      {showEditThreadModal && (
        <Modal isPromt>
          <AddAndUpdate action="edit-thread" data={{ id, title }} />
        </Modal>
      )}
      {showAddTodoModal && (
        <Modal isPromt>
          <AddAndUpdate action="add-todo" data={{ id }} />
        </Modal>
      )}
    </li>
  );
};

TodoThread.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  totalTodos: PropTypes.number.isRequired,
  finishedTodos: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default TodoThread;
