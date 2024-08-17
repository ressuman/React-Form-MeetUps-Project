import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};
