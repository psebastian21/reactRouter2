import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";

const getActiveClassName = ({isActive}) => {
  return isActive ? classes.active : undefined;
}

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={getActiveClassName} to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to="/events">Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
