import React from 'react';
import { useSelector } from 'react-redux';

import TodoThread from './TodoThread';
import classes from './TodoThreads.module.css';

const TodoThreads = () => {
  const todoThreads = useSelector((state) => state.threads.todoThreads);
  const todos = useSelector((state) => state.todos.todos);

  let todoThreadsContent = <p> No Threads Found! Please Add a New One!!</p>;

  if (todoThreads.length > 0) {
    todoThreadsContent = todoThreads.map((thread) => {
      const filteredTodos = todos.filter((todo) => todo.threadId === thread.id) || [];
      const completedTodos = filteredTodos.filter((todo) => todo.isCompleted !== false).length || 0;

      let percentage = -100;

      if (filteredTodos.length > 0) {
        percentage = (completedTodos / filteredTodos.length) * 100;
      }
      return (
        <TodoThread
          key={thread.id}
          id={thread.id}
          name={thread.name}
          totalTodos={filteredTodos.length}
          finishedTodos={completedTodos}
          percentage={percentage}
        />
      );
    });
  }
  return <ul className={classes.todo_threads}>{todoThreadsContent}</ul>;
};

export default TodoThreads;
