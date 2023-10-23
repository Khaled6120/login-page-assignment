import PropTypes from "prop-types";
import styles from "./input.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

function Input({ labelName, placeholder, type }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <label>{labelName}</label>
      <div className={styles.inputContainer}>
        <input type={showPassword ? "text" : type} placeholder={placeholder} />
        {type === "password" && (
          <div className={styles.iconContainer} onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
