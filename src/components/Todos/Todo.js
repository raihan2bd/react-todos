import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import Modal from '../UI/Modals/Modal';
import AddAndUpdate from '../Forms/AddAndUpdate';
// import { uiActions } from '../../redux/ui/uiSlice';
import Button from '../UI/Button';
import classes from './Todo.module.css';
import { todoSliceActions } from '../../redux/todos/todos';

const Todo = ({
  id, threadId, title, isCompleted,
}) => {
  const [showModal, setShowModal] = useState(false);
  const completedRef = useRef();

  const dispatch = useDispatch();

  const showModalHandler = () => setShowModal(true);
  const closeShowModalHandler = () => setShowModal(false);
  const onChangeCopletedHandler = () => {
    dispatch(
      todoSliceActions.updateProgress({
        id,
        isCompleted: completedRef.current.checked,
      }),
    );
  };

  const todoClasses = isCompleted
    ? `${classes.todo} ${classes.completed}`
    : classes.todo;
  return (
    <li className={todoClasses}>
      <input
        ref={completedRef}
        onChange={onChangeCopletedHandler}
        type="checkbox"
        checked={isCompleted}
      />
      <h3>{title}</h3>
      <div className={classes.actions}>
        <Button onClick={showModalHandler} extraClass={classes.btn_actions}>
          <FaRegEdit />
        </Button>
        <Button
          onClick={() => dispatch(todoSliceActions.removeTodo(id))}
          extraClass={classes.btn_actions}
        >
          <FaRegTrashAlt />
        </Button>
      </div>
      {showModal && (
        <Modal isPromt>
          <AddAndUpdate
            action="edit-todo"
            onClose={closeShowModalHandler}
            data={{
              id,
              threadId,
              title,
              isCompleted,
            }}
          />
        </Modal>
      )}
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  threadId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default Todo;
