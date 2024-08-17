import axios from "axios";
import { NewMeetUpForm } from "../../components/NewMeetUpForm/NewMeetUpForm";
import classes from "./NewMeetUp.module.css";
import { useNavigate } from "react-router-dom";

export const NewMeetUp = () => {
  const navigate = useNavigate();

  async function addMeetUpHandler(meetUpData) {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_BACKEND_FIREBASE_DATABASE_SERVER_URL,
        meetUpData
      );
      console.log("Meetup added successfully:", response.data);

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error("Error adding meetup:", error);
    }
  }

  return (
    <section>
      <h1>Add New Meet Up</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
};
