import { MeetUpItem } from "../MeetUpItem/MeetUpItem";
import classes from "./MeetUpList.module.css";

export default function MeetUpList({ meetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
