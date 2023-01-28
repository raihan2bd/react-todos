import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from '../../redux/ui/uiSlice';
import Modal from '../UI/Modals/Modal';
import TodoThread from './TodoThread';
import classes from './TodoThreads.module.css';

const TodoThreads = () => {
  const todoThreads = useSelector((state) => state.threads.todoThreads);
  const todos = useSelector((state) => state.todos.todos);
  const showModal = useSelector((state) => state.ui.showModal);

  const dispatch = useDispatch();

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
  return (
    <>
      {showModal && (
        <Modal onClose={() => dispatch(uiActions.closeModal())} isPromt>
          <div>Hello</div>
        </Modal>
      )}
      <ul className={classes.todo_threads}>{todoThreadsContent}</ul>
    </>
  );
};

export default TodoThreads;
