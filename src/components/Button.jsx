import styles from "./button.module.css";
import PropTypes from "prop-types";

const Button = ({ type = "submit", handleSubmit, text }) => (
  <button type={type} className={styles.button_container} onClick={handleSubmit}>
    <span className={styles.span_text}>{text}</span>
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
};

export default Button;
