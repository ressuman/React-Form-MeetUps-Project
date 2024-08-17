import { useRef } from "react";
import { Card } from "../Card/Card";
import styles from "./NewMeetUpForm.module.css";
import PropTypes from "prop-types";

export const NewMeetUpForm = ({ onAddMeetUp }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    if (
      titleInputRef.current.value &&
      imageInputRef.current.value &&
      addressInputRef.current.value &&
      descriptionInputRef.current.value
    ) {
      console.log(meetUpData);
    }

    onAddMeetUp(meetUpData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meet Up Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="image">Meet Up Image</label>
          <input type="url" id="image" ref={imageInputRef} required />
        </div>

        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button type="submit">Add Meet Up</button>
        </div>
      </form>
    </Card>
  );
};

NewMeetUpForm.propTypes = {
  onAddMeetUp: PropTypes.func.isRequired,
};
