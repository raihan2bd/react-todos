import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from './Todo';
import classes from './Todos.module.css';

const Todos = ({ threadId }) => {
  const todoThreads = useSelector((state) => state.threads.todoThreads);

  const { todos } = todoThreads.find((thread) => thread.id === threadId) || [];

  let todosContent = <p>No Todos found Please Add a new One!</p>;
  if (todos.length > 0) {
    todosContent = todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        threadId={todo.threadId}
        title={todo.title}
        isCompleted={todo.isCompleted}
      />
    ));
  }
  return <ul className={classes.todos}>{todosContent}</ul>;
};

Todos.propTypes = {
  threadId: PropTypes.string.isRequired,
};

export default Todos;
