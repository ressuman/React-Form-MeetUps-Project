import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <div>React Form Meet Ups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Meet Ups</NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup">Add New MeetUp</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">My Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
