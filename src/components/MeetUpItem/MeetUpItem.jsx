import { Card } from "../Card/Card";
import styles from "./MeetUpItem.module.css";

export const MeetUpItem = ({ title, image, address, description }) => {
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
          <button type="">To Favorites</button>
        </div>
      </Card>
    </li>
  );
};
