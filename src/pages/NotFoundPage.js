import { Link } from 'react-router-dom';

import classes from './NotFoundPage.module.css';

const NotFoundPage = () => (
  <section className={classes.notfound_section}>
    <div className={classes.card}>
      <h2>404 NOT FOUND!</h2>
      <p className={classes.content}>
        404 Page not Found. please visit
        {' '}
        <Link to="/">Home Page</Link>
        {' '}
      </p>
    </div>
  </section>
);

export default NotFoundPage;
