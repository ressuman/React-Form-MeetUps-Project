import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    // <header className={styles.header}>
    //   <div className={styles.logo}>React Form Meet Ups</div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <NavLink to="/">All Meet Ups</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/new-meetup">Add New MeetUp</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/favorites">My Favorites</NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>

    <header className={styles.header}>
      <div className={styles.logo}>React Form Meet Ups</div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              isActive={(match, location) => location.pathname === "/"}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#ff6347" : "white",
              })}
            >
              All Meet Ups
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-meetup"
              isActive={(match, location) =>
                location.pathname === "/new-meetup"
              }
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#ff6347" : "white",
              })}
            >
              Add New MeetUp
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              isActive={(match, location) => location.pathname === "/favorites"}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#ff6347" : "white",
              })}
            >
              My Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

    // <header className={styles.header}>
    //   <div className={styles.logo}>React Form Meet Ups</div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <NavLink
    //           to="/"
    //           className={({ isActive }) =>
    //             isActive ? "active link-active" : "link"
    //           }
    //         >
    //           All Meet Ups
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="/new-meetup"
    //           className={({ isActive }) =>
    //             isActive ? "active link-active" : "link"
    //           }
    //         >
    //           Add New MeetUp
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="/favorites"
    //           className={({ isActive }) =>
    //             isActive ? "active link-active" : "link"
    //           }
    //         >
    //           My Favorites
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}
