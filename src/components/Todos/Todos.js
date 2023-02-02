import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from './Todo';
import classes from './Todos.module.css';

const Todos = ({ threadId }) => {
  const todos = useSelector((state) => state.todos.todos);

  const filteredTodos = todos.filter((todo) => todo.threadId === threadId) || [];

  let todosContent = (
    <p className="center">No Todos found Please Add a new One!</p>
  );
  if (filteredTodos.length > 0) {
    todosContent = filteredTodos.map((todo) => (
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
