import { useContext } from "react";
import styles from "./Favorites.module.css";
import { FavoritesContext } from "../../store/context/Favorites-Context";
import MeetUpList from "../../components/MeetUpList/MeetUpList";

export default function Favorites() {
  const favoriteContext = useContext(FavoritesContext);

  let content;

  if (favoriteContext.totalFavorites === 0) {
    content = <p>You have no favorites yet. Start adding some!</p>;
  } else {
    content = <MeetUpList meetups={favoriteContext.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
