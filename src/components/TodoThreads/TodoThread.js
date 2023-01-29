import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaRegTrashAlt, FaRegEdit, FaRegPlusSquare } from 'react-icons/fa';

import { threadSliceActions } from '../../redux/todoThreads/todoThreads';
import { todoSliceActions } from '../../redux/todos/todos';
import AddAndUpdate from '../Forms/AddAndUpdate';
import Todos from '../Todos/Todos';
import Button from '../UI/Button';
import CircelProgress from '../UI/CircleProgress';
import Modal from '../UI/Modals/Modal';
import classes from './TodoThread.module.css';

const TodoThread = ({
  id, title, totalTodos, finishedTodos, percentage,
}) => {
  const [showEditThreadModal, setshowEditThreadModal] = useState(false);
  const [showAddTodoModal, setshowAddTodoModal] = useState(false);

  const dispatch = useDispatch();

  const showEditModalHandler = () => setshowEditThreadModal(true);
  const closeEditModalHandler = () => setshowEditThreadModal(false);
  const showAddTodoModalHandler = () => setshowAddTodoModal(true);
  const closeShowAddTodoModallHandler = () => setshowAddTodoModal(false);
  const removeThreadHandler = () => {
    dispatch(todoSliceActions.removeTodoByThread(id));
    dispatch(threadSliceActions.removeThread(id));
  };

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
            onClick={removeThreadHandler}
            extraClass={classes.btn_actions}
          >
            <FaRegTrashAlt />
          </Button>
          <Button
            onClick={showEditModalHandler}
            extraClass={classes.btn_actions}
          >
            <FaRegEdit />
          </Button>
          <Button
            onClick={showAddTodoModalHandler}
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
          <AddAndUpdate
            action="edit-thread"
            onClose={closeEditModalHandler}
            data={{ id, title }}
          />
        </Modal>
      )}
      {showAddTodoModal && (
        <Modal isPromt>
          <AddAndUpdate
            action="add-todo"
            onClose={closeShowAddTodoModallHandler}
            data={{ id }}
          />
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
