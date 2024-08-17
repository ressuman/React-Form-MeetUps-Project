import { useEffect, useState } from "react";
import MeetUpList from "../../components/MeetUpList/MeetUpList";
import classes from "./AllMeetUps.module.css";
import axios from "axios";

export const AllMeetUps = () => {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeetUps = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_BACKEND_FIREBASE_DATABASE_SERVER_URL
          }/meetups.json`
        );
        const data = response.data;

        const loadedMeetups = [];

        for (const key in data) {
          loadedMeetups.push({
            id: key,
            ...data[key],
          });
        }

        setMeetups(loadedMeetups);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching meetups:", error);
        setIsLoading(false);
      }
    };

    fetchMeetUps();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading Meetups...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All MeetUps</h1>
      <MeetUpList meetups={meetups} />
    </section>
  );
};
