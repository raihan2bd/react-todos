import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { uiActions } from '../../redux/ui/uiSlice';
import Button from '../UI/Button';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showNewThreadModalHandler = () => {
    navigate('/');
    dispatch(uiActions.openAddThreadModal());
  };

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
              onClick={showNewThreadModalHandler}
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
