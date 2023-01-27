import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => (
  <header className={classes.header}>
    <nav className={classes.nav}>
      <div className={classes.brand}>
        <h1>React Todos</h1>
      </div>
      <ul className={classes.nav_items}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
