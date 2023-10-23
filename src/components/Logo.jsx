import logo from "/logo_1.png";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" width="120px" height="48px" />
    </div>
  );
};

export default Logo;
