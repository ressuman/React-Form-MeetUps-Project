import classes from "./Card.module.css";
import PropTypes from "prop-types";

export const Card = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
