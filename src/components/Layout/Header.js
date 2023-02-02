import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { uiActions } from '../../redux/ui/uiSlice';
import Button from '../UI/Button';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <Link to="/">
            <h1>React Todos</h1>
          </Link>
        </div>
        <ul className={classes.nav_items}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <Button
              onClick={() => {
                dispatch(uiActions.openAddThreadModal());
              }}
              extraClass={classes.btn_new_thread}
            >
              New Thread
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
