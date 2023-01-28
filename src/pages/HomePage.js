import TodoThreads from '../components/TodoThreads/TodoThreads';

import classes from './HomePage.module.css';

const HomePage = () => (
  <section className={classes.home_sections}>
    <h2>Todo Threads</h2>
    <div>
      <TodoThreads />
    </div>
  </section>
);

export default HomePage;
