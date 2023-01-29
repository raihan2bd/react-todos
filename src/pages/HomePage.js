import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import TodoThreads from '../components/TodoThreads/TodoThreads';

import classes from './HomePage.module.css';

const HomePage = () => {
  const threads = useSelector((state) => state.threads);

  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    if (!threads.isInitialState) {
      return;
    }
    localStorage.setItem(
      'todo-list',
      JSON.stringify({
        todoThreads: threads.todoThreads,
        todos,
      }),
    );
  }, [threads, todos]);

  return (
    <section className={classes.home_sections}>
      <h2>Todo Threads</h2>
      <div>
        <TodoThreads />
      </div>
    </section>
  );
};

export default HomePage;
