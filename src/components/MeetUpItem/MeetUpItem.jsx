import { useContext } from "react";
import { Card } from "../Card/Card";
import styles from "./MeetUpItem.module.css";
import { FavoritesContext } from "../../store/context/Favorites-Context";

export const MeetUpItem = ({ id, title, image, address, description }) => {
  const favoriteContext = useContext(FavoritesContext);

  const itemIsFavorite = favoriteContext.itemIsFavorite(id);

  async function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      await favoriteContext.removeFavorite(id);
    } else {
      await favoriteContext.addFavorite({
        id,
        title,
        image,
        address,
        description,
      });
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>

        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>

        <div className={styles.actions}>
          <button type="button" onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};
