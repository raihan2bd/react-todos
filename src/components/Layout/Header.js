import { Link } from 'react-router-dom';

import Button from '../UI/Button';
import classes from './Header.module.css';

const Header = () => (
  <header className={classes.header}>
    <nav className={classes.nav}>
      <div className={classes.brand}>
        <Link to="/">
          <h1>React Todos</h1>
        </Link>
      </div>
      <ul className={classes.nav_items}>
        <li>
          <Button
            onClick={() => {
              console.log('Add thread button called');
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

export default Header;
