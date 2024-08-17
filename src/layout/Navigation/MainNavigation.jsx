import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { useContext } from "react";
import { FavoritesContext } from "../../store/context/Favorites-Context";

export default function MainNavigation() {
  const favoriteContext = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Form Meet Ups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Meet Ups</NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup">Add New MeetUp</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              My Favorites
              <span className={styles.badge}>
                {favoriteContext.totalFavorites}
              </span>
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
    //           isActive={(match, location) => location.pathname === "/"}
    //           style={({ isActive }) => ({
    //             fontWeight: isActive ? "bold" : "normal",
    //             color: isActive ? "#ff6347" : "white",
    //           })}
    //         >
    //           All Meet Ups
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="/new-meetup"
    //           isActive={(match, location) =>
    //             location.pathname === "/new-meetup"
    //           }
    //           style={({ isActive }) => ({
    //             fontWeight: isActive ? "bold" : "normal",
    //             color: isActive ? "#ff6347" : "white",
    //           })}
    //         >
    //           Add New MeetUp
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="/favorites"
    //           isActive={(match, location) => location.pathname === "/favorites"}
    //           style={({ isActive }) => ({
    //             fontWeight: isActive ? "bold" : "normal",
    //             color: isActive ? "#ff6347" : "white",
    //           })}
    //         >
    //           My Favorites
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}
