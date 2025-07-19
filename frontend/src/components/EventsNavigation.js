import classes from './EventsNavigation.module.css';
import {NavLink} from "react-router-dom";

const getActiveClassName = ({isActive}) => {
  return isActive ? classes.active : undefined;
}
function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink end className={getActiveClassName} to="">All Events</NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to="new">New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
