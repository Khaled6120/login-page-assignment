import PropTypes from "prop-types";
import styles from "./input.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Input = ({ labelName, placeholder, type, onChange, errors, extra }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputStyle = errors && errors[type] ? { borderColor: "#ee4331" } : {};

  return (
    <div className={styles.container}>
      <div className={styles.extra_container}>
        <label>{labelName}</label>
        {extra && <a>{extra}</a>}
      </div>
      <div className={styles.inputContainer}>
        <input onChange={onChange} type={showPassword ? "text" : type} placeholder={placeholder} style={inputStyle} />
        {type === "password" && (
          <div className={styles.iconContainer} onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  errors: PropTypes.object,
  value: PropTypes.string,
  extra: PropTypes.string,
};

export default Input;
