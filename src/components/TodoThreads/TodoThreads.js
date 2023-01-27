import React from 'react';
import { useSelector } from 'react-redux';

import TodoThread from './TodoThread';
import classes from './TodoThreads.module.css';

const TodoThreads = () => {
  const todoThreads = useSelector((state) => state.threads.todoThreads);

  let todoThreadsContent = <p> No Threads Found! Please Add a New One!!</p>;

  if (todoThreads.length > 0) {
    todoThreadsContent = todoThreads.map((thread) => (
      <TodoThread
        key={thread.id}
        id={thread.id}
        name={thread.name}
        totalTodos={thread.totalTodos}
        finishedTodos={thread.finishedTodos}
      />
    ));
  }
  return <ul className={classes.todo_threads}>{todoThreadsContent}</ul>;
};

export default TodoThreads;
